import React from 'react';
import { auth } from './Firebase';

const Homepage = () => {
    return (
        <div>
            <h1>welcome To Home page</h1>
            <button onClick={()=>auth.signOut()}>signout</button>
        </div>
    )
}

export default Homepage
