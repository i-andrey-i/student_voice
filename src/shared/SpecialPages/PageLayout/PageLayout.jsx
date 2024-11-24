import styles from './PageLayout.module.css'

function PageLayout(props) {
  return (
		<div className={styles.block}>
			<p className={styles.Greeting}>{props.title}</p>
			{props.children}
		</div>
	)
}

export default PageLayout;