const getDefaultState = () => {
  return {
    interestRatePeriods: []
  };
};

export const state = getDefaultState();

export const getters = {
  interestRatePeriods(state) {
    return state.interestRatePeriods;
  }
};

export const mutations = {
  addInterestRatePeriod(state, payload) {
    state.interestRatePeriods.push(payload);
  },
  editInterestRatePeriod(state, payload) {
    Object.assign(state.interestRatePeriods[payload.index], payload.item);
  },
  deleteInterestRatePeriod(state, index) {
    state.interestRatePeriods.splice(index, 1);
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const actions = {
  addInterestRatePeriod(context, payload) {
    context.commit("addInterestRatePeriod", payload);
  },
  editInterestRatePeriod(context, payload) {
    context.commit("editInterestRatePeriod", payload);
  },
  deleteInterestRatePeriod(context, index) {
    context.commit("deleteInterestRatePeriod", index);
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};
