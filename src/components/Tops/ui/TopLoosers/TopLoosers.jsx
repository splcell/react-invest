import { ContentBox } from '../../../ContentBox'
import { ContentWrapper } from '../../../ContentWrapper/ui/ContentWrapper'
import { TopItem } from '../TopItem/TopItem'
import styles from './TopLoosers.module.scss'

export const TopLoosers = ({topArr, isLoading, isError}) => {

  return(
    <ContentBox title='Top Loosers' className={styles.loosersBox}>
      <ContentWrapper isLoading={isLoading} isError={isError} errorText='Tickers not Found'>
        <TopItem topArr={topArr}/>
      </ContentWrapper>
    </ContentBox>
  )
}