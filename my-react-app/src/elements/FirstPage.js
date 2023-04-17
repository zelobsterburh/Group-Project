import './FirstPage.css';
import Card from './Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ITEMS = [
    {
      img: "smiley.jfif",
      name: "Smiley",
      description: "He is a cow. Do you want more from him? He is doing a great job as a cow. It'd be a shame if we had to find a replacement for that job."
    },
    {
      img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
      name: "Daisy",
      description: "While looking like a regular dairy cow she is actually jerk who will give you nothing but a side eye."
    },
    {
      img:"https://t4.ftcdn.net/jpg/02/48/06/73/360_F_248067351_nGy9A0eWCZQgdg11byXcgH12y4nrJLSw.jpg",
      name: "Carl",
      description: "A loveable goofball that wants nothing more then to give you a good lick."
    },
    {
      img:"https://t3.ftcdn.net/jpg/05/65/02/50/360_F_565025093_2YmqXAkG51LQEGImxcztYHKpBfPCVwB7.jpg",
      name: "Tim",
      description: "He looks cool and he knows it."
    }
  ]
function FirstPage() {
    
      return (
        <div className="App">
           <div className="Menu">
           <Link
              to='/SignIn'
              className='login'
            >
             Sign In
            </Link>
            </div>
          <div className="List">
            {ITEMS.map((item) => (
              <Card img={item.img} name={item.name} description={item.description} isLoggedIn={false} />
            ))}
          </div>
        </div>
      );
}
export default FirstPage;