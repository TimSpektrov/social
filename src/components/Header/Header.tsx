
import styles from './header.module.scss';
import * as classNames from "classnames";
import {Userblock} from "./Userblock";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__container, "container")}>
        <img
          className={styles.img}
          src="https://fineproxy.org/wp-content/uploads/2023/07/reddit.com_logo.png"
          alt="logo"
        />
      </div>
      <Userblock />
    </header>
  );
}
