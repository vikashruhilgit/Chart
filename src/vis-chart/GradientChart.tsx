import { FC } from "react";
import {
  GradientDefs,
  LineSeries,
  MarkSeries,
  VerticalBarSeries,
  XYPlot,
} from "react-vis";

export const GradientChart: FC = () => {
  const series1 = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  const gradient = (
    <GradientDefs>
      <linearGradient
        id="myGradient"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="200"
        y2="200"
      >
        <stop offset="10%" stopColor="#c6e48b" />
        <stop offset="33%" stopColor="#7bc96f" />
        <stop offset="66%" stopColor="#239a3b" />
        <stop offset="90%" stopColor="#196127" />
      </linearGradient>
    </GradientDefs>
  );
  return (
    <div style={{ display: "flex" }}>
      <XYPlot height={300} width={300} stroke="#fff">
        {gradient}
        <VerticalBarSeries
          barWidth={1}
          data={series1}
          color={"url(#myGradient)"}
        />
      </XYPlot>
      <XYPlot height={300} width={300}>
        {gradient}
        <LineSeries data={series1} color={"url(#myGradient)"} />
      </XYPlot>
      <XYPlot height={300} width={300}>
        {gradient}
        <MarkSeries data={series1} color={"url(#myGradient)"} />
      </XYPlot>
    </div>
  );
};
