import style from "./FancyCreativity.module.scss";

export default function FancyCreativity() {
  return (
    <span className={style.textContainer}>
      <svg
        width="75"
        height="25"
        viewBox="0 0 75 25"
        className={style.textStroke}
      >
        {/* <!-- Symbol --> */}
        <symbol id="s-text" className={style.strokeParent}>
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
              <use xlinkHref="#s-text" className={style.text} key={i}></use>
            ))
        }
      </svg>
      ,
    </span>
  );
}
