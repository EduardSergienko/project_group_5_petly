import NoticesPageContent from 'components/NoticesPage/NoticesPage';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopBtn from 'components/ScrollToTopBtn/ScrollToTopBtn';
export default function NoticesPage() {
  return (
    <main>
      <NoticesPageContent />
      <ScrollToTop
        smooth
        component={<ScrollToTopBtn />}
        style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
      />
    </main>
  );
}
