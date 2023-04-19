import { Link } from 'react-router-dom';
function Card(props) {
    const item = props.item;
    return (
        <div className="Card" style={{
            backgroundImage: `url("` + item.img + `")`
        }}>
            <div className="details">
                <h1>
                    {item.name}
                </h1>
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
export default Card;