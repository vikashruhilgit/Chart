import { FC, useState } from "react";
import {
  Border,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryStack,
  VictoryTheme,
} from "victory";
import { shuffleArray } from "../utils";

const initialColors = ["#830101", "#005e00", "#000087"];

export const MCCChartLegend: FC = () => {
  const [color, setColor] = useState(initialColors);

  const toggleColor = () => {
    const tempColor = shuffleArray(color);
    setColor([...tempColor]);
  };

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
      <button onClick={() => toggleColor()}>Toggle</button>
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryLegend
          x={125}
          y={50}
          title="Legend"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={[{ name: "One" }, { name: "Two" }, { name: "Three" }]}
          borderComponent={<Border width={0} />}
          colorScale={color}
        />
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryStack colorScale={"warm"}>
          <VictoryBar
            style={{ data: { fill: color[0] } }}
            data={data}
            x="x"
            y="y"
          />
          <VictoryBar
            style={{ data: { fill: color[1] } }}
            data={data1}
            x="x"
            y="y"
          />
          <VictoryBar
            style={{
              data: { fill: color[2] },
              parent: { border: "4px solid black" },
            }}
            data={data2}
            x="x"
            y="y"
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};
