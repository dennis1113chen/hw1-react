export default function ImageItem({image}){
    return(
        <section className="image mt-4 col-sm-6 col-lg-3">
        <div>
          <a href="" className="image__link">
             <img src={image.src}
              alt="" className="image__style"  />
         </a>
         <p className="image_title">{image.ImageItem}</p>
        </div>
        </section>
    )
}