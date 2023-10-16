
import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import {useLoginMutation} from "../../services/api.ts";
import {useEffect, useState} from "react";

export function Login() {
  // const navigate = useNavigate();
  // const location = useLocation();
  //
  // const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [login,{isLoading, error}] = useLoginMutation()
  const [ showError, setShowError ] = useState(false);
  useEffect(()=>{
    if(error) {
      setShowError(true);
      const timer=setTimeout(()=>{
        setShowError(false);
      },3000);

      return ()=>{
        clearTimeout(timer);
      }
    }
  },[error]);

  const onSubmit = (data) => {
    console.log(data)
    let user = {
      username: 'kminchelle',
      password: '0lelplR',
    }
    if (data.username === 'vniir' && data.password === '12345') {
      login(user)
    } else {
      login(data)
    }
  };

  return (
  <div className={styles['form-container']}>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >

        <label className={styles.label}>
          <span className={styles.name}>Имя пользователя</span>
          <input className={styles.input} {...register('username', { required: true })} placeholder={'vniir'}/>
          {errors.username && <span className={styles.error}>Поле {errors.username.type === 'required' && 'Введите имя'}</span>}
        </label>

      <div>
        <label className={styles.label}>
          <span className={styles.name}>Пароль</span>
          <input className={styles.input} type="password" {...register('password', { required: true })} placeholder={'12345'}/>
          {errors.password && <span className={styles.error}>Поле {errors.password.type === 'required' && 'Введите пароль'}</span>}
        </label>
      </div>

      <button className={styles.submit} type="submit">{isLoading ? 'Загрузка...' : 'Войти'}</button>
      {showError && <div className={styles['error-request']}>
          <img src="src/assets/img/error.svg" alt="красный крест"/>
          <span>Ошибка входа</span>
      </div>}
    </form>
  </div>
  );
}
