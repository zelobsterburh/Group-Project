import './FirstPage.css';
import Card from './Card';
import { useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
function SecondPage(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('docs.json')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log('Error from FirstPage');
      });
  }, []);

  const itemList =
    items.length === 0
      ? 'there is no item record!'
      : items.map((item, k) => <Card item = {item}  key={k} />);

      return (
        <div className="App">
           <div className="Menu">
           <a href="/CreateItem">+ Add New Item</a>
           <Link
              to='/'
              className='login'
            >
             Logout
            </Link>
            </div>
          <div className="List">
            {itemList}
          </div>
        </div>
      );
        
}
export default SecondPage;