import styles from './card.module.scss';
import {IPost} from "../../types/IPost.ts";

export function Card({post}: {post: IPost}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.description}>{post.body}</p>
    </div>
  );
}
