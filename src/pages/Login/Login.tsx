
import styles from './signin.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';

export function Signin() {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Здесь можно добавить логику для отправки данных формы на сервер
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя пользователя</label>
          <input {...register('username', { required: true })} />
          {errors.username && <span>Поле {errors.username.type === 'required' && 'обязательное'}</span>}
        </div>

        <div>
          <label>Пароль</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>Поле {errors.password.type === 'required' && 'обязательное'}</span>}
        </div>

        <button type="submit">Войти</button>
      </form>
    </div>

  );
}
