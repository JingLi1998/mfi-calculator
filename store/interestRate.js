export const state = () => ({
  interestRatePeriods: []
});

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
    console.log(payload);
    console.log(state.interestRatePeriods);
    Object.assign(state.interestRatePeriods[payload.index], payload.item);
  },
  deleteInterestRatePeriod(state, index) {
    state.interestRatePeriods.splice(index, 1);
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
  }
};
