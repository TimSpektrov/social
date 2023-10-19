
import styles from './userblock.module.scss';
import {Link,  useMatch, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {AUTH_LINK, PROFILE_LINK} from "../../../constans/API.ts";
import {useEffect} from "react";
import {userSlice} from "../../../store/user/userSlice.ts";
import noUser from "../../../assets/img/noUser.png";
import logOut from "../../../assets/img/logOut.jpg";

export function Userblock() {
  const user = useAppSelector(state => state.userReducer.user);
  const dispatch = useAppDispatch();
    const match = useMatch(PROFILE_LINK)
  const navigate = useNavigate();
    console.log(match)
  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(userSlice.actions.userLogout());
  }

  useEffect(()=> {
      navigate(AUTH_LINK, {replace: true});
  }, [user])

  return (
    <>
    {user ? (
        match ? (
          <button className={styles.logOutBtn} onClick={handleClick}>
            <img
              src={logOut}
              alt='log out'
              className={styles.avatar}
            />
            <p className={styles.userAuth}>{'Выйти'}</p>
          </button>
        ) : (
          <Link to={PROFILE_LINK} className={styles.user}>
            <img
              src={user.image}
              alt='user avatar'
              className={styles.avatar}
            />

            <p className={styles.userAuth}>{`${user.firstName} ${user.lastName[0]}`}</p>
          </Link>
        )
      ) : (
        <Link to={AUTH_LINK} className={styles.user}>
          <img
            src={noUser}
            alt='user avatar'
            className={styles.avatar}
          />

          <p className={styles.userNoName}>{'Авторизоваться'}</p>
        </Link>
      )}
    </>
  )
}
