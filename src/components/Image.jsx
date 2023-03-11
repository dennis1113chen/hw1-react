import { Row, Col } from "antd";
import ImageItem from "./ImageItem";

export default function Image({images}){
    return(
        <article className="">
        <div className="container">
          <h1 className="text-center">IMAGES</h1>
          <hr className="divider--dark" />
          </div>
          <Row gutter={[32, 32]}>
          {images.map(image => (
            <Col 
              key={image.id}
              sm={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
            >
            <ImageItem key={image.id} image={image}/>
            </Col>
            ))}
          </Row>
            
        </article>
         
    );
    }
