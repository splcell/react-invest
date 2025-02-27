import { ContentBox } from '../../../ContentBox';
import { NewsItem } from '../NewsItem/NewsItem';
import styles from './NewsList.module.scss'

export const NewsList = ({feedArr}) => {
  return(
    <ul className={styles.newsList}>
      {feedArr && feedArr?.slice(0, 20).map((item, index) => (
        <ContentBox>
          <NewsItem key={index} feed={item}/>
        </ContentBox>
      ))}
    </ul>
  )
}