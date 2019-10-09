import React from 'react';
// import styles from './StarShipPage/.css'


const StarShipPage = (props)=>{
    const starShip = props.starShip(props.match.params.id);
    return(
        <div>
            Name|||{starShip.name}
            Model>>{starShip.model}
        </div>

    )
}

export default StarShipPage