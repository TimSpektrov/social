
import styles from './header.module.scss';
import * as classNames from "classnames";
import {Userblock} from "./Userblock";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__container, "container")}>
        <img
          className={styles.img}
          src="src/assets/img/reddit.png"
          alt="logo"
        />
        <Userblock />
      </div>

    </header>
  );
}
