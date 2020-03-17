const getDefaultState = () => {
  return {
    fixedCollateral: undefined,
    percentCollateral: undefined,
    interestCollateral: undefined,
    expressCollateral: undefined,
    interestAccrues: undefined
  };
};

export const state = getDefaultState();

export const getters = {
  fixedCollateral(state) {
    return state.fixedCollateral;
  },
  percentCollateral(state) {
    return state.percentCollateral;
  },
  interestCollateral(state) {
    return state.interestCollateral;
  },
  expressCollateral(state) {
    return state.expressCollateral;
  },
  interestAccrues(state) {
    return state.interestAccrues;
  }
};

export const mutations = {
  setFixedCollateral(state, payload) {
    state.fixedCollateral = payload;
  },
  setPercentCollateral(state, payload) {
    state.percentCollateral = payload;
  },
  setInterestCollateral(state, payload) {
    state.interestCollateral = payload;
  },
  setExpressCollateral(state, payload) {
    state.expressCollateral = payload;
  },
  setInterestAccrues(state, payload) {
    state.interestAccrues = payload;
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const actions = {
  setFixedCollateral(context, payload) {
    context.commit("setFixedCollateral", payload);
  },
  setPercentCollateral(context, payload) {
    context.commit("setPercentCollateral", payload);
  },
  setInterestCollateral(context, payload) {
    context.commit("setInterestCollateral", payload);
  },
  setExpressCollateral(context, payload) {
    context.commit("setExpressCollateral", payload);
  },
  setInterestAccrues(context, payload) {
    context.commit("setInterestAccrues", payload);
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};
