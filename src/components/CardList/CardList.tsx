import styles from './cardlist.module.scss';


export function CardList() {
  // const dispatch = useAppDispatch()
  // const {posts, isLoading, error} = useAppSelector(state => state.postsReducer)
  //
  // useEffect(() => {
  //   dispatch(fetchPosts())
  //   console.log(localStorage.token)
  // }, [localStorage.token])

  return (
    <ul className={styles.list}>
      {/*{posts && posts.length && posts.map(item => (*/}
      {/*    <li className={styles.list} key={item.id}>*/}
      {/*      {item.title}*/}
      {/*    </li>*/}
      {/*))}*/}

      {/*{isLoading && <p>Загрузка...</p>}*/}
      {/*{error && <p>{error}</p>}*/}
    </ul>
  );
}
