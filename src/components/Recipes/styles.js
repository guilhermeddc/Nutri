import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  recipes: {
    width: '100%',
    backgroundColor: '#DEEFF7',
  },
  recipesHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 0 50px',
    '& h2': {
      fontSize: '32px',
      textTransform: 'uppercase',
      marginBottom: '50px'
    },
    '& p': {
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 300,
      padding: '0 15px',
      textAlign: 'center',
    },
  },
  recipesContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    margin: '15px 15px 100px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 5px 1px rgba(46,46,46,0.3)',
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& span img': {
      width: '24px',
      margin: '20px 5px'
    },
    '& span p': {
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 400,
    },
    '& > p': {
      lineHeight: 1.5,
      fontSize: '14px',
      fontWeight: 300,
      textAlign: 'center',
      padding: '25px'
    },
    '& a': {
      padding: '15px 40px',
      backgroundColor: '#2E2E2E',
      marginBottom: '30px',
      color: '#fff',
      borderRadius: '2px',
      textTransform: 'uppercase',
    }
  },
  tagSteak: {
    color: '#F20000'
  },
  tagFish: {
    color: '#02BCD4'
  },
  tagJuice: {
    color: '#E96507'
  },
  cardImg: {
    width: '320px',
    margin: '-20px 10px 0 10px',
    borderRadius: '5px',
    boxShadow: '0 0 5px 1px rgba(46,46,46,0.3)',
    '&:hover': {
      boxShadow: '0 0 10px 1px rgba(46,46,46,0.3)',
      borderRadius: '10px',
      transition: 'all .3s',
    },
  },
}))

export default useStyles;

// #E96507

// #02BCD4

// #F20000