import OurFriends from 'components/OurFriendsCards/OurFriendsCards';
import apiServices from 'services/apiServices';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopBtn from 'components/ScrollToTopBtn/ScrollToTopBtn';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const OurFriendsPage = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    async function showFriends() {
      try {
        Loading.arrows({
          svgColor: '#f59256',
          backgroundColor: 'rgba(0,0,0,0.1)',
        });
        const { data } = await apiServices.getAllFriends();
        setArr(data.data);
        Loading.remove();
      } catch (error) {
        Loading.remove();
      }
    }
    showFriends();
  }, []);
  return (
    <main>
      <OurFriends data={arr} />
      <ScrollToTop
        smooth
        component={<ScrollToTopBtn />}
        style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
      />
    </main>
  );
};

export default OurFriendsPage;
