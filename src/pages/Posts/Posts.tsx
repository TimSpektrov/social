
import styles from './posts.module.scss';
import {IPost} from "../../types/IPost.ts";
import {Card} from "../../components/Card";
import {useFetchAllPostsQuery} from "../../services/api.ts";
import {Link} from "react-router-dom";
import {POSTS_API} from "../../constans/API.ts";
import classNames from "classnames";

export function Posts() {
  const {data, isLoading, error} =  useFetchAllPostsQuery('');


  return (
    <>
      <ul className={styles.list}>
        {data && data.posts.map((post: IPost) => (
          <li className={styles.item} key={post.id}>
            <Link to={`${POSTS_API}/${post.id}`} className={classNames('link', styles.link)}>
              <Card post={post}/>
            </Link>
          </li>
        ))}

      </ul>

      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка загрузки постов</div>}
    </>
  );
}
