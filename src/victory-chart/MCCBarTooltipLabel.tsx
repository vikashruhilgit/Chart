import { FC } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

export const MCCBarTooltipLabel: FC = () => {
  const data = [
    { x: 1, y: 500 },
    { x: 2, y: 400 },
    { x: 3, y: 900 },
    { x: 4, y: 100 },
    { x: 5, y: 700 },
    { x: 6, y: 600 },
    { x: 7, y: 300 },
    { x: 8, y: 200 },
    { x: 9, y: 0 },
  ];

  return (
    <div style={{ width: "300px" }}>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={data}
          x="x"
          y="y"
          labels={({ datum }) => `y: ${datum.y}`}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </div>
  );
};
