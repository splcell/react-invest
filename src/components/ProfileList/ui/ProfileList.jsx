import styles from "./ProfileList.module.scss";
import { useMemo } from "react";
import cn from 'classnames'
import { checkProps } from "../../../helpers/checkProps";
import { convertData } from "../../../helpers/convertData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../ContentWrapper/ui/ContentWrapper";

export const ProfileList = ({ profile, ratios, rating, isLoading, isError }) => {
  const variantListRender = useMemo(() => {
    if (profile) {
      return (
        <ContentWrapper
          isLoading={isLoading}
          isError={isError}
          errorText='Info not Found'
        >
          <li className={styles.profileListItem}>
            <span>Company name:</span>
            <span>{profile.companyName}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>ISIN:</span>
            <span>{profile.isin}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Market Cap (mln {profile.currency}):</span>
            <span>{convertData(profile.mktCap)}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Volume (mln {profile.currency}):</span>
            <span>{convertData(profile.volAvg)}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>IPO Date:</span>
            <span>{profile.ipoDate}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Sector:</span>
            <span>{profile.sector}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Industry:</span>
            <span>{profile.industry}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Exchange:</span>
            <span>{profile.exchangeShortName}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Country</span>
            <span>{profile.country}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>City:</span>
            <span>{profile.city}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Address:</span>
            <span>{checkProps(profile.address)}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>CEO:</span>
            <span>{checkProps(profile.ceo)}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>Employees:</span>
            <span>
              {checkProps(Number(profile.fullTimeEmployees).toLocaleString())}
            </span>
          </li>
          <li className={styles.profileListItem}>
            <span>Website:</span>
            <Link to={profile.website}>
              <FaExternalLinkAlt />
              Open
            </Link>
          </li>
        </ContentWrapper>
      );
    }

    if (Array.isArray(ratios) && ratios.length) {
      return (
        <ContentWrapper
          isLoading={isLoading}
          isError={isError}
          errorText='Ratios not Found'
        >
          {ratios.map((ratio, index) => (
            <>
              <li className={styles.profileListItem} key={index}>
                <span>P/E:</span>
                <span>{checkProps(ratio?.peRatioTTM?.toFixed(2))}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>P/B:</span>
                <span>
                  {checkProps(ratio?.priceToBookRatioTTM?.toFixed(2))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>P/S:</span>
                <span>
                  {checkProps(ratio?.priceToSalesRatioTTM?.toFixed(2))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>ROE:</span>
                <span>
                  {checkProps(Number(ratio?.returnOnEquityTTM?.toFixed(1)))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>ROA:</span>
                <span>
                  {checkProps(Number(ratio?.returnOnAssetsTTM?.toFixed(1)))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>Current Ratio:</span>
                <span>{checkProps(ratio?.currentRatioTTM?.toFixed(2))}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>Quick Ratio:</span>
                <span>{checkProps(ratio?.quickRatioTTM?.toFixed(2))}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>Debt Ratio:</span>
                <span>{checkProps(ratio?.debtRatioTTM?.toFixed(2))}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>Debt / Equity:</span>
                <span>{checkProps(ratio?.debtEquityRatioTTM?.toFixed(1))}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>Interest Coverage:</span>
                <span>
                  {checkProps(ratio?.interestCoverageTTM?.toFixed(1))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>Total Debt / Capitalization:</span>
                <span>{ratio?.totalDebtToCapitalizationTTM?.toFixed(1)}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>Divdend Yield%</span>
                <span>
                  {checkProps(ratio?.dividendYielPercentageTTM?.toFixed(2))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>Divdend per Share</span>
                <span>
                  {checkProps(ratio?.dividendPerShareTTM?.toFixed(2))}
                </span>
              </li>
              <li className={styles.profileListItem}>
                <span>Payout Ratio:</span>
                <span>{ratio?.payoutRatioTTM?.toFixed(2)}</span>
              </li>
              <li className={styles.profileListItem}>
                <span>FCF per Share:</span>
                <span>{ratio?.freeCashFlowPerShareTTM?.toFixed(2)}</span>
              </li>
            </>
          ))}
        </ContentWrapper>
      );
    }

    if (rating) {
      return (
        <>
          <li className={styles.profileListItem}>
            <span>Date:</span>
            <span>{rating?.date}</span>
          </li>
          <li className={styles.profileListItem}>
            <span>DCF Recomendation:</span>
            <span
              className={cn(styles.rating, {
                [styles.neutral]:
                  rating?.ratingDetailsDCFRecommendation === "Neutral",
                [styles.buy]: rating?.ratingDetailsDCFRecommendation?.toLowerCase().includes("buy"),
                [styles.sell]: rating?.ratingDetailsDCFRecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingDetailsDCFRecommendation}
            </span>
          </li>
          <li className={styles.profileListItem}>
            <span>PE Recomendation:</span>
            <span
              className={cn(styles.rating, {
                [styles.neutral]:
                  rating?.ratingDetailsPERecommendation === "Neutral",
                [styles.buy]: rating?.ratingDetailsPERecommendation?.toLowerCase().includes("buy"),
                [styles.sell]: rating?.ratingDetailsPERecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingDetailsPERecommendation}
            </span>
          </li>
          <li className={styles.profileListItem}>
            <span>PB Recomendation:</span>
            <span
              className={cn(styles.rating, {
                [styles.neutral]:
                  rating?.ratingDetailsPBRecommendation === "Neutral",
                [styles.buy]: rating?.ratingDetailsPBRecommendation?.toLowerCase().includes("buy"),
                [styles.sell]: rating?.ratingDetailsPBRecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingDetailsPBRecommendation}
            </span>
          </li>
          <li className={styles.profileListItem}>
            <span>ROE Recomendation:</span>
            <span
              className={cn(styles.rating, {
                [styles.neutral]:
                  rating?.ratingDetailsROERecommendation === "Neutral",
                [styles.buy]: rating?.ratingDetailsROERecommendation?.toLowerCase().includes("buy"),
                [styles.sell]: rating?.ratingDetailsROERecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingDetailsROERecommendation}
            </span>
          </li>
          <li className={styles.profileListItem}>
            <span>ROA Recomendation:</span>
            <span
              className={cn(styles.rating, {
                [styles.neutral]:
                  rating?.ratingDetailsROARecommendation === "Neutral",
                [styles.buy]: rating?.ratingDetailsROARecommendation?.toLowerCase().includes("buy"),
                [styles.sell]: rating?.ratingDetailsROARecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingDetailsROARecommendation}
            </span>
          </li>
          <div className={styles.overallWrapper}>
            <span className={styles.overallTitle}>Overall Recomendation:</span>
            <span
              className={cn(styles.finalRating, {
                [styles.finalNeutral]:
                  rating?.ratingRecommendation === "Neutral",
                [styles.finalBuy]: rating?.ratingRecommendation?.toLowerCase().includes("buy"),
                [styles.finalSell]: rating?.ratingRecommendation?.toLowerCase().includes("sell"),
              })}
            >
              {rating?.ratingRecommendation}
            </span>
          </div>
        </>
      );
    }

    return null;
  }, [profile, ratios, rating]);

  return <ul>{variantListRender}</ul>;
};
