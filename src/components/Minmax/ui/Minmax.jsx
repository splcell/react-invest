import styles from './Minmax.module.scss'

export const Minmax = ({profile, metrics}) => {
  const calcProgressWidth =
    (Number(profile?.price) / Number(metrics?.yearHigh)) * 100 + "%";


  return(
    <div className={styles.minMax}>
      <p className={styles.minmaxDescr}>
        52 Week Low {metrics?.yearLow?.toFixed(2)} {profile?.currency}
      </p>
      <div className={styles.minmaxProgress}>
        <span
          style={{
            width: `${calcProgressWidth}`,
            background: "#5f5f5f",
            borderRadius: "12px",
            height: "20px",
            display: "flex",
            fontSize: "15px",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
          }}
          className={styles.metricsSpan}
        >
          {Number(calcProgressWidth.replace("%", "")) > 5 ? Number(calcProgressWidth.replace("%", "")).toFixed() + '%' : null}
        </span>
      </div>
      <p className={styles.minmaxDescr}>
        52 Week High {metrics?.yearHigh?.toFixed(2)} {profile?.currency}
      </p>
    </div>
  )
}