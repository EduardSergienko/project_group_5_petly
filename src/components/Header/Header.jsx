import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import styles from './Header.module.scss';
import Navigation from 'components/Navigation/Navigation';
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
