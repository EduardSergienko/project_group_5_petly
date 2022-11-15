import { ReactComponent as AddNoticeButtonMobile } from '../../../image/svg/addPetMobile.svg';
import { ReactComponent as AddNoticeButtonTab } from '../../../image/svg/addPet.svg';


import styles from './AddNoticeButton.module.scss';

function AddNoticeButton() {
    return (
      <div>
            <AddNoticeButtonMobile className={styles.addPetMobile}/>
            <AddNoticeButtonTab className={styles.addPet}/>
      </div>
  )
}

export default AddNoticeButton;