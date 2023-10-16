
import styles from './posts.module.scss';
import {IPost} from "../../types/IPost.ts";
import {api} from "../../services/api.ts";

export function Posts() {
  const {data, isLoading, error} = api.useFetchAllPostsQuery();
  console.log(data);
  return (
    <>
      <ul className={styles.list}>
        {data && data.posts.map((post: IPost) => (
          <li className={styles.item} key={post.id}>
      {/**/}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}

      </ul>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
    </>

  );
}
