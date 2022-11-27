import OurFriends from 'components/OurFriendsCards/OurFriendsCards';
import apiServices from 'services/apiServices';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopBtn from 'components/ScrollToTopBtn/ScrollToTopBtn';
const OurFriendsPage = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    async function showFriends() {
      try {
        const { data } = await apiServices.getAllFriends();
        setArr(data.data);
      } catch (error) {}
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
