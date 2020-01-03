import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  programs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 0 50px',
    '& h2': {
      fontSize: '32px',
      textTransform: 'uppercase',
      marginBottom: '50px',
    },
    '& p': {
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 300,
      padding: '0 150px',
      textAlign: 'center',
    },
  },
  programsContent: {
    display: 'flex',
    marginBottom: '100px',
  },
  card: {
    height: '160px',
    maxWidth: '255px',
    width: '255px',
    margin: '15px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px 0.2px rgba(46,46,46,0.2)',
    '&:nth-child(1)': {
      backgroundColor: '#E45027',
    },
    '&:nth-child(2)': {
      backgroundColor: '#FED721',
    },
    '&:nth-child(3)': {
      backgroundColor: '#3C832B',
    },
    '&:nth-child(4)': {
      backgroundColor: '#FA7A4D',
    },
    '&:hover': {
      boxShadow: '0 0 10px 1px rgba(46,46,46,0.3)',
      borderRadius: '10px',
      transition: 'all .3s',
    },
    '& img': {
      width: '50px',
      marginBottom: '15px',
    },
    '& p': {
      color: '#fff',
      fontWeight: 600,
      fontSize: '20px',
      textTransform: 'uppercase',
    },
  }
}))

export default useStyles;