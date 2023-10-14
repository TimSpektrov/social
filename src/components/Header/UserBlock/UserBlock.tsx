import styles from './userblock.module.scss';
import {useAppSelector} from "../../../hooks/redux.ts";
import {Link} from "react-router-dom";
import cn from "classnames";


export function UserBlock() {
    const user = useAppSelector(state => state.userReducer.user)
  return (
      <Link to={user ? '/user' : '/auth'} className={styles.user}>
        <img
            src={user ? user.image : "https://artkostyuk.com/wp-content/uploads/avatar.png"}
            alt='user avatar'
            className={styles.avatar}
        />

        <p className={cn(styles.name, user ? styles.userAuth : styles.userNoName)}>{user ? `${user.firstName} ${user.lastName[0]}` : 'Авторизуйтесь'}</p>
      </Link>
  );
}
