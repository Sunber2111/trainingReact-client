import React from 'react'
import Navbar from '../common/Navbar'

const HomePage = () => {

    const arr = ['Home','Product','Iphone','Ipad','Macbook']

    const rating = 5;

    const handleClick = ()=>{
        console.log('hello callback');
    }

    return (
        <div>
            <Navbar listName={arr} rate={rating} handleClick={handleClick}  />
        </div>
    )
}

export default HomePage
