import React from 'react';

const HomePage = (props) => {
    return (
        <div className="zomato-home">
            <h1>Landing and login page</h1>
            <button onClick={()=>props.handleLogin(true)}>login</button>
        </div>
    );
}

export default HomePage;