import { makeStyles } from '@material-ui/core/styles'
import bg from '../../assets/bg.jpg'

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
    borderRight: '4px solid #fff',
    '& h1': {
      fontSize: '72px',
      margin: '0 0 8px 0',
      color: '#fff',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
    },
    '& p': {
      fontSize: '28px',
      margin: '0 0 24px 0',
      color: '#fff',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
    },
    '& button': {
      fontSize: '14px',
      fontWeight: 500,
      padding: '15px 40px',
      margin: '6px 0',
      color: '#fff',
      background: 'transparent',
      border: '2px solid #fff',
      textTransform: 'uppercase',
      textShadow: '0px 0px 3px rgba(46,46,46,0.5)',
      boxShadow: '0 0 5px 1px rgba(46,46,46,0.5)',
      '&:hover': {
        boxShadow: '0 0 10px 1px rgba(46,46,46,0.5)',
      },
    },
  }
}))


export default useStyles