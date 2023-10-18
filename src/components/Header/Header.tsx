
import styles from './header.module.scss';
import classNames from "classnames";
import {Userblock} from "./Userblock";
import {useNavigate} from "react-router-dom";


export function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__container, "container")}>
        <div className={styles.header__buttonGroup}>
          <button
            className={styles.header__button}
            type={'button'}
            onClick={() => navigate(-1)}
          >Назад</button>

          <button
            className={styles.header__button}
            type={'button'}
            onClick={() => navigate('/')}
          >На главную</button>
        </div>

        <Userblock />
      </div>

    </header>
  );
}
