import { FC, useEffect, useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { range, random } from "../utils";

const getData = () => {
  const bars = random(6, 10);
  return range(1, bars, 1).map((bar: any) => {
    return { x: bar + 1, y: random(2, 10) };
  });
};

export const MCCBarAnimation: FC = () => {
  const [data, setData] = useState<any>();
  let setStateInterval: any;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setStateInterval = window.setTimeout(() => {
      setData(getData());
    }, 10000);
  }, [data]);

  useEffect(() => {
    return () => {
      window.clearInterval(setStateInterval);
    };
  });

  return (
    <div style={{ width: "300px" }}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 20 }}
        animate={{ duration: 1000 }}
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={data}
          style={{
            data: { fill: "tomato", width: 12 },
          }}
          animate={{
            onExit: {
              duration: 1000,
              before: () => ({
                _y: 0,
                fill: "orange",
                label: "BYE",
              }),
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};
