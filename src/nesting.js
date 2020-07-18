import React from 'react';

const Child = ({ nest, delNinja }) => {
    const njList = nest.map(njf => {
        if (njf.age > 20) {
            return(
                <div className="nj" key={njf.id}> 
                    <div>Name: {njf.name}</div>
                    <div>Age: {njf.age} </div>
                    <div>belt: {njf.belt} </div>
                    <button onClick={() => {delNinja(njf.id)}}>Delete</button>
                </div>
            )
        } else {
            return null
        }
    })
    return(
        <div className="nj-List">
            { njList }
        </div>
    )
}

export default Child