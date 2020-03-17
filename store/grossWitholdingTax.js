const getDefaultState = () => {
  return {
    interestApplies: undefined,
    feeApplies: undefined,
    principalApplies: undefined,
    taxRate: undefined
  };
};

export const state = getDefaultState();

export const getters = {
  feeApplies(state) {
    return state.feeApplies;
  },
  interestApplies(state) {
    return state.interestApplies;
  },
  principalApplies(state) {
    return state.principalApplies;
  },
  taxRate(state) {
    return state.taxRate;
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const mutations = {
  setFeeApplies(state, payload) {
    state.feeApplies = payload;
  },
  setInterestApplies(state, payload) {
    state.interestApplies = payload;
  },
  setPrincipalApplies(state, payload) {
    state.principalApplies = payload;
  },
  setTaxRate(state, payload) {
    state.taxRate = payload;
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};

export const actions = {
  setFeeApplies(context, payload) {
    context.commit("setFeeApplies", payload);
  },
  setInterestApplies(context, payload) {
    context.commit("setInterestApplies", payload);
  },
  setPrincipalApplies(context, payload) {
    context.commit("setPrincipalApplies", payload);
  },
  setTaxRate(context, payload) {
    context.commit("setTaxRate", payload);
  }
};
