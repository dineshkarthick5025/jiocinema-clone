import styles from  './shows.module.css'
import Show from '../show/Show';
const Shows = (props) => {
    return (
        <>
        <div className={styles.shows}>
            <h1>{props.title}</h1>
            <div className={styles.showsparrent}>
                <Show></Show>
            </div>
        </div>
        </>
    );
};
export default Shows;