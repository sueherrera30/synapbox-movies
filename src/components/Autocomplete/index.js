import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteComponent = () => {
  // Temporal Data
  const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ];
  return (
    <Autocomplete
        options={topFilms.map(option => option.title)}
        renderInput={params => (
          <TextField
            style={{ fontFamily: 'Gaegu, cursive'}}
            {...params}
            label="do you wanna more?"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        )}
      />
  )
}
// AutocompleteComponent.propTypes = {
//   classes: PropTypes.shape({
//     icon: PropTypes.string,
//   }).isRequired,
// };

export default AutocompleteComponent;


