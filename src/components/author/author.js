import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../cart/cart';
import SingleAuthor from '../singleAuthor/singleAuthor';
import './author.css';
const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./authors.JSON')
        .then(res => res.json())
        .then(data => setAuthors(data))
      }, []);

      const handleAddToCart = (author) => {
          const newCart = [...cart, author];
          setCart(newCart);

      }
    return(
        <div className="authors-container">
            <div className="author-container">
                {
                    authors.map(author => <SingleAuthor author={author} key={author._id} handleAddToCart={handleAddToCart}></SingleAuthor>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Author;