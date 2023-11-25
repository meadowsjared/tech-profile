import styles from "./FancyCreativity.module.scss";

export default function FancyCreativity() {
  return (
    <span className={styles.textContainer}>
      <svg
        width="75"
        height="25"
        viewBox="0 0 75 25"
        className={styles.textStroke}
      >
        {/* <!-- used for user selection --> */}
        <text textAnchor="middle" x="50%" y="50%" dy="0.78rem" dx="0.06rem">
          creativity
        </text>
        {/* <!-- Symbol --> */}
        <symbol id="s-text" className={styles.strokeParent}>
          <text textAnchor="middle" x="50%" y="50%" dy="0.78rem" dx="0.06rem">
            creativity
          </text>
        </symbol>
        {/* <!-- Duplicate symbols --> */}
        {
          // insert 4 more copies of the symbol
          Array(4)
            .fill(null)
            .map((_, i) => (
              <use xlinkHref="#s-text" className={styles.text} key={i}></use>
            ))
        }
      </svg>
      ,
    </span>
  );
}
