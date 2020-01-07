import { makeStyles } from '@material-ui/core/styles'
import postImg from '../../assets/posts/sintomas-de-tireoide.png'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 15px',
  },
  Post: {
    display: 'flex',
    borderBottom: '1px solid #2E2E2E2F',
    marginBottom: 50,
    paddingBottom: 50,
    // '& img': {
    //   maxWidth: 400,
    //   borderRadius: 4,
    //   margin: '0 30px 0 0',
    // },
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& span': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '& span img': {
        width: '24px',
        marginRight: 5,
      },
      '& span p': {
        lineHeight: 1.5,
        fontSize: 16,
        fontWeight: 400,
      },
      '& h2': {
        fontSize: 24,
        fontWeight: 400
      },
      '& > p': {
        lineHeight: 1.5,
        fontSize: 16,
        fontWeight: 300,
      },
      '& a': {
        padding: '15px 40px',
        maxWidth: 160,
        backgroundColor: '#2E2E2E',
        color: '#fff',
        borderRadius: '2px',
        textAlign: 'center',
        textTransform: 'uppercase',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 0 10px 1px rgba(46,46,46,0.5)',
        },
      },
    },
  },
  postImg: {
    width: '70%',
    minWidth: 260,
    height: 250,
    background: `url(${postImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 4,
    margin: '0 30px 0 0',
    '&:hover': {
      opacity: 0.9,
      boxShadow: '0 0 10px 1px rgba(46,46,46,0.5)',
    }
  }
}))

export default useStyles