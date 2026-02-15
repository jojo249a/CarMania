import { useState } from "react"
import { FaEye } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading" 
import ImagePreview from "../components/ImagePreview"

import styles from "../styles/pages/Showroom.module.css"

const ShowroomZilina = () => {
    const [imageShown, setImageShown] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    const images = [
        "/showroom8.avif",
        "/showroom2.jpg",
        "/showroom7.avif",
        "/showroom6.avif",
        "/showroom3.avif",
        "/showroom4.avif",
        "/showroom5.avif",
        "/showroom16.jpg",
    ];

    return (
        <>
            <ImagePreview imgs={images} index={galleryIndex} setIndex={setGalleryIndex} setIsOpen={setImageShown} isOpen={imageShown} />
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            <SecondLogo className={`headingLogo`}/>
                            Showroom Žilina
                        </Heading>
                    </div>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.textSectionInner}>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu semper nisl.
                                Nam efficitur ligula venenatis dui tempus vulputate.
                                Aenean tincidunt diam ac purus sollicitudin, placerat convallis purus vehicula.
                                Morbi sit amet tincidunt lorem. Suspendisse arcu magna, gravida ut libero vitae, luctus imperdiet odio.
                                Sed congue pharetra libero quis convallis. Morbi id sem orci.
                                Ut eget nulla tempor, semper mauris eget, vulputate magna.
                                Curabitur nulla felis, aliquam at ante nec, mollis malesuada eros.
                                Pellentesque at libero semper, aliquam ligula in, vestibulum sapien. In hac habitasse platea dictumst.
                                Fusce sagittis interdum tristique. Integer libero massa, convallis dapibus mi quis, tincidunt feugiat arcu.
                                Phasellus risus felis, fringilla a eleifend a, ultrices quis nisi.
                            </div>
                            <div className={styles.text}>
                                Aenean sed nisl pellentesque, facilisis felis rhoncus, mollis quam.
                                Aliquam mattis porttitor metus, vel ultrices nulla finibus quis.
                                Mauris interdum pulvinar ante, feugiat gravida eros blandit vel. Ut lacinia porta ante sed vehicula.
                                In a erat hendrerit, luctus urna eu, fermentum magna. Nunc vehicula sollicitudin massa, varius feugiat nisi faucibus et.
                                Curabitur at sollicitudin libero. In hac habitasse platea dictumst. Quisque sit amet odio ac neque cursus imperdiet.
                                Fusce eget risus vitae dui varius tincidunt vel id libero.
                                Quisque luctus nibh id nisl egestas viverra. Quisque eu felis eget nisl sollicitudin sodales.
                                Cras et justo hendrerit, vehicula velit quis, aliquet velit.
                            </div>
                        </div>
                    </div>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoWrap}>
                                    <strong>OPENING HOURS</strong>
                                    <span>Mon–Fri</span>
                                    <span>8:30–18:30</span>
                                </div>
                                <div className={styles.infoWrap}>
                                    <strong>ADDRESS</strong>
                                    <span>Einsteinova 3692/21,</span>
                                    <span>851 01 Petržalka</span>
                                </div>
                                <div className={styles.infoWrap}>
                                    <strong>CONTACT</strong>
                                    <span>+421 948 911 964</span>
                                    <span>info@car-mania.sk</span>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <div className={styles.infoWrap}>
                                    <strong>COMPANY</strong>
                                    <span>CarMania, s. r. o.</span>
                                    <span>I.C.: 26848023</span>
                                    <span>VAT No.: CZ26848023</span>
                                </div>
                                <div className={styles.infoWrap}>
                                    <strong>COMPANY HEADQUARTERS</strong>
                                    <span>Krmelínská 736/7</span>
                                    <span>720 00 Ostrava – Hrabová</span>
                                </div>
                                <div className={styles.infoWrap}>
                                    <strong>CONTACT</strong>
                                    <span>+421 948 911 964</span>
                                    <span>info@car-mania.cz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.imgGallery}>
                            {images.map((src, id) => (
                                <div key={id} 
                                    className={styles.imgWrap} 
                                    onClick={() => {setImageShown(true); setGalleryIndex(id)}}>
                                    <img src={src} 
                                        alt="Showroom"       
                                    />
                                    <FaEye className={styles.previewIcon}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ShowroomZilina;