import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  footer: {
    backgroundColor: '#2E2E2E',
    color: '#fff'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px 300px',
    '& a img': {
      width: '35px',
      '&:hover': {
        opacity: '0.5',
      },
    },
  },
  footerBody: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px'
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  }
}))

export default useStyles;