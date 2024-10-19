import Link from "next/link";
import styles from "./Card.module.css";

interface Props {
  year: string;
  link: string;
}

const Card = ({ year, link }: Props) => {
  return (
    <Link href={`/dashboard/${link}`}>
      <a className={styles.card}>
        <p className={styles.year}>AKTU B.TECH</p>
        <h1 className={styles.title}>Year {year}</h1>
      </a>
    </Link>
  );
};

export default Card;
