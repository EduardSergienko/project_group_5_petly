import { useTranslation } from 'react-i18next';
import styles from './OurFriendsCards.module.scss';
import Container from 'components/Container/Container';

const OurFriends = ({ data }) => {
  const { t } = useTranslation();

  const getWorkDays = arr => {
    const { from, to } = arr.find(item => item.isOpen === true);
    return `${from} : ${to}`;
  };
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>{t('ourFriends.title')}</h1>
        <div className={styles.cardsWrap}>
          {data.map(
            ({
              _id,
              url,
              imageUrl,
              title,
              address,
              addressUrl,
              email,
              phone,
              workDays,
            }) => (
              <div className={styles.innerCard} key={_id}>
                <a href={url} target="blank">
                  <h3 className={styles.nameFriend}>{title}</h3>
                </a>

                <div className={styles.cardBox}>
                  <div className={styles.leftCard}>
                    <img
                      className={styles.picture}
                      src={imageUrl}
                      alt={`${title} img`}
                    />
                  </div>

                  <ul className={styles.rightCard}>
                    <li className={styles.cardItem}>
                      Work Hours: <br />
                      {workDays ? (
                        <p>{getWorkDays(workDays)}</p>
                      ) : (
                        <span>-------------</span>
                      )}
                      {workDays && (
                        <ul className={styles.subMenu}>
                          {workDays.map(({ day, from, to, id }) => (
                            <li
                              key={id.toString()}
                              className={styles.subMenuItem}
                            >
                              <p>{day}</p>
                              <p>
                                {from}-{to}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    <li className={styles.cardItem}>
                      Address: <br />
                      {address ? (
                        <a href={addressUrl} className={styles.cardAddress}>
                          <span>{address}</span>
                        </a>
                      ) : (
                        <span>----------</span>
                      )}
                    </li>
                    <li className={styles.cardItem}>
                      Email: <br />
                      {email ? (
                        <a className={styles.cardLink} href={`mailto:${email}`}>
                          {email}
                        </a>
                      ) : (
                        <span>----------</span>
                      )}
                    </li>
                    <li className={styles.cardItem}>
                      Phone:
                      <br />
                      {phone ? (
                        <a className={styles.cardLink} href={`tel:${phone}`}>
                          {phone}
                        </a>
                      ) : (
                        <span>----------</span>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default OurFriends;
