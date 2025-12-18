import Banner from "./Banner"
import BannerButton from "./BannerButton"
import CZFlag from "../assets/cz-flag.svg?react"

const ServiceBanner = () => {
    return (
        <Banner src="service.jpg" alt="Car service room" heading="Car Service CarMania">
            <BannerButton>
                <CZFlag className="buttonIcon" />
                <span>Order service in <strong>Ostrava</strong></span>
            </BannerButton>
        </Banner>
    )
}

export default ServiceBanner;