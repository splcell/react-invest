import styles from './Preloader.module.scss'
import cn from 'classnames'

export const Preloader = ({className}) => {
  return(
    <span className={cn(styles.loader, className)}></span>
  )
}