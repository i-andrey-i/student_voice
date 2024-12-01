import styles from './GraphOfCreate.module.css'

const GraphOfCreate = ({ label, value, onChange, required }) => {
	return (
		<div>
			<label>
				<input
					className={styles.Text}
					placeholder={label}
					type='text'
					value={value}
					onChange={onChange}
					required={required}
				/>
			</label>
		</div>
	)
}

export default GraphOfCreate