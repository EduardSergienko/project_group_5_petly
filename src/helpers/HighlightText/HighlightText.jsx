import PropTypes from 'prop-types';

const HighlightText = ({ result, query }) => {
  return result.split(new RegExp(`(${query})`, `gi`)).map((piece, index) => (
    <span
      key={index}
      style={{
        backgroundColor:
          piece.toLowerCase() === query.toLocaleLowerCase()
            ? 'YELLOW'
            : 'TRANSPARENT',
      }}
    >
      {piece}
    </span>
  ));
};

HighlightText.propTypes = {
  result: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default HighlightText;
