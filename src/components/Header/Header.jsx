import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.headerContentWrap}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
