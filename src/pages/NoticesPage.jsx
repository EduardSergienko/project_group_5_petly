import NoticesPageContent from 'components/NoticesPage/NoticesPage';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';
export default function NoticesPage() {
  return (
    <main>
      <ModalAddNotice />
      <NoticesPageContent />
    </main>
  );
}
