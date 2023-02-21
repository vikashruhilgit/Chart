import { FC } from "react";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";

export const MCCCustomBackground: FC = () => {
  return (
    <div style={{ width: "500px" }}>
      <VictoryChart
        domain={{ y: [2000, 5000] }}
        style={{ background: { opacity: 0.8 } }}
        backgroundComponent={
          <image href={"https://picsum.photos/id/906/525/300.jpg"} />
        }
      >
        <VictoryLine
          data={[
            { x: 0, y: 2500 },
            { x: 1.25, y: 2600 },
            { x: 1.8, y: 3000 },
            { x: 2.7, y: 3300 },
            { x: 3.1, y: 3800 },
            { x: 3.25, y: 4000 },
            { x: 3.5, y: 4000 },
            { x: 4, y: 4478, label: "4,478m" },
            { x: 4.5, y: 4300 },
            { x: 5.1, y: 4200 },
            { x: 6.3, y: 3500 },
            { x: 6.75, y: 3400 },
            { x: 7, y: 3300 },
            { x: 7.25, y: 3200 },
            { x: 9, y: 2900 },
            { x: 12, y: 2000 },
          ]}
          style={{
            data: { strokeWidth: 4 },
          }}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
};
