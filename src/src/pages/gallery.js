import PageTitle from "../components/pageTitle";
import galleryData from "../data/galleryData";
export default function Gallery() {
    return (
        <>
            <PageTitle title="Gallery" />
            <section id="gallery">
                <div className="container container_center container_gallery">
                    <div className="gallery">
                        {galleryData.map((image) => {
                            return (
                                <img key={image.id} src={image.src} alt={image.title} className={image.class} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}