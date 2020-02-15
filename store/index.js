export const state = () => ({
  formSteps: ["Landing Page", "Product Type"]
});

export const getters = {
  getFormSteps(state) {
    return state.formSteps;
  }
};
export const mutations = {
  setFormSteps(state, payload) {
    state.formSteps = payload;
  }
};
export const actions = {
  setFormSteps(context, payload) {
    context.commit("setFormSteps", payload);
  }
};
