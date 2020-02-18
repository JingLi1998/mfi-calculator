export const state = () => ({
  loanAmount: undefined,
  loanDuration: undefined
});

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
  }
};

export const actions = {
  setLoanAmount(context, payload) {
    context.commit("setLoanAmount", payload);
  },

  setLoanDuration(context, payload) {
    context.commit("setLoanDuration", payload);
  }
};
