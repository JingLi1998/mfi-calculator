import Vue from "vue";

export const state = () => ({
  appStarted: false,
  counter: 0,
  formSteps: ["/calculator/product-type", "/calculator/basic-info"],
  paymentScheduleType: null,
  feesType: null,
  collateralType: null,
  gracePeriodType: null,
  grossTaxType: null,
  interestRateType: null
});

export const getters = {
  appStarted(state) {
    return state.appStarted;
  },
  formSteps(state) {
    return state.formSteps;
  },
  counter(state) {
    return state.counter;
  },
  paymentScheduleType(state) {
    return state.paymentScheduleType;
  },
  feesType(state) {
    return state.feesType;
  },
  collateralType(state) {
    return state.collateralType;
  },
  gracePeriodType(state) {
    return state.gracePeriodType;
  },
  grossTaxType(state) {
    return state.grossTaxType;
  },
  interestRateType(state) {
    return state.interestRateType;
  },
  progressCounter(state) {
    return state.counter / state.formSteps.length;
  }
};

export const mutations = {
  setFormSteps(state, payload) {
    const defaultSteps = ["/calculator/product-type", "/calculator/basic-info"];
    Vue.set(state, "formSteps", [...defaultSteps, ...payload]);
  },
  startApp(state) {
    state.appStarted = true;
  },
  setCounter(state, payload) {
    state.counter = payload;
  },
  setPaymentScheduleType(state, payload) {
    state.paymentScheduleType = payload;
  },
  setFeesType(state, payload) {
    state.feesType = payload;
  },
  setCollateralType(state, payload) {
    state.collateralType = payload;
  },
  setGracePeriodType(state, payload) {
    state.gracePeriodType = payload;
  },
  setGrossTaxType(state, payload) {
    state.grossTaxType = payload;
  },
  setInterestRateType(state, payload) {
    state.interestRateType = payload;
  }
};

export const actions = {
  setFormSteps(context, payload) {
    payload = payload.filter(e => e !== " ");
    context.commit("setFormSteps", payload);
  },
  startApp(context) {
    context.commit("startApp");
  },
  setCounter(context, payload) {
    context.commit("setCounter", payload);
  },
  setPaymentScheduleType(context, payload) {
    context.commit("setPaymentScheduleType", payload);
  },
  setFeesType(context, payload) {
    context.commit("setFeesType", payload);
  },
  setCollateralType(context, payload) {
    context.commit("setCollateralType", payload);
  },
  setGracePeriodType(context, payload) {
    context.commit("setGracePeriodType", payload);
  },
  setGrossTaxType(context, payload) {
    context.commit("setGrossTaxType", payload);
  },
  setInterestRateType(context, payload) {
    context.commit("setInterestRateType", payload);
  }
};
