import {useFetchAllPostsQuery} from "../services/PostService.ts";
export const PostContainer = () => {

const {data, isLoading, error} = useFetchAllPostsQuery()

    console.log(data)
    return (
        <>
            <ul className={styles.list}>
                {data && data.length && data.map(item => (
                    <li className={styles.list} key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            {isLoading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
        </>

    );
};
