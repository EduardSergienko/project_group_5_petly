import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import Container from 'components/Container/Container';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import { useRef } from 'react';
import styles from './Header.module.scss';
export default function Header() {
  const navRef = useRef();
  console.log(navRef);
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };
  return (
    <header>
      <Container>
        <div className={styles.headerContentWrap}>
          <Logo />

          <nav className={styles.mainNav} ref={navRef}>
            <Nav />
            <AuthNav />
          </nav>
          <BurgerBtn toggleNav={showNavBar} />
        </div>
      </Container>
    </header>
  );
}