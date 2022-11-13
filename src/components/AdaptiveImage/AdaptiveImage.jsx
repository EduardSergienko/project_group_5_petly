import styles from './AdaptiveImage.module.scss';
import MobileImg320 from 'image/formsPictures/formImg.png';
import MobileImg640 from 'image/formsPictures/formImg@2x.png';
import MobileImg960 from 'image/formsPictures/formImg@3x.png';
import TabletImg768 from 'image/formsPictures/groupMedium.png';
import TabletImg1536 from 'image/formsPictures/groupMedium@2x.png';
import TabletImg2304 from 'image/formsPictures/groupMedium@3x.png';
import DesktopImg1280 from 'image/formsPictures/groupLarge.png';
import DesktopImg2560 from 'image/formsPictures/groupLarge@2x.png';

const mobileWidth = '(max-width: 767px)';
const tabletWidth = '(min-width: 768px) and (max-width:1279px)';
const desktopWidth = '(min-width: 1280px)';

const AdaptiveImage = () => {
  return (
    <picture className={styles.image}>
      <source
        media={mobileWidth}
        srcSet={`${MobileImg320} 320w, ${MobileImg640} 640w, ${MobileImg960} 960w`}
        sizes="100vw"
      />
      <source
        media={tabletWidth}
        srcSet={`${TabletImg768} 768w, ${TabletImg1536} 1536w, ${TabletImg2304} 2304w`}
        sizes="100vw"
      />
      <source
        media={desktopWidth}
        srcSet={`${DesktopImg1280} 1280w, ${DesktopImg2560} 2560w`}
        sizes="100vw"
      />
      <img src={`${MobileImg960}`} alt="formImage" />
    </picture>
  );
};

export default AdaptiveImage;
