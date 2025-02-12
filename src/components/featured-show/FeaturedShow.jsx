import styles from './featured-show.module.css'
const FeaturedShow = () => {
    return (
        <>
        <div className={styles.featuredshows}>
                <img src="https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1729190616906.jpg" alt="" />
                
            </div>
        <div className={styles.featuredshows}>
           <img src="https://assets.gadgets360cdn.com/pricee/assets/product/202210/white_lotus_2_1665753099.jfif" alt="" />
            
        </div>
        <div className={styles.featuredshows}>
           <img src="https://th.bing.com/th/id/OIP.Ep9TTa1UiVhd3GNd1gbu9AHaK-?rs=1&pid=ImgDetMain" alt="" />
            
        </div>
        </>
    );
};
export default FeaturedShow;