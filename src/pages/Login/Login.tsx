
import styles from './login.module.scss';
import { useForm} from 'react-hook-form';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {fetchUser} from "../../store/user/actions.ts";
import {IUserFetch} from "../../types/IUser.ts";

export function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFetch>();

  const [ showError, setShowError ] = useState(false);
  const {user ,isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    reset()
    if(user) {
      navigate('/', {replace: true});
    }
  }, [user])

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

  const onSubmit = (data: IUserFetch) => {
    const user = {
      username: 'kminchelle',
      password: '0lelplR',
    }
    if (data.username === 'vniir' && data.password === '12345') {
      dispatch(fetchUser(user))
    } else {
      dispatch(fetchUser(data))
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
