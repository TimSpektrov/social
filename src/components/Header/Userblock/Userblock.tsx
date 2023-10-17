
import styles from './userblock.module.scss';
import {Link} from "react-router-dom";
import * as classNames from "classnames";
import {useAppSelector} from "../../../hooks/redux.ts";
import {AUTH_LINK, PROFILE_LINK} from "../../../constans/API.ts";

export function Userblock() {
  const user = useAppSelector(state => state.userReducer.user);
  return (
    <Link to={user ? PROFILE_LINK : AUTH_LINK} className={styles.user}>
      <img
        src={user ? user.image : "https://artkostyuk.com/wp-content/uploads/avatar.png"}

        alt='user avatar'
        className={styles.avatar}
      />

      <p className={classNames(styles.name, user ? styles.userAuth : styles.userNoName)}>{user ? `${user.firstName} ${user.lastName[0]}` : 'Авторизуйтесь'}</p>

    </Link>
  );
}
