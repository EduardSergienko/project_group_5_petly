import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import Container from 'components/Container/Container';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const mobileWidth = width < 768;
  const tabletWidth = width > 767 && width < 1279;
  const descktopWidth = width > 1279;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  const showNavBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Container>
        <div className={styles.headerContentWrap}>
          <Logo />

          {mobileWidth && (
            <nav
              className={`${styles.mainNav} ${
                isMenuOpen && styles.responsiveNav
              }`}
            >
              <AuthNav />
              <Nav />
            </nav>
          )}
          {tabletWidth && (
            <>
              {!isMenuOpen && <AuthNav />}

              <nav
                className={`${styles.mainNav} ${
                  isMenuOpen && styles.responsiveNav
                }`}
              >
                <Nav />
              </nav>
            </>
          )}
          {descktopWidth && (
            <nav className={styles.mainNav}>
              <Nav />
              <AuthNav />
            </nav>
          )}
          <BurgerBtn toggleNav={showNavBar} />
        </div>
      </Container>
    </header>
  );
}
