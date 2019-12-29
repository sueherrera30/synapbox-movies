const styles = theme  => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  imgContainer: {
    width: '33.33%',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '200px',
    },
  },
  title: {
    fontFamily: 'Gaegu, cursive',
    fontWeight: 700,
    fontSize: '45px',
    color: theme.palette.primary.main,
    paddingLeft: '10px',
    margin: 0,
  }
});

export default styles;