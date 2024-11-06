import './MyButton.css'

function MyButton(props) {
  return (
		<div className='MyButton'>
			<button type={props.type} disabled={props.disabled} style={props.styles} onClick={props.onClick}> 
                {props.message}
            </button>
		</div>
	)
}

export default MyButton;