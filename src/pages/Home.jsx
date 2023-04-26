import Header from "../components/Header";
import ImgLayout from "../components/Image";
import DescriptionLayout from "../components/Description";
import Footer from "../components/Footer";
import {useImages} from "../react-query"

export default function Home(){
    const {data , isLoading } = useImages();
    const images = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}];
    return(
        <div>
            <Header
                title="NAME"
                slogan="SLOGAN"
            />
            <ImgLayout
                imagetitle="IMAGES"
                images={images}
                isLoading={isLoading}
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