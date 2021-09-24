/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./TopCharts.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { MdPlayArrow } from "react-icons/md";

const TopCharts = () => {
    const TOP_CHARTS = [
        {
            rank: "01",
            songName: "Havana",
            singer: "Camila Cabello",
            duration: "3:45",
            albumArt:
                "https://i1.sndcdn.com/artworks-000377742285-vx6nig-t500x500.jpg",
        },
        {
            rank: "02",
            songName: "Jesus is King",
            singer: "Kanye West",
            duration: "3:45",
            albumArt:
                "https://e.snmc.io/i/600/s/f63c117161926e8d37d00d59c7600432/8155544/kanye-west-jesus-is-king-deluxe-Cover-Art.jpg",
        },
        {
            rank: "03",
            songName: "Closer",
            singer: "The Chainsmokers",
            duration: "3:45",
            albumArt:
                "https://images-na.ssl-images-amazon.com/images/I/41f-1yumNFL._SY445_SX342_QL70_ML2_.jpg",
        },
        {
            rank: "04",
            songName: "Lean On",
            singer: "Major Lazer ft. DJ Snake",
            duration: "3:45",
            albumArt:
                "https://i.pinimg.com/originals/58/52/70/58527021c1e612c87988e5cbdbb13872.jpg",
        },
    ];

    return (
        <div className="card top-charts-card">
            <div className="card-header">
                <div className="card-title">Top Charts</div>
                <a href="#">See More</a>
            </div>
            <div className="card-body flex column">
                {TOP_CHARTS.map((topChart, idx) => (
                    <div key={idx} className="top-chart-one flex align">
                        <div className="top-chart-rank">{topChart.rank}</div>
                        <img
                            className="top-chart-album-art"
                            src={topChart.albumArt}
                            alt={topChart.songName}
                        />
                        <div className="top-chart-song-meta">
                            <div className="top-chart-song-name">
                                {topChart.songName}
                            </div>
                            <div className="top-chart-singer">
                                {topChart.singer}
                            </div>
                        </div>
                        <div className="top-chart-duration">
                            {topChart.duration}
                        </div>
                        <button className="btn-top-chart-play flex f-center">
                            <MdPlayArrow />
                        </button>
                        <button className="btn-top-chart-expand flex f-center">
                            <AiOutlinePlus />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCharts;
