import Banner from "./Banner"
import BannerButton from "./BannerButton"
import CZFlag from "../assets/cz-flag.svg?react"
import SKFlag from "../assets/sk-flag.svg?react"

const ShowroomsBanner = () => {
    return (
        <Banner src="showroom2.jpg" alt="Showroom" heading="Showrooms CarMania">
            <BannerButton>
                <SKFlag className="buttonIcon" />
                <span><strong>ŽILINA</strong> Showroom</span>
            </BannerButton>
            <BannerButton>
                <CZFlag className="buttonIcon" />
                <span><strong>OSTRAVA</strong> Showroom</span>
            </BannerButton>
        </Banner>
    )
}

export default ShowroomsBanner;