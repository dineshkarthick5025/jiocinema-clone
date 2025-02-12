import { useEffect, useState } from "react";
import Header from "../../components/header";
import Tags from "../../components/tags/tags";
import Channels from "../../components/channels/Channels";
import Carousel from "../../components/carousel/Carousel";
import Features from "../../components/features/Features";
import Shows from "../../components/shows/Shows";
import Footer from "../../components/footer/Footer";

export default function Home()
{

    let [movies,setMovies] = useState([]);

    useEffect(async ()=>{

        try 
        {
            let movieResponse  = await fetch("http://localhost:3000/movies");
            let moviesData = await movieResponse.json();

            setMovies(moviesData);
            
        }
        catch(err)
        {
            console.log(err);
        }

    },[])


    return (
        <>
            <Header movies = {movies}/>
            <Tags/> <br />
            <Carousel/>
            <Channels/>
            <Features/>

            <Shows title="Drama Movies"/> <br />
            <br></br>
            <br></br>
            <Shows title="Treding Movies"/> <br />
            <Footer></Footer>
            
        </>
    )
}