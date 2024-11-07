import styles from './MyButton.module.css'

function MyButton(props) {
  return (
		<div className={styles.MyButton}>
			<button type={props.type} disabled={props.disabled} style={props.styles} onClick={props.onClick}> 
                {props.message}
            </button>
		</div>
	)
}

export default MyButton;