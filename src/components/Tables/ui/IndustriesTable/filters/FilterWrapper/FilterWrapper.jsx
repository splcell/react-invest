import { SearchFilter } from '../SearchFilter/SearchFilter'
import styles from './FilterWrapper.module.scss'

export const FilterWrapper = ({value, setValue}) => {
  return(
    <div className={styles.filterWrapper}>
      <SearchFilter value={value} setValue={setValue} placeholder='Ticker'/>
    </div>
  )
}