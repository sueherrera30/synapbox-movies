const styles = theme  => ({
  card: {
   width:'calc(100%/3 - 40px)',
   margin: theme.spacing(2),
   '& img': {
    height: '200px',
   },
  },
  buttonContainer: {
    display:'flex',
    justifyContent: 'center',
    '& button': {
      fontFamily: 'Gaegu, cursive',
      textTransform: 'uppercase',
      background: theme.palette.primary.main,
      color: 'white',
   },
  },
  cardsContainer: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding:'20px 0',
  },
  cardText: {
    '& > h2': {
      fontFamily: 'Gaegu, cursive',
      textTransform: 'uppercase',
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
     },
     '& > p': {
      fontFamily: 'Gaegu, cursive',
      color: theme.palette.primary.main,
     },
  },
  price: {
    display:'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Gaegu, cursive',
    fontSize: '20px',
    color: `${theme.palette.secondary.main} !important`,
  },
});

export default styles;