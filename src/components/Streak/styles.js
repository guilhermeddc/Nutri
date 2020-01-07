import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/bg2.jpg';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  streak: {
    background: `url(${bg}) center center`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    padding: '50px',
  },
  streakContent: {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      fontSize: '32px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
    },
    '& h2 span img': {
      width: '32px',
      margin: '10px'
    },
    '& p': {
      color: '#fff',
      fontWeight: 300,
      fontStyle: 'italic',
      marginTop: '20px',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
    }
  }
}))

export default useStyles