import styles from './profile.module.scss';
import {useAppSelector} from "../../hooks/redux.ts";

export function Profile() {
  const user = useAppSelector(state => state.userReducer.user);

  if (!user) {
    return <div>Авторизуйтесь</div>;
  }
  return (
      <div className={styles.profile}>
        <img className={styles.image} src={user.image} alt="avatar"/>
        <div className={styles.info}>
          <table>
            <tbody>
              <tr className={styles.props}>
                <td>username:</td>
                <td className={styles.title}>{user.username}</td>
              </tr>
              <tr className={styles.props}>
                <td>name:</td>
                <td className={styles.name}>{user.firstName} {user.lastName}</td>
              </tr>
              <tr className={styles.props}>
                <td>email:</td>
                <td className={styles.name}>{user.email}</td>
              </tr>
              <tr className={styles.props}>
                <td>gender:</td>
                <td className={styles.name}>{user.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}
