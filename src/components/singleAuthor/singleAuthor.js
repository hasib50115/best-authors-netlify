import React from 'react';
import './singleAuthor.css';

const SingleAuthor = (props) => {
    console.log(props);
    const {name, age, bestBook, speciality, hiringFees, img} = props.author;
    return(
        <div className="author-card">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Age: {age}</p>
            <p>Best Book: {bestBook}</p>
            <p>Speciality: {speciality}</p>
            <p>Hiring Cost: ${hiringFees}</p>
            <button onClick={()=>props.handleAddToCart(props.author)} className="btn">add to cart</button>
        </div>
    );
};





export default SingleAuthor;