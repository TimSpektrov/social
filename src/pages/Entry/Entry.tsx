
import styles from './entry.module.scss';
export function Entry() {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.error}></span>
        <input className={styles.input} type="text" name="username" placeholder="Логин" />
      </label>
      <label className={styles.label}>
        <span className={styles.error}></span>
        <input className={styles.input} type="password" name="password" placeholder="Пароль" />
      </label>
        <button className={styles.submit} type="submit">Войти</button>
      </form>
  );
}
