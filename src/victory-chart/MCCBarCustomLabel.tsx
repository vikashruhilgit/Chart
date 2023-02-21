import { FC } from "react";
import {
  Bar,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory";

export const MCCBarCustomLabel: FC = () => {
  const data = [
    { x: 1, y: 500 },
    { x: 2, y: 400 },
    { x: 3, y: 900 },
    { x: 4, y: 100 },
    { x: 5, y: 700 },
    { x: 6, y: 600 },
    { x: 7, y: 300 },
    { x: 8, y: 200 },
    { x: 9, y: 10 },
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
          labels={({ datum }) => [`y`, datum.y]}
          labelComponent={
            <VictoryLabel
              dy={-20}
              backgroundStyle={[
                { fill: "tomato", opacity: 0.6 },
                { fill: "blue", opacity: 0.6 },
              ]}
              backgroundPadding={{ bottom: 5, top: 5, left: 5, right: 5 }}
            />
          }
        />
      </VictoryChart>
    </div>
  );
};
