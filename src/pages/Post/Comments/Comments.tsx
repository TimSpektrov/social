import styles from './comments.module.scss';
import {useFetchPostCommentsQuery} from "../../../services/api.ts";
import {useAppSelector} from "../../../hooks/redux.ts";

interface IComments {
  id: number
}
interface ICommentData {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string
  };
}
export function Comments({id}: IComments) {
  const { data, isLoading, error} =  useFetchPostCommentsQuery(id);

  // так как при добавлении комментария в базу он не добавляется, то добавлен костыль добавления элементов для наглядности
  const addComment = useAppSelector(state => state.addCommentReducer.comment);
  console.log(addComment)
  return (
    <>
      <p className={styles.subtitle}>Comments</p>
      <ul className={styles.list}>
        {data && data.comments.map((comment: ICommentData)=> (
          <li className={styles.item} key={comment.id}>
            <span className={styles.author}>{comment.user.username}</span>
            <p className={styles.comment}>{comment.body}</p>
          </li>
        ))}
        {addComment.filter(item => item.postId === id).map((comment: ICommentData)=> (
          <li className={styles.item} key={comment.id}>
            <span className={styles.author}>{comment.user.username}</span>
            <p className={styles.comment}>{comment.body}</p>
          </li>
        ))}
      </ul>

      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка загрузки комментариев</div>}
    </>
  );
}
