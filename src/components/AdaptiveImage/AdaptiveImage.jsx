import styles from './AdaptiveImage.module.scss';
import FormImg320 from 'image/formsPictures/formImg.png';
import FormImg640 from 'image/formsPictures/formImg@2x.png';
import FormImg960 from 'image/formsPictures/formImg@3x.png';
import groupMedium768 from 'image/formsPictures/groupMedium.png';
import groupMedium1536 from 'image/formsPictures/groupMedium@2x.png';
import groupMedium2304 from 'image/formsPictures/groupMedium@3x.png';
import groupLarge1280 from 'image/formsPictures/groupLarge.png';
import groupLarge2560 from 'image/formsPictures/groupLarge@2x.png';

const AdaptiveImage = () => {
  return (
    <picture className={styles.image}>
      <source
        media="(max-width: 767px)"
        srcSet={`${FormImg320} 320w, ${FormImg640} 640w, ${FormImg960} 960w`}
        sizes="100vw"
      />
      <source
        media="(min-width: 768px) and (max-width:1279px)"
        srcSet={`${groupMedium768} 768w, ${groupMedium1536} 1536w, ${groupMedium2304} 2304w`}
        sizes="100vw"
      />
      <source
        media="(min-width: 1280px)"
        srcSet={`${groupLarge1280} 1280w, ${groupLarge2560} 2560w`}
        sizes="100vw"
      />
      <img src={`${groupLarge2560}`} alt="formImage" />
    </picture>
  );
};

export default AdaptiveImage;
