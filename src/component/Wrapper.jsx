import {Helmet} from "react-helmet";
import Banner from "./Banner";
import NavBar from "./NavBar";
import ServiceFeature from "./ServiceFeature";
import ServiceContent from "./ServiceContent";
import Project from "./Project";
import Footer from "./Footer";

function Wrapper() {
    return(
        <>
        <Helmet>
            <title>發芽工作室</title>
        </Helmet>
        <NavBar />
        <Banner />
        <ServiceFeature />
        <ServiceContent />
        <Project />
        <Footer />
        </>
    )
}

export default Wrapper;