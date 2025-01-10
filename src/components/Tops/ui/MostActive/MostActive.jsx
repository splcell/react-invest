import { ContentBox } from '../../../ContentBox'
import { ContentWrapper } from '../../../ContentWrapper/ui/ContentWrapper'
import { TopItem } from '../TopItem/TopItem'
import styles from './MostActive.module.scss'

export const MostActive = ({topArr, isLoading, isError}) => {
  return(
    <ContentBox title='Most Active' className={styles.activeBox}>
      <ContentWrapper isLoading={isLoading} isError={isError} errorText='Tickers not Found'>
        <TopItem topArr={topArr}/>
      </ContentWrapper>
    </ContentBox>
  )
}