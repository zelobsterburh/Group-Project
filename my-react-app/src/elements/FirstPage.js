import './FirstPage.css';
import Card from './Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ITEMS from "../items";

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
              <Card item={item} isLoggedIn={false} />
            ))}
          </div>
        </div>
      );
}
export default FirstPage;