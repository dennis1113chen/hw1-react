import styles from './description.module.css'
import '../../App.css';
export default function description({descriptiontitle,descriptioncontent}){
    return(

        <article className={styles.description}>
        <div className="container">
          <h1 className='h1'>{descriptiontitle}</h1>
          <hr className={styles.dividerLight} />
          <p className={styles.descriptionContent}>
            {descriptioncontent}
          </p>
        </div>
      </article>
    );
}