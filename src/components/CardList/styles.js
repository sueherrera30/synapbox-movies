const styles = theme  => ({
  card: {
   width:'calc(100%/3 - 80px)',
   margin: theme.spacing(2),
   '& img': {
    height: '250px',
   },
  },
  buttonContainer: {
    display:'flex',
    justifyContent: 'center',
    '& button': {
      fontFamily: 'Gaegu, cursive',
      textTransform: 'uppercase',
      color: theme.palette.secondary.main,
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
  }
});

export default styles;