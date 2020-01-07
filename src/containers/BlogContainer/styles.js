import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  blogTitle: {
    textAlign: 'center',
    '& h1': {
      padding: '100px 0 50px',
      fontSize: '32px',
      textTransform: 'uppercase',
    },
    '& p': {
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: 300,
      padding: '0 0 100px',
      maxWidth: 750,
      margin: '0 auto'
    }
  }
}))

export default useStyles