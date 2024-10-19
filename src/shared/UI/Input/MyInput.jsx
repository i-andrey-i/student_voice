import React from 'react';
import './MyInput.css'
function MyInput(props) {
  return (
    <div className='MyInput'>
      <input 
        value={props.value} 
        onChange={props.onChange} 
        name={props.name} 
        type={props.type} 
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default MyInput;