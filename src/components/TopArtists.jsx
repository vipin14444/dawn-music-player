/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card, { CardBody, CardHeader } from "./Card";
import "./TopArtists.scss";

const TopArtists = () => {
    const ARTISTS = [
        {
            name: "Travis Scott",
            plays: "44M Plays",
            image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795",
        },
        {
            name: "Billie Ellish",
            plays: "203M Plays",
            image: "https://cdn.vox-cdn.com/thumbor/VetxE6rRTJt5tLhQ2Z99QFA9zcI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16127988/56973906_1031440620389086_5150401069125206016_o.jpg",
        },
        {
            name: "Drake",
            plays: "63M Plays",
            image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
        },
        {
            name: "Kanye",
            plays: "15M Plays",
            image: "https://www.nme.com/wp-content/uploads/2021/03/Kanye-West-2019.jpg",
        },
        {
            name: "Nicki Minaj",
            plays: "180M Plays",
            image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_37/2913291/190627-nikki-minaj-se-521p.jpg",
        },
        {
            name: "Starboy",
            plays: "100M Plays",
            image: "https://static.hiphopdx.com/2018/09/The-Weeknd_09-18-2018-640x480.jpg",
        },
    ];

    return (
        <Card className="artists-card">
            <CardHeader>
                <div className="card-title">Top Artists</div>
                <a href="#">See More</a>
            </CardHeader>
            <CardBody className="artists-card-body">
                {ARTISTS.map((artist, idx) => (
                    <div key={idx} className="artist-one">
                        <img src={artist.image} alt={artist.name} />
                        <div className="artist-name">{artist.name}</div>
                        <div className="artist-plays">{artist.plays}</div>
                    </div>
                ))}
            </CardBody>
        </Card>
    );
};

export default TopArtists;
