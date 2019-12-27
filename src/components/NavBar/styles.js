import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  navbar: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: '0 0 5px 1px rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    right: 0,
  },
  navbarNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarDown: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    margin: '5px 20px',
  },
  menu: {
    '& li': {
      display: 'inline-flex',
      margin: '10px',
    },
    '& li a': {
      fontWeight: 300,
      fontDisplay: 'optional',
      fontSize: '18px',
      color: '#fff',
      transition: 'all 0.3s',
      textShadow: '0px 0px 3px rgba(0,0,0,0.5)',
      '&:hover': {
        opacity: 0.7,
      }
    },
    '& li a img': {
      width: '20px',
    },
  },
  navbarLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}))


export default useStyles