import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  Contact: {
    padding: '50px 0 30px',
  },
  headerContact: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0 30px',
    fontSize: '32px',
    textTransform: 'uppercase',
  },
  ContactBody: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContact: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    maxWidth: '550px',
    width: '500px',
    margin: '50px',
    borderRadius: '4px',
    border: '1px solid #728DA3',
    '& input': {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #728DA3',
      margin: '20px 20px 10px',
    },
    '& textarea': {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #728DA3',
      margin: '20px',
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20px',
    maxWidth: '550px',
    width: '500px',
    margin: '50px',
  },
}))

export default useStyles;