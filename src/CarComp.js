import React from 'react'

const CarComp = (props) => {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <h2>{props.user.company.name}</h2>
            <h3>{props.user.company.catchPhrase}</h3>
        </div>
    )
}

export default CarComp;
