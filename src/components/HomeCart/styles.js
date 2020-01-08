const styles = theme => ({
  main:{
    fontFamily: 'Gaegu, cursive',
    color: 'white', 
  },
  title: {
    fontFamily: 'Gaegu, cursive',
    color: 'white',
    padding: theme.spacing(2),
  },
  subtitle: {
    fontFamily: 'Gaegu, cursive',
    color: theme.palette.secondary.main,
  },
  newItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    '& p': {
      color: 'white',
      fontSize: '22px',
      width: '66.66%',
    },
    '& > button > span > svg': {
      color: theme.palette.secondary.main,
      fontSize: '20px',
    },
  },
  total:{
    fontSize: '3rem',
  },
});

export default styles;