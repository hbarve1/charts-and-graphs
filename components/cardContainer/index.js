/** @format */

import Link from "next/link";
import convertUrlToTitle from "../../utils/convertUrlToTitle";
import styles from "../../styles/Home.module.css";


function CardContainer({ title, value, BASE_URL }) {
  return (
    <Link href={`${BASE_URL}/${title}`} key={title}>
      <a
        className={styles.card}
        style={{
          borderColor: value > 0 ? "green" : "red",
          borderWidth: 2,
        }}
      >
        <h2>{convertUrlToTitle(title)} &rarr;</h2>
        {/* <p>Find in-depth information about Next.js features and API.</p> */}
      </a>
    </Link>
  );
}
export default CardContainer;
