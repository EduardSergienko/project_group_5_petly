import usePlacesAutocomplete from //   getGeocode,
//   getLatLng,
'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const PlacesAutocomplete = ({
  style,
  noValidate,
  styleLi,
  styleUl,
  stylesDiv,
  span,
  setInputActive,
  //   pattern,
  min,
  max,
  setInputeValue,
  inputeValue,
  inputActive,
}) => {
  const {
    ready,
    // value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },

    debounce: 200,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    const value = e.target.value.toLowerCase().trim();
    // setInputActive(pattern.test(value));

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
      //   setInputActive(pattern.test(value));
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

      // Get latitude and longitude via utility functions
      //   getGeocode({ address: description }).then(results => {
      //     const { lat, lng } = getLatLng(results[0]);
      //     console.log('📍 Coordinates: ', { lat, lng });
      //   });
    };

  const renderSuggestions = () => {
    // const sliceData = data.slice(0, 3);
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
            {/* <small>{secondary_text}</small> */}
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
