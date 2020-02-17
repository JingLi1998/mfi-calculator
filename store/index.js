import Vue from "vue";

export const state = () => ({
  counter: 0,
  formSteps: ["/calculator/product-type", "/calculator/basic-info"]
});

export const getters = {
  formSteps(state) {
    return state.formSteps;
  },
  counter(state) {
    return state.counter;
  },
  basicInfo(state) {
    return state.basicInfo;
  }
};

export const mutations = {
  setFormSteps(state, payload) {
    const defaultSteps = ["/calculator/product-type", "/calculator/basic-info"];
    Vue.set(state, "formSteps", [...defaultSteps, ...payload]);
  },
  setCounter(state, payload) {
    state.counter = payload;
  },
  setBasicInfo(state, payload) {
    state.basicInfo = { ...payload };
  }
};

export const actions = {
  setFormSteps(context, payload) {
    payload = payload.filter(e => e !== " ");
    context.commit("setFormSteps", payload);
  },
  setCounter(context, payload) {
    context.commit("setCounter", payload);
  },
  setBasicInfo(context, payload) {
    context.commit("setBasicInfo", payload);
  }
};
