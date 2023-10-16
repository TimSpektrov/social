
import styles from './userblock.module.scss';
import {Link} from "react-router-dom";
import * as classNames from "classnames";
import {useState} from "react";

export function Userblock() {
  const [user, setUser] = useState(null);
  return (
    <Link to={user ? '/user' : '/auth'} className={styles.user}>
      <img
        // src={user ? user.image : "https://artkostyuk.com/wp-content/uploads/avatar.png"}
        src={"https://artkostyuk.com/wp-content/uploads/avatar.png"}
        alt='user avatar'
        className={styles.avatar}
      />

      {/*<p className={classNames(styles.name, user ? styles.userAuth : styles.userNoName)}>{user ? `${user.firstName} ${user.lastName[0]}` : 'Авторизуйтесь'}</p>*/}
      <p className={classNames(styles.name, styles.userNoName)}>{'Авторизуйтесь'}</p>
    </Link>
  );
}
