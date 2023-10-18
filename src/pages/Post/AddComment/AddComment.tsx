import styles from './addcomment.module.scss';
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import * as classNames from "classnames";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {fetchAddComment} from "../../../store/user/actions.ts";

interface ICommentsAdd {
  id: string
}
export function AddComment({id}: ICommentsAdd) {
  const [isShow, setIsShow] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();
  const {comment, error, isLoading} = useAppSelector(state => state.addCommentReducer);
  const {user} = useAppSelector(state => state.userReducer);
  const onSubmit = (data) => {
    dispatch(fetchAddComment({
      body: data.message,
      postId: id,
      userId: user?.id
    }))
    reset({message: ''});
  }

  useEffect(() => {

  }, [comment]);
  return (
    <>
      <button className={styles.button} onClick={() => setIsShow(!isShow)}> {isShow ? 'Hide' : 'Add comment'}</button>
        {isShow && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className={classNames(styles.textarea, {[styles['input-error']]: errors.message})}
              {...register('message', { required: true })}
            placeholder={'your comment'} />
            <button className={styles.submit} type={'submit'}>{isLoading ? 'Отправляется...' : 'Отправить'}</button>
            {error && <span>Ошибка отправки</span>}
          </form>
          )}

    </>
  );
}
