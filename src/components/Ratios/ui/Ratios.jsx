import { useGetKeyRatiosQuery } from '../../../redux/investmentsApi'
import { ContentBox } from '../../ContentBox'
import { ProfileList } from '../../ProfileList/ui/ProfileList'
import styles from './Ratios.module.scss'

export const Ratios = ({ticker}) => {
  const {data, isLoading, isError} = useGetKeyRatiosQuery({ticker})

  console.log(data, 'ratios')

  return(
    <ContentBox title='Key Ratios TTM' className={styles.ratios}>
      <ProfileList ratios={data} isLoading={isLoading} isError={isError}/>
    </ContentBox>
  )
}