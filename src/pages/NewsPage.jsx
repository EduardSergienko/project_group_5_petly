import News from 'components/News/News';
import styles from 'components/LoginForm/LoginForm.module.scss';

const NewsPage = () => {
  return (
    <div className={styles.formWrap}>
      <h1>News</h1>
      <News />
    </div>
  );
};

export default NewsPage;
