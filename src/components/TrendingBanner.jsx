import React from "react";
import { AiFillHeart } from "react-icons/ai";
import './TrendingBanner.scss'

const TrendingBanner = () => {
    return (
        <div className="trending-container">
            <h3>Trending New Hits</h3>
            <div className="trending-item">
                <div className="song-name">In My Feelings</div>
                <div className="song-meta flex align">
                    <div className="singer">Camila Cabello</div>
                    <div className="play-count">63 Million Plays</div>
                </div>
                <div className="trending-song-actions flex align">
                    <button className="primary">Listen Now</button>
                    <button className="secondary">
                        <AiFillHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingBanner;
