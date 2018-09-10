
const {delay}  = require('dva/saga')

export default {

  namespace: 'count',

  state: 0,

  effects: {
    *addAfter1Sec(action, {call, put}) {  // eslint-disable-line
      // console.log(b)
      yield call(delay, 1000);
      yield put({ type: 'add' });
    },
  },

  reducers: {
    add(state) {
      console.log(state)
      return state + 1;
    },
  },

};
