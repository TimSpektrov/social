import styles from './comments.module.scss';
import {useFetchPostCommentsQuery} from "../../../services/api.ts";

interface IComments {
  id: string
};
interface ICommentData {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string
  };
};
export function Comments({id}: IComments) {
  const { data, isLoading, error} =  useFetchPostCommentsQuery(id);
  return (
    <>
      <ul className={styles.list}>
        {data && data.comments.map((comment: ICommentData)=> (
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
