import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  '#about': {
    transition: '0.35s',
  },
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  about: {
    width: '100%',
    padding: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      padding: '50px 0',
      fontSize: '32px',
      textTransform: 'uppercase',
    },
  },
  aboutContent: {
    display: 'flex',
    padding: '0 0 50px 0',
    '& div img': {
      width: '350px',
      boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)',
    },
    '& div h3': {
      padding: '0 40px 10px',
      fontSize: '24px'
    },
    '& div p': {
      padding: '10px 40px',
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 300,
      textAlign: 'justify',
    }
  },
}))


export default useStyles