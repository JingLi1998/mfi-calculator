const getDefaultState = () => {
  return {
    feeCategories: []
  };
};

export const state = getDefaultState();

export const getters = {
  feeCategories(state) {
    return state.feeCategories;
  }
};

export const mutations = {
  addFeeCategory(state, payload) {
    state.feeCategories.push(payload);
  },
  editFeeCategory(state, payload) {
    console.log(payload);
    console.log(state.feeCategories);
    Object.assign(state.feeCategories[payload.index], payload.item);
  },
  deleteFeeCategory(state, index) {
    state.feeCategories.splice(index, 1);
  },
  restartApp(state) {
    Object.assign(state, getDefaultState());
  }
};

export const actions = {
  addFeeCategory(context, payload) {
    context.commit("addFeeCategory", payload);
  },
  editFeeCategory(context, payload) {
    context.commit("editFeeCategory", payload);
  },
  deleteFeeCategory(context, index) {
    context.commit("deleteFeeCategory", index);
  },
  restartApp(context) {
    context.commit("restartApp");
  }
};
