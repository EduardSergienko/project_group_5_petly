import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
export default function SharedLayout(second) {
  return (
    <Header>
      <Outlet />
    </Header>
  );
}
