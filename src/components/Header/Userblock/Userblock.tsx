
import styles from './userblock.module.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {AUTH_LINK, PROFILE_LINK} from "../../../constans/API.ts";
import {useEffect} from "react";
import {userSlice} from "../../../store/user/userSlice.ts";

export function Userblock() {
  const user = useAppSelector(state => state.userReducer.user);
  const dispatch = useAppDispatch();
  const location = useLocation()
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(userSlice.actions.userLogout());
  }

  useEffect(()=> {
      navigate(AUTH_LINK, {replace: true});
  }, [user])

  if (!user) {
      return (
      <Link to={AUTH_LINK} className={styles.user}>
          <img
              src={"src/assets/img/noUser.png"}
              alt='user avatar'
              className={styles.avatar}
          />

          <p className={styles.userNoName}>{'Авторизоваться'}</p>
      </Link>
      )
  }

  if (location.pathname === PROFILE_LINK) {
      return (
          <button className={styles.logOutBtn} onClick={handleClick}>
              <img
                  src={"src/assets/img/logOut.jpg"}
                  alt='log out'
                  className={styles.avatar}
              />
              <p className={styles.userAuth}>{'Выйти'}</p>
          </button>
      )
  }
  return (
    <Link to={PROFILE_LINK} className={styles.user}>
      <img
        src={user.image}
        alt='user avatar'
        className={styles.avatar}
      />

      <p className={styles.userAuth}>{`${user.firstName} ${user.lastName[0]}`}</p>
    </Link>
  );
}
