
import styles from './posts.module.scss';
import {IPost} from "../../types/IPost.ts";
import {Card} from "../../components/Card";
import {useAppSelector} from "../../hooks/redux.ts";
import {useFetchAllPostsQuery} from "../../services/api.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AUTH_LINK} from "../../constans/API.ts";

export function Posts() {
  const user = useAppSelector(state => state.userReducer.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
        navigate(AUTH_LINK, {replace: true});
    }
  })
  const {data, isLoading, error} =  useFetchAllPostsQuery('');


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
