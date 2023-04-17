import Ebutt from "./eButt";

function Card({ img, name, description, isLoggedIn}) {
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + img + `")`
        }}>
            <div className="details">
                <h1>
                    {name}
                    <Ebutt isLoggedIn={isLoggedIn} />
                </h1>
                <p>
                    {description}
                    <Ebutt isLoggedIn={isLoggedIn} />
                </p>
            </div>
        </div>
    )
}
export default Card;