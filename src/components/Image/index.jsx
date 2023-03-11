import '../../App.css';
import styles from "./image.module.css"
import { Row, Col } from "antd";
import ImageItem from "../ImageItem";

export default function Image({images}) {
  return (
    <article className={styles.image}>
      <div className="container">
         <h1 className="h1"> IMAGES
         </h1>
         <hr className={styles.dividerDark} />
            <Row gutter={[32,32]}>
              {images.map(image => (
                <Col
                key={image.id}
                sm={{span:12}}
                lg={{span:8}}
                xl={{span:6}}
                >
                <ImageItem key={image.id}
                  image={image} />
                </Col>
                    ))}
                </Row>
            </div>
        </article>
    );
}