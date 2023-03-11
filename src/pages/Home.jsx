import Header from "../components/Header"
import Image from "../components/Image"
import Description from "../components/Description"
import Footer from "../components/Footer"
import images from "../images.json"

function Home(){
    return(
        <div >
          <Header title="Name" />
          <Image images={images}/>
          <Description/>
          <Footer address="臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系"
                copyright="&copy; Copyright All rights reserved."
          /> 
        </div>
    );
}

export default Home;