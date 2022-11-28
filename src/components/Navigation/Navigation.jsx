import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import styles from './Navigation.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import CloseMenuBtn from 'components/CloseMenuBtn/CloseMenuBtn';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isMenuOpen]);

  const showNavBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {mobileWidth && (
        <>
          <LanguageSwitcher />
          <nav
            className={`${styles.mainNav} ${
              isMenuOpen && styles.responsiveNav
            }`}
          >
            {isLoggedIn ? (
              <>
                <UserNav toggleMenu={showNavBar} />
                <Nav toggleMenu={showNavBar} />
              </>
            ) : (
              <>
                <AuthNav toggleMenu={showNavBar} />
                <Nav toggleMenu={showNavBar} />
              </>
            )}
          </nav>
        </>
      )}
      {tabletWidth && (
        <>
          {!isMenuOpen && !isLoggedIn && <AuthNav />}
          {!isMenuOpen && isLoggedIn && <UserNav />}
          {!isMenuOpen && <LanguageSwitcher />}
          <nav
            className={`${styles.mainNav} ${
              isMenuOpen && styles.responsiveNav
            }`}
          >
            <Nav toggleMenu={showNavBar} />
          </nav>
        </>
      )}
      {descktopWidth && (
        <nav className={styles.mainNav}>
          <Nav />
          <LanguageSwitcher />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </nav>
      )}
      {isMenuOpen ? (
        <CloseMenuBtn toggleNav={showNavBar} />
      ) : (
        <BurgerBtn toggleNav={showNavBar} />
      )}
    </>
  );
}
