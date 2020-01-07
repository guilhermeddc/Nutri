import { makeStyles } from '@material-ui/core/styles';
import bg from '../../assets/bg-contact.jpg';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  Contact: {
    padding: '50px 0 30px',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundAttachment: 'no-repeat',
    backgroundSize: 'cover',
    color: '#fff',
    textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
  },
  headerContact: {
    textAlign: 'center',
    padding: '50px 0 30px',
    fontSize: '32px',
    textTransform: 'uppercase',
    color: '#2E2E2E',
    textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
  },
  ContactBody: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardContact: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '30px 20px',
    maxWidth: '550px',
    width: '450px',
    margin: '50px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    '& input': {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #728DA3',
      margin: '10px 20px 10px',
      fontWeight: 600,
      color: '#2E2E2E',
      fontSize: 16
    },
    '& textarea': {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #728DA3',
      margin: '10px 20px',
      height: '100px',
      fontWeight: 600,
      color: '#2E2E2E',
      fontSize: 16
    },
    '& a': {
      padding: '15px 40px',
      backgroundColor: '#2E2E2E',
      margin: '10px 20px 20px',
      color: '#fff',
      borderRadius: '2px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
  info: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20px',
    maxWidth: '550px',
    width: '500px',
    margin: '50px',
    color: '#2E2E2E',
    borderRadius: '4px',
    backgroundColor: '#fff',
    '& div': {
      border: '1px solid #728DA3',
      borderRadius: '4px',
      padding: 20,
      margin: '10px 20px',
    }
  },
}))

export default useStyles;