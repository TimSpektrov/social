
import styles from './posts.module.scss';
import {IPost} from "../../types/IPost.ts";
import {api} from "../../services/api.ts";
import {Card} from "../../components/Card";
import {useAppSelector} from "../../hooks/redux.ts";

export function Posts() {
  const user = useAppSelector(state => state.userReducer.user);

  const {data, isLoading, error} = user ? api.useFetchAllPostsQuery() : {data: null, isLoading: false, error: {message: 'Авторизуйтесь'}};

  return (
    <>
      <ul className={styles.list}>
        {data && data.posts.map((post: IPost) => (
          <li className={styles.item} key={post.id}>
            <Card post={post}/>
          </li>
        ))}

      </ul>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
    </>
  );
}
