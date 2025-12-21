import SecondLogo from "../assets/second-logo.svg?react"

const LoadingScreen = () => {
    return (
        <div className="loading">
            <div className="loadingText">
                Loading…
                <SecondLogo className="loadingLogo" />
            </div>
        </div>
    )
}

export default LoadingScreen;
