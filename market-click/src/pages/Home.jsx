import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";

function Home() {
    return (
        <div className="w-full min-h-fit h-screen">
            <Navbar />
            <Carousel />
        </div>
    )
}

export default Home;