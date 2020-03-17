const getDefaultState = () => {
  return {
    loanAmount: undefined,
    loanDuration: undefined
  };
};

export const state = getDefaultState();

export const getters = {
  loanAmount(state) {
    return state.loanAmount;
  },
  loanDuration(state) {
    return state.loanDuration;
  }
};

export const mutations = {
  setLoanAmount(state, payload) {
    state.loanAmount = payload;
  },
  setLoanDuration(state, payload) {
    state.loanDuration = payload;
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const actions = {
  setLoanAmount(context, payload) {
    context.commit("setLoanAmount", payload);
  },
  setLoanDuration(context, payload) {
    context.commit("setLoanDuration", payload);
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};
