const initialState = {
  a: 1,
  b: 1,
  c: 1,
  d: 1

};

const reducer = (state = initialState, action1) => {
  const newState = { ...state };

  switch (action1.type) {
    case 'AGE_UP':
      newState.a += newState.c;
      break;

    case 'AGE_DOWN':

      newState.b += newState.d;

      break;

    case 'AGE_UPS':
      newState.c += newState.a;
      break;

    case 'AGE_DOWNS':

      newState.d += newState.b;

      break;


  }
  return newState;
};


export default reducer;