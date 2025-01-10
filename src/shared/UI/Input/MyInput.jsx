import styles from './MyInput.module.css'
function MyInput(props) {
  return (
    <div className={styles.MyInput}>
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