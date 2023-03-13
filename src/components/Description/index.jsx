import styles from './description.module.css'
import '../../App.css';
export default function description({descriptiontitle,descriptioncontent}){
    return(

        <article className={styles.description}>
        <div className="container">
          <h1 className='h1'>{descriptiontitle}</h1>
          <hr className={styles.dividerLight} />
          <p className={styles.descriptionContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
            ullam
            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
            quod
            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
            tempora.
            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!
          </p>
        </div>
      </article>
    );
}