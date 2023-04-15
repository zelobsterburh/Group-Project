
function Card({ img, name, description, isLoggedIn}) {
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + img + `")`
        }}>
            <div className="details">
                <h1>
                    {name}
                    if(isLoggedIn == true) {
                    <button className="edit material-symbols-outlined">
                        edit
                    </button>
                    }
                </h1>
                <p>
                    {description}
                    <button className="edit material-symbols-outlined">
                        edit
                    </button>
                </p>
            </div>
        </div>
    )
}
export default Card;