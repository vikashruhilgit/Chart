import { FC } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
} from "victory";

export const MCCBarCustomColor: FC = () => {
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
  const data1 = [
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
  const data2 = [
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
        <VictoryStack colorScale={"warm"}>
          <VictoryBar
            style={{ data: { fill: "#830101" } }}
            data={data}
            x="x"
            y="y"
          />
          <VictoryBar
            style={{ data: { fill: "#005e00" } }}
            data={data1}
            x="x"
            y="y"
          />
          <VictoryBar
            style={{ data: { fill: "#000087" } }}
            data={data2}
            x="x"
            y="y"
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};
