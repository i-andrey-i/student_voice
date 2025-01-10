import styles from './TitleGraphAdmin.module.css'

function TitleGraphAdmin(props) {
  return (
		<div className={styles.Table}>
			<div className={`${styles.common} ${styles.TitleGraph}`} style={props.style}> <p>{props.title}</p> </div>
			{props.data.map((item) => (
        <div className={`${styles.common} ${styles.DataSt}`}><p className={styles.DataSt}>{item}</p></div>
      ))}
		</div>
	)
}

export default TitleGraphAdmin;