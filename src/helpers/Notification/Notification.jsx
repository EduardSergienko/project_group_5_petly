import { toast } from 'react-toastify';

const showError = text => toast.error(text);

const showSuccess = text => toast.success(text);

const showWarning = text => toast.warn(text);

const notices = {
  showError,
  showSuccess,
  showWarning,
};
export default notices;
