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
    flexWrap: 'wrap',
    padding: '0 0 50px 0',    
  },
  aboutImg: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    '& img': {
      borderRadius: '5px',
      boxShadow: '0 0 5px 1px rgba(46,46,46,0.2)',
      minWidth: '260px',
      '&:hover': {
        boxShadow: '0 0 10px 1px rgba(46,46,46,0.3)',
        borderRadius: '10px',
        transition: 'all .3s',
      },
    },
  },
  aboutInfo: {
    flex: 3,
    '& h3': {
      padding: '0 40px 10px',
      fontSize: '24px'
    },
    '& p': {
      padding: '10px 40px',
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 300,
      textAlign: 'justify',
    }
  },
}))

export default useStyles