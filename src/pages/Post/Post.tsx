
import styles from './post.module.scss';
import {useParams} from "react-router-dom";
import {useFetchPostIdQuery} from "../../services/api.ts";
import {Comments} from "./Comments";
import {AddComment} from "./AddComment";
import likeImg from "../../assets/img/like.svg";
import {useEffect, useState} from "react";

export function Post() {
  const { id } = useParams();
  const { data, isLoading, error} =  useFetchPostIdQuery(id);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if(data) setLikes(data.reactions)
  }, [data])

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
          <div className={styles.footer}>
          <div className={styles.like}>
            <button className={styles['like-btn']} onClick={() => setLikes(likes + 1)}>{<img src={likeImg} alt=""/>}</button>
            <span className={styles['like-number']}>{likes}</span>
          </div>
          <div className={styles.author}>author id: {data.userId}</div>
          </div>
          <Comments id={data.id} />
          <AddComment id={data.id} />
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Ошибка загрузки постов</div>}
    </>
  );
}
