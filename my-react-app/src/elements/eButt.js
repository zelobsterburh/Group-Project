import ITEMS from "../items";
function edit() {
    var elements = document.getElementsByTagName("input");
    for (let i = 0; i < ITEMS.length; i++) {
        ITEMS[i].name = elements[3*i].value;
        ITEMS[i].description = elements[3*i + 1].value;
        ITEMS[i].img = elements[3*i + 2].value;
    }
    console.log(ITEMS);
}
function Ebutt({ item, isLoggedIn }) {
    if (isLoggedIn) {
        return (
            <div className="details">
                <h1>
                    <input type="text" defaultValue={item.name} onChange={edit}></input>
                </h1>
                <p>
                    <input type="text" defaultValue={item.description} onChange={edit}></input>
                </p>
                <p>
                    <input type="text" defaultValue={item.img} onChange={edit}></input>
                </p>
                <p>
                    <button className="">Delete</button>
                </p>
            </div>
        )
    } else {
        return (
            <div className="details">
                <h1>
                    {item.name}
                </h1>
                <p>
                    {item.description}
                </p>
            </div>
        )
    }
}
export default Ebutt;