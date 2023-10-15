import styles from './userblock.module.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {Link} from "react-router-dom";
import cn from "classnames";
import {useEffect} from "react";
import {fetchUser} from "../../../store/reducers/ActionCreators.ts";


export function UserBlock() {
    const dispatch = useAppDispatch()
    const {user, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUser({username: 'vniir', password: '12345'}))
    }, [])

    if(isLoading) {
        return (<p className={styles.userNoName}>{'Loading...'}</p>)
    }
    if(error) {
        return (<p className={styles.userNoName}>{`error`}</p>)
    }
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
