/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Player.scss";
import {
    RiRepeatLine,
    RiSkipBackFill,
    RiPlayFill,
    RiSkipForwardFill,
    RiShuffleFill,
    RiPlayListFill,
} from "react-icons/ri";
import Card, { CardBody, CardHeader } from "./Card";

const Player = () => {
    return (
        <div className="player-container">
            <Card className="player-card">
                <CardHeader>
                    <div className="card-title">Player</div>
                    <a href="#">
                        <RiPlayListFill />
                    </a>
                </CardHeader>
                <CardBody className={"player-card-body nopadding"}>
                    <div className="card-body-wrapper flex column">
                        <div className="music-player-meta flex column align justify">
                            <img
                                src="https://i.pinimg.com/originals/58/52/70/58527021c1e612c87988e5cbdbb13872.jpg"
                                alt="current_playing_art"
                                className="album-art"
                            />
                            <div className="current-song-name">Lean On</div>
                            <div className="current-singer-name">
                                Major Lazer ft. DJ Snake
                            </div>
                            <div className="current-album-name">
                                Best of 2020
                            </div>
                        </div>
                        <div className="seek-container flex align">
                            <div className="current-seek-time">2:10</div>
                            <div className="seek flex align"></div>
                            <div className="end-seek-time">3:45</div>
                        </div>
                        <div className="player-actions flex align justify">
                            <button>
                                <RiRepeatLine />
                            </button>
                            <button>
                                <RiSkipBackFill />
                            </button>
                            <button className="play-btn">
                                <RiPlayFill />
                            </button>
                            <button>
                                <RiSkipForwardFill />
                            </button>
                            <button>
                                <RiShuffleFill />
                            </button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Player;
