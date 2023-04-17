import Ebutt from "./eButt";

function Card({ item, isLoggedIn}) {
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + item.img + `")`
        }}>
            <Ebutt item={item} isLoggedIn={isLoggedIn} />
        </div>
    )
}
export default Card;