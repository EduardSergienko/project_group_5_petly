import OurFriends from 'components/OurFriendsCards/OurFriendsCards';
import getAllFriends from 'services/apiServices';
import { useEffect, useState } from 'react';
const OurFriendsPage = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    async function showFriends() {
      try {
        const { data } = await getAllFriends();
        setArr(data.data);
        console.log(data.data);
      } catch (error) {}
    }
    showFriends();
  }, []);
  return <OurFriends data={arr} />;
};

export default OurFriendsPage;
