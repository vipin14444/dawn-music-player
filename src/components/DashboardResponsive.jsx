import React from "react";
import Charts from "./Charts";
import './DashboardResponsive.scss'
import Player from "./Player";
import TrendingBanner from "./TrendingBanner";

const DashboardResponsive = () => {
    return (
        <div className="dashboard">
            <TrendingBanner />
            <section className="player-and-charts-container flex">
                <Player />
                <Charts />
            </section>
        </div>
    );
};

export default DashboardResponsive;

// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import "./DashboardResponsive.scss";
// import { FiSearch } from "react-icons/fi";
// import { FaBell, FaCog } from "react-icons/fa";
// import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";
// import { MdPlayArrow } from "react-icons/md";
// import {
//     RiRepeatLine,
//     RiSkipBackFill,
//     RiPlayFill,
//     RiSkipForwardFill,
//     RiShuffleFill,
//     RiPlayListFill,
// } from "react-icons/ri";

// const DashboardResponsive = () => {
//     const ARTISTS = [
//         {
//             name: "Travis Scott",
//             plays: "44M Plays",
//             image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795",
//         },
//         {
//             name: "Billie Ellish",
//             plays: "203M Plays",
//             image: "https://cdn.vox-cdn.com/thumbor/VetxE6rRTJt5tLhQ2Z99QFA9zcI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16127988/56973906_1031440620389086_5150401069125206016_o.jpg",
//         },
//         {
//             name: "Drake",
//             plays: "63M Plays",
//             image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
//         },
//         {
//             name: "Kanye",
//             plays: "15M Plays",
//             image: "https://www.nme.com/wp-content/uploads/2021/03/Kanye-West-2019.jpg",
//         },
//         {
//             name: "Nicki Minaj",
//             plays: "180M Plays",
//             image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_37/2913291/190627-nikki-minaj-se-521p.jpg",
//         },
//         {
//             name: "Starboy",
//             plays: "100M Plays",
//             image: "https://static.hiphopdx.com/2018/09/The-Weeknd_09-18-2018-640x480.jpg",
//         },
//     ];

//     const TOP_CHARTS = [
//         {
//             rank: "01",
//             songName: "Havana",
//             singer: "Camila Cabello",
//             duration: "3:45",
//             albumArt:
//                 "https://i1.sndcdn.com/artworks-000377742285-vx6nig-t500x500.jpg",
//         },
//         {
//             rank: "02",
//             songName: "Jesus is King",
//             singer: "Kanye West",
//             duration: "3:45",
//             albumArt:
//                 "https://e.snmc.io/i/600/s/f63c117161926e8d37d00d59c7600432/8155544/kanye-west-jesus-is-king-deluxe-Cover-Art.jpg",
//         },
//         {
//             rank: "03",
//             songName: "Closer",
//             singer: "The Chainsmokers",
//             duration: "3:45",
//             albumArt:
//                 "https://images-na.ssl-images-amazon.com/images/I/41f-1yumNFL._SY445_SX342_QL70_ML2_.jpg",
//         },
//         {
//             rank: "04",
//             songName: "Lean On",
//             singer: "Major Lazer ft. DJ Snake",
//             duration: "3:45",
//             albumArt:
//                 "https://i.pinimg.com/originals/58/52/70/58527021c1e612c87988e5cbdbb13872.jpg",
//         },
//     ];

//     const GENRES = [
//         {
//             title: "Dance Beat",
//             color: "#466a89",
//         },
//         {
//             title: "Electro Pop",
//             color: "#a69985",
//         },
//         {
//             title: "Alternative Indie",
//             color: "#a34c33",
//         },
//         {
//             title: "Hip Hop",
//             color: "#0c4045",
//         },
//         {
//             title: "Classical Period",
//             color: "#a67895",
//         },
//         {
//             title: "Hip Hop Rap",
//             color: "#5647a5",
//         },
//     ];

//     return (
//         <div className="dashboard">
//             <div className="header flex align">
//                 <nav className="flex align">
//                     <div className="nav-link active">Music</div>
//                     <div className="nav-link">Podcast</div>
//                     <div className="nav-link">Live</div>
//                 </nav>

//                 <div className="search-container flex align">
//                     <FiSearch />
//                     <input type="text" placeholder="Type here to search" />
//                 </div>

//                 <div className="user-action-container flex align">
//                     <FaBell />
//                     <FaCog />
//                     <div className="user-info-container flex align">
//                         <div className="dp-container flex f-center">
//                             <img
//                                 src={`https://randomuser.me/api/portraits/men/52.jpg`}
//                                 alt="dp"
//                             />
//                         </div>
//                         <div className="name">Dave Cooper</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="trending-container">
//                 <h3>Trending New Hits</h3>
//                 <div className="trending-item">
//                     <div className="song-name">In My Feelings</div>
//                     <div className="song-meta flex align">
//                         <div className="singer">Camila Cabello</div>
//                         <div className="play-count">63 Million Plays</div>
//                     </div>
//                     <div className="trending-song-actions flex align">
//                         <button className="primary">Listen Now</button>
//                         <button className="secondary">
//                             <AiFillHeart />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <section className="flex">
//                 <div className="charts-container flex column">
//                     <div className="card artists-card">
//                         <div className="card-header">
//                             <div className="card-title">Top Artists</div>
//                             <a href="#">See More</a>
//                         </div>
//                         <div className="card-body flex align">
//                             {ARTISTS.map((artist, idx) => (
//                                 <div key={idx} className="artist-one">
//                                     <img src={artist.image} alt={artist.name} />
//                                     <div className="artist-name">
//                                         {artist.name}
//                                     </div>
//                                     <div className="artist-plays">
//                                         {artist.plays}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="genre-and-top-charts flex">
//                         <div className="card genre-card">
//                             <div className="card-header">
//                                 <div className="card-title">Genres</div>
//                                 <a href="#">See More</a>
//                             </div>
//                             <div className="card-body flex">
//                                 {GENRES.map((genre, idx) => (
//                                     <div
//                                         key={idx}
//                                         className="genre-one flex f-center"
//                                         style={{ backgroundColor: genre.color }}
//                                     >
//                                         {genre.title}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="card top-charts-card">
//                             <div className="card-header">
//                                 <div className="card-title">Top Charts</div>
//                                 <a href="#">See More</a>
//                             </div>
//                             <div className="card-body flex column">
//                                 {TOP_CHARTS.map((topChart, idx) => (
//                                     <div
//                                         key={idx}
//                                         className="top-chart-one flex align"
//                                     >
//                                         <div className="top-chart-rank">
//                                             {topChart.rank}
//                                         </div>
//                                         <img
//                                             className="top-chart-album-art"
//                                             src={topChart.albumArt}
//                                             alt={topChart.songName}
//                                         />
//                                         <div className="top-chart-song-meta">
//                                             <div className="top-chart-song-name">
//                                                 {topChart.songName}
//                                             </div>
//                                             <div className="top-chart-singer">
//                                                 {topChart.singer}
//                                             </div>
//                                         </div>
//                                         <div className="top-chart-duration">
//                                             {topChart.duration}
//                                         </div>
//                                         <button className="btn-top-chart-play flex f-center">
//                                             <MdPlayArrow />
//                                         </button>
//                                         <button className="btn-top-chart-expand flex f-center">
//                                             <AiOutlinePlus />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="player-container">
//                     <div className="card player-card">
//                         <div className="card-header">
//                             <div className="card-title">Player</div>
//                             <a href="#">
//                                 <RiPlayListFill />
//                             </a>
//                         </div>
//                         <div className="card-body nopadding">
//                             <div className="card-body-wrapper flex column">
//                                 <div className="music-player-meta flex column align justify">
//                                     <img
//                                         src="https://i.pinimg.com/originals/58/52/70/58527021c1e612c87988e5cbdbb13872.jpg"
//                                         alt="current_playing_art"
//                                         className="album-art"
//                                     />
//                                     <div className="current-song-name">
//                                         Lean On
//                                     </div>
//                                     <div className="current-singer-name">
//                                         Major Lazer ft. DJ Snake
//                                     </div>
//                                     <div className="current-album-name">
//                                         Best of 2020
//                                     </div>
//                                 </div>
//                                 <div className="seek-container flex align">
//                                     <div className="current-seek-time">
//                                         2:10
//                                     </div>
//                                     <div className="seek flex align"></div>
//                                     <div className="end-seek-time">3:45</div>
//                                 </div>
//                                 <div className="player-actions flex align justify">
//                                     <button>
//                                         <RiRepeatLine />
//                                     </button>
//                                     <button>
//                                         <RiSkipBackFill />
//                                     </button>
//                                     <button className="play-btn">
//                                         <RiPlayFill />
//                                     </button>
//                                     <button>
//                                         <RiSkipForwardFill />
//                                     </button>
//                                     <button>
//                                         <RiShuffleFill />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default DashboardResponsive;
