import Text from '../Text'

import styles from './style.module.css'

const Group = ({message, children}) => (
	<div className={styles.group}>
		<Text type="groupMessage">{message}</Text>
		{children}
	</div>
)

export default Group