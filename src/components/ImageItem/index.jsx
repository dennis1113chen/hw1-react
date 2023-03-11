import styles from './imageItem.module.css'
import '../../App.css';

export default function ImageItem({ image}) { 
    return (   
            <div className={styles.image}>   
                <a href="" className={styles.Link}>
                    <img src={image.src}  className={styles.Style} />
                </a>
                <p className={styles.Title}> 
                    {image.imageTitle}
                </p>
            </div>
    );
}