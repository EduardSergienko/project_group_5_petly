import styles from './HomeContent.module.scss';
// import mainImg from '../../image/main_page_img.png';
import Container from 'components/Container/Container';

export default function HomeContent() {
  return (
    <section className={styles.homeSection}>
      <Container>
        <h1 className={styles.homeTitle}>Take good care of your small pets</h1>
      </Container>
    </section>
  );
}
