const getDefaultState = () => {
  return {
    interestRatePercentage: undefined,
    interestExpressed: undefined,
    principalPaymentType: undefined,
    interestPaymentType: undefined,
    principalPaymentFrequency: undefined,
    interestPaymentFrequency: undefined,
    interestMonths: undefined
  };
};

export const state = getDefaultState();

export const getters = {
  interestRatePercentage(state) {
    return state.interestRatePercentage;
  },
  interestExpressed(state) {
    return state.interestExpressed;
  },
  principalPaymentType(state) {
    return state.principalPaymentType;
  },
  interestPaymentType(state) {
    return state.interestPaymentType;
  },
  principalPaymentFrequency(state) {
    return state.principalPaymentFrequency;
  },
  interestPaymentFrequency(state) {
    return state.interestPaymentFrequency;
  },
  interestMonths(state) {
    return state.interestMonths;
  }
};

export const mutations = {
  setInterestRatePercentage(state, payload) {
    state.interestRatePercentage = payload;
  },
  setInterestExpressed(state, payload) {
    state.interestExpressed = payload;
  },
  setPrincipalPaymentType(state, payload) {
    state.principalPaymentType = payload;
  },
  setInterestPaymentType(state, payload) {
    state.interestPaymentType = payload;
  },
  setPrincipalPaymentFrequency(state, payload) {
    state.principalPaymentFrequency = payload;
  },
  setInterestPaymentFrequency(state, payload) {
    state.interestPaymentFrequency = payload;
  },
  setInterestMonths(state, payload) {
    state.interestMonths = payload;
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const actions = {
  setInterestRatePercentage(context, payload) {
    context.commit("setInterestRatePercentage", payload);
  },
  setInterestExpressed(context, payload) {
    context.commit("setInterestExpressed", payload);
  },
  setPrincipalPaymentType(context, payload) {
    context.commit("setPrincipalPaymentType", payload);
  },
  setInterestPaymentType(context, payload) {
    context.commit("setInterestPaymentType", payload);
  },
  setPrincipalPaymentFrequency(context, payload) {
    context.commit("setPrincipalPaymentFrequency", payload);
  },
  setInterestPaymentFrequency(context, payload) {
    context.commit("setInterestPaymentFrequency", payload);
  },
  setInterestMonths(context, payload) {
    context.commit("setInterestMonths", payload);
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};
