import { Link } from 'react-router-dom';
function Card(props) {
    const item = props.item;
    const isLoggedIn = true;
    if(isLoggedIn) {
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + item.img + `")`
        }}>
            <div className="details">
                <h1>
                    {item.name}
                </h1>
                <p>
                    {item.description}
                </p>
            </div>
        </div>
    )
    } else {
        return(
            <div className="Card" style={{
                backgroundImage: `url("` + item.img + `")`
            }}>
                <div className="details">
                    <h2>
                    <Link to={`/ItemDetails/${item._id}`}>{item.name}</Link>
                    </h2>
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>

        )
    }
}
export default Card;