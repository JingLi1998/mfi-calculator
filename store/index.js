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
  incrementCounter(state) {
    state.counter += 1;
  },
  decrementCounter(state) {
    state.counter -= 1;
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
  incrementCounter(context) {
    context.commit("incrementCounter");
  },
  decrementCounter(context) {
    context.commit("decrementCounter");
  }
};
