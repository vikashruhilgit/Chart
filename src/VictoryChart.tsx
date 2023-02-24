import { FC } from "react";

import { MCCBar } from "./victory-chart/MCCBar";
import { MCCBarTooltipLabel } from "./victory-chart/MCCBarTooltipLabel";
import { MCCBarCustomColor } from "./victory-chart/MCCBarCustomColor";
import { MCCBarStack } from "./victory-chart/MCCBarStack";
import { MCCBarTheme } from "./victory-chart/MCCBarTheme";
import { MCCBarCustomLabel } from "./victory-chart/MCCBarCustomLabel";
import { MCCBarPolar } from "./victory-chart/MCCBarPolar";
import { MCCBarBackgroundBasic } from "./victory-chart/MCCBarBackgroundBasic";
import { MCCBarGradientBackground } from "./victory-chart/MCCBarGradientBackground";
import { MCCCustomBackground } from "./victory-chart/MCCCustomBackground";
import { MCCBarAnimation } from "./victory-chart/MCCBarAnimation";
import { MCCChartZoom } from "./victory-chart/MCCChartZoom";
import { MCCChartBrush } from "./victory-chart/MCCChartBrush";
import { MCCChartLegend } from "./victory-chart/MCCChartLegend";
import { MCCBarCustomTheme } from "./victory-chart/MCCBarCustomTheme";

import classes from "./VictoryChart.module.scss";
import { MCCSharedEvent } from "./victory-chart/MCCSharedEvent";

export const VictoryChart: FC = () => {
  return (
    <>
      <section>
        <h2 className={classes.PageHeading}>Victory Chart</h2>
        <section className={classes.Wrapper}>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Basic</p>
            <div className={classes.InnerContainer}>
              <MCCBar />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Stack</p>
            <div className={classes.InnerContainer}>
              <MCCBarStack />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Theme</p>
            <div className={classes.InnerContainer}>
              <MCCBarTheme />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Custom Color</p>
            <div className={classes.InnerContainer}>
              <MCCBarCustomColor />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Polar</p>
            <div className={classes.InnerContainer}>
              <MCCBarPolar />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Tooltip Label</p>
            <div className={classes.InnerContainer}>
              <MCCBarTooltipLabel />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Bar Chart Custom Label</p>
            <div className={classes.InnerContainer}>
              <MCCBarCustomLabel />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Background for Chart</p>
            <div className={classes.InnerContainer}>
              <MCCBarBackgroundBasic />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Gradient Background</p>
            <div className={classes.InnerContainer}>
              <MCCBarGradientBackground />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Custom Background</p>
            <div className={classes.InnerContainer}>
              <MCCCustomBackground />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Chart Animation</p>
            <div className={classes.InnerContainer}>
              <MCCBarAnimation />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>MCC Chart Zoom</p>
            <div className={classes.InnerContainer}>
              <MCCChartZoom />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>MCC Chart Brush</p>
            <div className={classes.InnerContainer}>
              <MCCChartBrush />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Custom Theme</p>
            <div className={classes.InnerContainer}>
              <MCCBarCustomTheme />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>legend with Toggle</p>
            <div className={classes.InnerContainer}>
              <MCCChartLegend />
            </div>
          </div>
          <div className={classes.Container}>
            <p className={classes.Heading}>Shared Event</p>
            <div className={classes.InnerContainer}>
              <MCCSharedEvent />
            </div>
          </div>
        </section>
      </section>
      {/* <section>
        <h2 className={classes.PageHeading}>Victory Chart Legend</h2>
        <section className={classes.Wrapper}></section>
      </section> */}
    </>
  );
};
