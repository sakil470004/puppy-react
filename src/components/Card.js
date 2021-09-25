import React from 'react';
import './Card.css';

const Card = (props) => {
    let randomNumber = Math.floor((Math.random() * 50) + 200);
    return (

        <div className='background-div'>
            {/* <img src={`https://robohash.org/${props.id}?200*200`} alt='robots' /> */}

            <img src={`https://place-puppy.com/${randomNumber}x${randomNumber}`} alt='robots' />
            <div>
                <h2 >{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );


}
export default Card;