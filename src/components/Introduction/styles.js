import { makeStyles } from '@material-ui/core/styles'
import bg from '../../assets/bg2.jpg'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  intro: {
    background: `url(${bg}) center center`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  },
  introHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100vh',
    marginRight: '20px',
  },
  introContent: {
    padding: '10px 30px 20px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRight: '4px solid #006835',
    '& h1': {
      fontSize: '72px',
      margin: '-8px 0 8px 0',
      fontFamily: 'Brush Script MT',
      color: 'red',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
      fontWeight: 500
    },
    '& p': {
      fontSize: '42px',
      margin: '0 0 24px 0',
      color: '#006835',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
      textTransform: 'uppercase',
    },
    '& a': {
      padding: '15px 40px',
      backgroundColor: '#2E2E2E',
      color: '#fff',
      borderRadius: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 0 10px 1px rgba(46,46,46,0.5)',
      },
    },
  }
}))


export default useStyles