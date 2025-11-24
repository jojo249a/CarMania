import "./Home.css"

export default function Home() {
    return (
        <div className="home-wrapper">
            <section className="intro-section">
                <div className="intro-wrapper">
                    <img src="/showroom6.avif" alt="Background" className="background-img" />
                    <div className="intro-text">
                        <div class="intro-heading">
                            <span>CarMania</span>
                        </div>
                        <div className="intro-desc">
                            <span>All The Cars You Love</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}