import styles from './style.module.css'

const FollowButton = () => (
	<div className={styles.container}>
		<button className={styles.button}>
			follow
		</button>
		<div className={styles.rainbow}></div>
	</div>
)

export default FollowButton