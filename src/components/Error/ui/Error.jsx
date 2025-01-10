import styles from './Error.module.scss'
import cn from 'classnames'

export const Error = ({errorText, className}) => {
  return(
    <span className={cn(styles.error, className)}>{errorText}</span>
  )
}