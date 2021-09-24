/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Charts.scss";
import TopArtists from "./TopArtists";
import Genres from "./Genres";
import TopCharts from "./TopCharts";

const Charts = () => {
    return (
        <div className="charts-container flex column">
            <TopArtists />

            <div className="genre-and-top-charts flex">
                <Genres />
                <TopCharts />
            </div>
        </div>
    );
};

export default Charts;
