export const state = () => ({
  counter: 0,
  formSteps: [
    {
      name: "Product Type",
      to: "/calculator/product-type"
    },
    {
      name: "Basic Info",
      to: "/calculator/basic-info"
    },
    {
      name: "Regular Payment Schedule",
      to: "/calculator/regular-payment-schedule"
    },
    {
      name: "Fees",
      to: "/calculator/fees"
    },
    {
      name: "Collateral",
      to: "/calculator/collateral"
    },
    {
      name: "Grace Period",
      to: "/calculator/grace-period"
    },
    {
      name: "Gross Witholding Tax",
      to: "/calculator/gross-witholding-tax"
    },
    {
      name: "Interest Rate",
      to: "/calculator/interest-rate"
    }
  ]
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
    state.formSteps = payload;
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
