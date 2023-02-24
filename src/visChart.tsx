import { FC } from "react";
import { BarChart } from "./vis-chart/BarChart";
import { GradientChart } from "./vis-chart/GradientChart";
import { LineChart } from "./vis-chart/LineChart";
import { LineMarkChart } from "./vis-chart/LineMarkChart";
import { MarkChart } from "./vis-chart/MarkChart";
import { TreeChart } from "./vis-chart/TreeChart";

import classes from "./visChart.module.scss";

export const VisChart: FC = () => {
  return (
    <section>
      <h2 className={classes.PageHeading}> React vis Chart</h2>
      <section className={classes.Wrapper}>
        <div className={classes.Container}>
          <p className={classes.Heading}>Line Chart</p>
          <div className={classes.InnerContainer}>
            <LineChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Bar Chart</p>
          <div className={classes.InnerContainer}>
            <BarChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Mark Chart</p>
          <div className={classes.InnerContainer}>
            <MarkChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Line Mark Chart</p>
          <div className={classes.InnerContainer}>
            <LineMarkChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Gradient Chart</p>
          <div className={classes.InnerContainer}>
            <GradientChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Tree Chart</p>
          <div className={classes.InnerContainer}>
            <TreeChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Line Chart</p>
          <div className={classes.InnerContainer}>
            <LineChart />
          </div>
        </div>
        <div className={classes.Container}>
          <p className={classes.Heading}>Line Chart</p>
          <div className={classes.InnerContainer}>
            <LineChart />
          </div>
        </div>
      </section>
    </section>
  );
};
