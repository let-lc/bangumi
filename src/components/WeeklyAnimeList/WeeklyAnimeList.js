import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";

import styles from "./WeeklyAnimeList.module.css";
import AnimeCard from "../AnimeCard/AnimeCard";

const animeList = (props) => {
  let list = [];

  for (let day = 0; day < 7; day++) {
    list.push(
      props.items
        .filter((i) => {
          return new Date(i.begin).getDay() === day;
        })
        .map((item) => {
          const key = item.sites.find((i) => i.site === "bangumi").id;
          return <AnimeCard key={key} anime={item} bangumiId={key} />;
        })
    );
  }

  const weekdayCN = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const weekdayEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className={styles.list}>
      {list.map((l) => {
        return (
          <div key={list.indexOf(l)}>
            <Typography className={props.openSidebar ? styles.animeList : styles.animeListFullScreen} variant="h5" gutterBottom>
              <CalendarToday className={styles.calendarIcon} />
              {weekdayCN[list.indexOf(l)]}
            </Typography>
            <Divider />
            <div className={props.openSidebar ? styles.animeList : styles.animeListFullScreen}>{l}</div>
          </div>
        );
      })}
    </div>
  );
};

export default animeList;