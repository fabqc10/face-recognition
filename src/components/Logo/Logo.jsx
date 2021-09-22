import React from 'react';
import Tilt from 'react-tilt';
import './logo.styles.css';
import brain from './brain.png';


export const Logo = ()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner p3">
                <img style={{paddingTop: '25px'}} src={brain} alt="brain" />
            </div>
            </Tilt>
        </div>
    )
}