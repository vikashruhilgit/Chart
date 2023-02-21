import { FC } from "react";
import { VictoryBar, VictoryLabel, VictoryTooltip } from "victory";

export const MCCBarPolar: FC = () => {
  const data = [
    { x: 1, y: 500 },
    { x: 2, y: 400 },
    { x: 3, y: 900 },
    { x: 4, y: 100 },
    { x: 5, y: 700 },
    { x: 6, y: 600 },
    { x: 7, y: 300 },
  ];

  return (
    <div style={{ width: "300px" }}>
      <VictoryBar
        style={{ data: { width: 40, fill: "tomato" } }}
        polar
        data={data}
        labels={({ datum }) => [`y`, datum.y]}
        labelComponent={
          <VictoryTooltip
            active
            pointerLength={30}
            pointerWidth={0}
            flyoutPadding={0}
            labelComponent={
              <VictoryLabel
                verticalAnchor="end"
                dy={8}
                backgroundStyle={{ fill: "white" }}
                backgroundPadding={8}
              />
            }
          />
        }
      />
    </div>
  );
};
