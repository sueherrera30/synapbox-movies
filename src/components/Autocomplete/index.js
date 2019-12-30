import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteComponent = (props) => {
  const { items } = props;
  return (
    <Autocomplete
        options={items}
        getOptionLabel={option => option.title}
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


