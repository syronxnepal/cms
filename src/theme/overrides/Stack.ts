const Stack = () => ({
  MuiStack: {
    styleOverrides: {
      root: {
        '&.hover-stack': {
          '& .hover-stack-box': {
            // height: '34px',
            alignItems: 'center',
            display: 'flex !important',
            justifyContent: 'flex-start',
          },
          '&:hover': {
            '& .hover-display-box': {
              marginTop: '-5px',
              display: 'flex !important',
            },
          },
        },
      },
    },
  },
});

export default Stack;
