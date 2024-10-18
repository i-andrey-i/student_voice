import React from 'react';
import './MyButton.css'

function MyButton(props) {
  return (
		<div className='MyButton'>
			<button type={props.type} disabled={props.disabled} style={props.styles}> 
                {props.message}
            </button>
		</div>
	)
}

export default MyButton;