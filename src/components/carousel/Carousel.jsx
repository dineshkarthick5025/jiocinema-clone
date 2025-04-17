import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <img
        src="https://images.justwatch.com/poster/319251402/s718/season-1.jpg"
        alt="Season 1"
        className={styles.smallImage}
      />
      <img
        src="https://i.ytimg.com/vi/7KEyG7svobI/maxresdefault_live.jpg"
        alt="Live Image"
        className={styles.largeImage}
        loading="lazy"
      />
      <img
        src="https://images.justwatch.com/poster/319251402/s718/season-1.jpg"
        alt="Season 1"
        className={styles.smallImage}
      />
    </div>
  );
};

export default Carousel;
