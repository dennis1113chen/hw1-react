import Header from "../components/Header";
import ImgLayout from "../components/Image";
import DescriptionLayout from "../components/Description";
import Footer from "../components/Footer";
import images from"../images.json";

export default function Home(){
    return(
        <div>
            <Header
                title="NAME"
                slogan="SLOGAN"
            />
            <ImgLayout
                imagetitle="IMAGES"
                images={images}
            />
            <DescriptionLayout
                descriptiontitle="DESCRIPTIONS"
            />
            <Footer
                address="臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系"
                copyright="&copy; Copyright All rights reserved."
            />
        </div>

    );
}