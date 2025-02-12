import FeaturedShow from '../featured-show/FeaturedShow';
import styles from './features.module.css'; 

const Features = () => {
    return (
    <section className={styles.features}>
         <h1 className={styles.SectionTitle}>Hot Right Now 🔥</h1>  
         <div className={styles.shows}>
            <FeaturedShow></FeaturedShow>
         </div>
    </section>
    );
};
export default Features;
