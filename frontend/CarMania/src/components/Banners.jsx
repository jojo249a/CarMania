const Banners = ({ children }) => {
    return (
        <aside>
            <div className="banners">
                {children}
            </div>
        </aside>
    )
}

export default Banners;