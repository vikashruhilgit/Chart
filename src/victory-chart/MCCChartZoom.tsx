import { FC } from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryZoomContainer,
} from "victory";
import { random, range } from "../utils";

const getScatterData = () => {
  return range(1, 50, 1).map((index) => {
    return {
      x: random(1, 50),
      y: random(10, 90),
      size: random(1, 8) + 3,
    };
  });
};

export const MCCChartZoom: FC = () => {
  const data = getScatterData();

  return (
    <div style={{ width: "500px" }}>
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ y: [0, 100] }}
        containerComponent={
          <VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 100] }} />
        }
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryScatter
          data={data}
          style={{
            data: {
              opacity: ({ datum }) => (datum.y % 5 === 0 ? 1 : 0.7),
              fill: ({ datum }) => (datum.y % 5 === 0 ? "tomato" : "black"),
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};
