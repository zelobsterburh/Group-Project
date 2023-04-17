import Ebutt from "./eButt";

function Card({ img, name, description, isLoggedIn}) {
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + img + `")`
        }}>
            <Ebutt name={name} description={description} isLoggedIn={isLoggedIn} />
        </div>
    )
}
export default Card;