import { useEffect, useState } from 'react';
import styles from './OurFriendsCards.module.scss';

const OurFriendsPage = () => {
  const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch('http://localho/friends').then(res => res.json()).then(({ data }) => {
            console.log(data.friends)
            setArr(data.friends)
        }).catch(err => console.log(err.message))
    }, [])

  return (
    <>
    <div>
      <h2 className={styles.Title}>Our friends</h2>
      <div className={styles.FriendsThumb}>


        {arr.map(({  _id, url, imageUrl, title, time, address, addressUrl, email, phone }) => (

          <div className={styles.ContainerFriendsCards} key={_id}>
             <a href={url}> <h3 className={styles.NameFriends}>{title}</h3></a>

          <div className={styles.CardsThumb} > 

          <div className={styles.MainThumb}> 
            <img className={styles.CardsImg} src={imageUrl} alt={`${title} img`} />
            </div>

            <div className={styles.SecThumb}>
              <ul>
                <li className={styles.CardItem}>
                  Work Hours: <br/>
                  {time ? <span>{time}</span> : <span>----------</span>}
                </li>
                <li className={styles.CardItem}>Address: <br/>
                  {
                  address ? (<a href={addressUrl} className={styles.CardAddress}><span>{address}</span></a>) : (<span>----------</span>)
                  }
                </li>
                <li className={styles.CardItem}>Email: <br/>
                  {
                  email ? (<a className={styles.CardLink} href={`mailto:${email}`}>{email}</a>) : (<span>----------</span>)
                  }
                </li>
                <li className={styles.CardItem}>
                  Phone:<br/>
                  {
                  phone ? (<a className={styles.CardLink} href={`tel:${phone}`}>{phone}</a>)  : (<span>----------</span>)
                  }
                </li>
              </ul>
            </div>
          </div>
          </div>
        ))}

      </div>
      </div>
    </>
  );
};

export default OurFriendsPage;
