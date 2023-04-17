function Ebutt({ name, description, isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <div className="details">
                <h1>
                    <input type="text" value={name}>
                    </input>
                </h1>
                <p>
                    <input type="text" value={description}>
                    </input>
                </p>
            </div>
        )
    } else {
        return (
            <div className="details">
                <h1>
                    {name}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}
export default Ebutt;