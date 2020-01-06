export default () => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      outiline: 'none',
      boxSizing: 'border-box',
    },
    a: {
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
    li: {
      listStyle: 'none',
    },
    body: {
      fontFamily: '"Roboto",  sans-serif',
      color: '#2E2E2E',
    },
    img: {
      display: 'block',
      maxWidth: '100%',
    },
    input: {
      fontFamily: '"Roboto",  sans-serif',
    },
    textarea: {
      fontFamily: '"Roboto",  sans-serif',
    },
  }
})