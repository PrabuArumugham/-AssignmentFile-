import React from 'react';

const inputComp = (props) => {
    const handleChange = event => {
        props.onchange(event.target.value);
    }
    return (
        <div>
            <input id="name" onChange= {handleChange}/>
      <button >Set the price </button>
        </div>
    );
}

export default inputComp;
