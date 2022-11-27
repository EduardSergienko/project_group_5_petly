import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import PropTypes from 'prop-types';

const PlacesAutocomplete = ({
  style,
  noValidate,
  styleLi,
  styleUl,
  stylesDiv,
  span,
  setInputActive,
  min,
  max,
  setInputeValue,
  inputeValue,
  inputActive,
}) => {
  const {
    ready,

    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 200,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    const value = e.target.value.toLowerCase().trim();

    setValue(e.target.value);
    setInputeValue(e.target.value);

    if (value.length < min) {
      setInputActive(false);
      return;
    }

    if (value.length > max) {
      setInputActive(false);
      return;
    }

    setInputActive(true);
  };

  const handleSelect =
    ({ structured_formatting: { main_text } }) =>
    () => {
      const value = main_text.toLowerCase().trim();

      setValue(main_text, false);
      setInputeValue(main_text);
      clearSuggestions();

      if (value.length < min) {
        setInputActive(false);
        return;
      }

      if (value.length > max) {
        setInputActive(false);
        return;
      }

      setInputActive(true);
    };

  const renderSuggestions = () => {
    return data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text },
      } = suggestion;

      return (
        inputActive && (
          <li
            className={`${styleLi}`}
            key={place_id}
            onClick={handleSelect(suggestion)}
          >
            <span className={span}>{main_text}</span>
          </li>
        )
      );
    });
  };

  return (
    <div ref={ref}>
      <input
        className={`${style} ${
          !inputActive && inputeValue.length !== 0 ? noValidate : ''
        }`}
        value={inputeValue}
        onChange={handleInput}
        disabled={!ready}
        type={'text'}
        name={'location'}
        placeholder={'Your city'}
      />
      {status === 'OK' && (
        <div className={`${stylesDiv}`}>
          <ul className={`${styleUl}`}>{renderSuggestions()}</ul>
        </div>
      )}
    </div>
  );
};

export default PlacesAutocomplete;

PlacesAutocomplete.propTypes = {
  style: PropTypes.string,
  noValidate: PropTypes.string,
  styleLi: PropTypes.string,
  styleUl: PropTypes.string,
  stylesDiv: PropTypes.string,
  span: PropTypes.string,
  inputeValue: PropTypes.string.isRequired,
  inputActive: PropTypes.bool.isRequired,
  setInputActive: PropTypes.func.isRequired,
  setInputeValue: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
