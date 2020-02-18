export const state = () => ({
  gracePeriod: undefined,
  interestApplies: undefined,
  principalApplies: undefined
});

export const getters = {
  gracePeriod(state) {
    return state.gracePeriod;
  },
  interestApplies(state) {
    return state.interestApplies;
  },
  principalApplies(state) {
    return state.principalApplies;
  }
};

export const mutations = {
  setGracePeriod(state, payload) {
    state.gracePeriod = payload;
  },
  setInterestApplies(state, payload) {
    state.interestApplies = payload;
  },
  setPrincipalApplies(state, payload) {
    state.principalApplies = payload;
  }
};

export const actions = {
  setGracePeriod(context, payload) {
    context.commit("setGracePeriod", payload);
  },
  setInterestApplies(context, payload) {
    context.commit("setInterestApplies", payload);
  },
  setPrincipalApplies(context, payload) {
    context.commit("setPrincipalApplies", payload);
  }
};
