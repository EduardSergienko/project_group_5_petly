import { useTranslation } from 'react-i18next';
import styles from './HomeContent.module.scss';
import mainImg from '../../image/main_page_img.png';
import mainImgTab from '../../image/main_page_img_tab.png';
import mainImgDescktop from '../../image/main_page_img_descktop.png';
import Container from 'components/Container/Container';

export default function HomeContent() {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <h1 className={styles.homeTitle}>{t('home.title')}</h1>
      </Container>
      <picture className={styles.homeSection}>
        <source media="(max-width: 767px)" srcSet={mainImg} />
        <source
          media="(min-width: 768px) and (max-width:1279px)"
          srcSet={mainImgTab}
        />
        <source media="(min-width: 1280px)" srcSet={mainImgDescktop} />
        <img className={styles.homeImg} src={`${mainImgTab}`} alt="formImage" />
      </picture>
    </section>
  );
}
