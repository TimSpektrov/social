
import styles from './posts.module.scss';
import {IPost} from "../../types/IPost.ts";
import {Card} from "../../components/Card";
import {useFetchAllPostsQuery} from "../../services/api.ts";
export function Posts() {
  const {data, isLoading, error} =  useFetchAllPostsQuery('');
  console.log(data)

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
      {error && <div>Ошибка загрузки постов</div>}
    </>
  );
}
