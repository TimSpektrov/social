import styles from './header.module.scss';
import {UserBlock} from "./UserBlock";
import cn from "classnames";

export function Header() {
  return (
      <header className={styles.header}>
          <div className={cn(styles.header__container, "container")}>
              <img
                  className={styles.img}
                  src="https://fineproxy.org/wp-content/uploads/2023/07/reddit.com_logo.png"
                  alt="logo"
              />
              <UserBlock />
          </div>
      </header>
  );
}
