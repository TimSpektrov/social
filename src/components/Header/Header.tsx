
import styles from './header.module.scss';
import classNames from "classnames";
import {Userblock} from "./Userblock";
import {useNavigate} from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__container, "container")}>
        <div className={styles.buttonGroup}>
          <button className={classNames(styles.button, 'btn', 'btn-primary')} onClick={() => navigate(-1)}>Назад</button>
          <button className={classNames(styles.button, 'btn', 'btn-primary')} onClick={() => navigate('/')}>На главную</button>
        </div>
        <Userblock />
      </div>

    </header>
  );
}
