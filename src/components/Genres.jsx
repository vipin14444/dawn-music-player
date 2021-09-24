/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card, { CardBody, CardHeader } from "./Card";
import "./Genres.scss";

const Genres = () => {
    const GENRES = [
        {
            title: "Dance Beat",
            color: "#466a89",
        },
        {
            title: "Electro Pop",
            color: "#a69985",
        },
        {
            title: "Alternative Indie",
            color: "#a34c33",
        },
        {
            title: "Hip Hop",
            color: "#0c4045",
        },
        {
            title: "Classical Period",
            color: "#a67895",
        },
        {
            title: "Hip Hop Rap",
            color: "#5647a5",
        },
    ];

    return (
        <Card className="genre-card">
            <CardHeader>
                <div className="card-title">Genres</div>
                <a href="#">See More</a>
            </CardHeader>
            <CardBody className="flex">
                {GENRES.map((genre, idx) => (
                    <div
                        key={idx}
                        className="genre-one flex f-center"
                        style={{ backgroundColor: genre.color }}
                    >
                        {genre.title}
                    </div>
                ))}
            </CardBody>
        </Card>
    );
};

export default Genres;
