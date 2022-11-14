import PuffLoader from 'react-spinners/PuffLoader';

function Loader({ size }) {
  return (
    <PuffLoader
      color="#F59256"
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
