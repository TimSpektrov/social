
import styles from './post.module.scss';
import {useParams} from "react-router-dom";
import {useFetchPostIdQuery} from "../../services/api.ts";
import {Comments} from "./Comments";
import {AddComment} from "./AddComment";

export function Post() {
  const { id } = useParams();
  const { data, isLoading, error} =  useFetchPostIdQuery(id);
  console.log('post', id)
  return (
    <>
      {data && (
        <div className={styles.post}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>{data.body}</p>
          <ul className={styles.list}>
            {data.tags.map((item:string) => (
              <li className={styles.item} key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.author}>author id: {data.userId}</div>
          <Comments id={data.id} />
          <AddComment id={data.id} />
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка загрузки постов</div>}
    </>
  );
}
