import { useEffect, useState } from "react";
import Tags from "../components/tags/Tags";
import Channels from "../components/channels/Channels";
import Carousel from "../components/carousel/Carousel";
import Features from "../components/features/Features";
import Shows from "../components/shows/Shows";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
export default function Home() {
    let [movies, setMovies] = useState([]);

    return (
        <>
            <Header movies={movies} />
            <Tags /> <br />
            <Carousel />
            <Channels />
            <Features />

            <Shows title="Drama Movies" /> <br />
            <br />
            <Shows title="Treding Movies" /> <br />
            <Footer />
        </>
    );
}
