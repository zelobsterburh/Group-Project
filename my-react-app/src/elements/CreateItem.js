import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateItem = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    description: '',
    img: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/items', item)
      .then((res) => {
        setItem({
          name: '',
          description: '',
          img: '',
        });

        // Push to /
        navigate('/');
        navigate('/SecondPage')
      })
      .catch((err) => {
        console.log('Error in CreateItem!');
      });
  };
  return(
  <div className='CreateItem'>
    <div className = 'Menu'>
    <Link to='/SecondPage' className='SecondPageLink'>
              Show Page
            </Link>
    </div>
    <div className = 'Form'>
        <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Item'
                  name='name'
                  className='form-control'
                  value={item.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this item'
                  name='description'
                  className='form-control'
                  value={item.description}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Image of this Item'
                  name='img'
                  className='form-control'
                  value={item.img}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='submit'
              />
            </form>
    </div>
  </div>
  )}
  export default CreateItem;