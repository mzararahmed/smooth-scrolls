import React from 'react';
import { Link } from 'react-router-dom';
const Headr = () => {
    return (
        <div style={{zIndex:'100'}}>
            <Link to='/flicksimple'>flicksimple  --  </Link>
            <Link to='/scrollsimple'>scrollsimple  --  </Link>
            <Link to='/scrollto'>scrollto  --  </Link>
            <Link to='/flicksnap'>flicksnap</Link>
        </div>
    );
};

export default Headr;