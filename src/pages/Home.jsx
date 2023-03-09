import Header from "../components/Header"
import Image from "../components/Image"
import Description from "../components/Description"
import Footer from "../components/Footer"
function Home(){
    return(
        <div>
          <Header className="layout-Header" />
          <Image className="layout-Image" />
          <Description className="layout-Description" />
          <Footer className="layout-Footer" /> 
        </div>
    );
}

export default Home;