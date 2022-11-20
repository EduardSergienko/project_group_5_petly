import PropTypes from 'prop-types';

function DeleteButton({ stylesBtn, onClick, id }) {
  return <button className={stylesBtn} onClick={() => onClick(id)}></button>;
}

export { DeleteButton };

DeleteButton.propTypes = {
  stylesBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
