import styles from './OurFriendsCards.module.scss';

const OurFriendsPage = () => {
  const arr = [
    {
      title: 'ЛКП "ЛЕВ"',
      url: "https://lkplev.com/",
      addressUrl: "https://goo.gl/maps/4xMfxtahHPfXeAYU8",
      imageUrl: "https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png",
      adress: 'Grigorenka Street, 25',
      workDays: null,
      phone: '0664880480',
      email: 'null',
    },
    {
      title: 'Барбос',
      time: '8-20',
      adress: 'Grigorenka Street, 3',
      email: 'barbos@gmail.com',
      phone: '4880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
    {
      title: 'ЛКП "ЛЕВ"',
      time: '',
      adress: '',
      email: 'barbos@gmail.com',
      phone: '0664880480',
    },
  ];

  return (
    <>
      <h2 className={styles.Title}>Our friends</h2>
      <div className={styles.FriendsThumb}>

        {arr.map(({ img, title, time, adress, email, phone }) => (
          <div className={styles.div}>
            <div>{img}</div>

            <div>
              <h3>{title}</h3>
              <ul>
                <li>
                  Work Hours:<br></br>
                  {time ? <span>{time}</span> : <span>----------</span>}
                </li>
                <li>
                  Adress:<br></br>
                  {adress ? <span>{adress}</span> : <span>----------</span>}
                </li>
                <li>
                  Email:<br></br>
                  {email ? <span>{email}</span> : <span>----------</span>}
                </li>
                <li>
                  Phone:<br></br>
                  {phone ? <span>{phone}</span> : <span>----------</span>}
                </li>
              </ul>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default OurFriendsPage;
