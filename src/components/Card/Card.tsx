import styles from './card.module.scss';
import {IPost} from "../../types/IPost.ts";
import likeImg from "../../assets/img/like.svg";
import {POSTS_API} from "../../constans/API.ts";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {useState} from "react";

export function Card({post}: {post: IPost}) {
  const [likes, setLikes] = useState(post.reactions);

  return (
    <div className={styles.card}>
      <Link to={`${POSTS_API}/${post.id}`} className={classNames('link', styles.link)}>
        <h2 className={styles.title}>{post.title}</h2>
      </Link>

      <p className={styles.description}>{post.body}</p>
        <ul className={styles.list}>
        {post.tags.map(tag => (
            <div className={styles.item} key={tag}>{tag}</div>
        ))}
        </ul>
        <div className={styles.footer}>
          <div className={styles.like}>
            <button className={styles['like-btn']} onClick={() => setLikes(likes + 1)}>{<img src={likeImg} alt=""/>}</button>
            <span className={styles['like-number']}>{likes}</span>
          </div>
          <div className={styles.author}>author id: {post.userId}</div>
        </div>
    </div>
  );
}
