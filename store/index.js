import data from "~/api/barbaresco.json";
import arrayedData from "~/api/barbarescoArray.json";
import myApi from "~/plugins/api/myApi.js";

export const state = () => ({
  animation: 'fade-in-up',
  storeData: data,
  arrayedStoreData: arrayedData,
  cart: [],
  toast: {
    text: "",
    show: false
  },
  products: null
});

export const getters = {
  pizzas: state => state.arrayedStoreData.filter(el => el.category === "pizzas"),
  salads: state => state.arrayedStoreData.filter(el => el.category === "salads"),
  burgers: state => state.arrayedStoreData.filter(el => el.category === "burgers"),

  cartSize(state) {
    return state.cart.length;
  },

  cartTotalAmount(state) {
    return state.cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },

  toast(state) {
    return state.toast;
  }
};

export const actions = {
  fetchProducts({
    commit
  }) {
    myApi.getProducts().then(products => {
      commit("setUpProducts", products);
      commit("showToast", "Продукти завантажені");
    });
  },

  addToCart({
    commit
  }, productId) {
    myApi.products("add", productId).then(productId => {
      commit("addToCart", productId);
      commit("showToast", "Додано з кошика");
    });
  },

  removeFromCart({
    commit
  }, productId) {
    myApi.products("remove", productId).then(productId => {
      commit("removeFromCart", productId);
      commit("showToast", "Видалено з кошика");
    });
  },

  deleteFromCart({
    commit
  }, productId) {
    myApi.products("delete", productId).then(productId => {
      commit("deleteFromCart", productId);
      commit("showToast", "Видалено з кошика");
    });
  },

  checkout: ({
    state,
    commit
  }) => {
    myApi.buyProducts(
      state.cart,
      () => {
        commit("emptyCart");
        commit("setCheckoutStatus", "Successful");
      },
      () => {
        commit("setCheckoutStatus", "Failled");
      }
    );
  }
};

export const mutations = {
  setUpProducts(state, productsPayload) {
    state.products = productsPayload;
  },

  addToCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProduct = state.cart.find(product => product.id === productId);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      state.cart.push({
        ...product,
        stock: product.quantity,
        quantity: 1
      });
    }

    product.quantity--;
  },

  removeFromCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProduct = state.cart.find(product => product.id === productId);

    cartProduct.quantity--;

    product.quantity++;
  },

  deleteFromCart(state, productId) {
    let product = state.products.find(product => product.id === productId);

    let cartProductIndex = state.cart.findIndex(
      product => product.id === productId
    );

    product.quantity = state.cart[cartProductIndex].stock;

    state.cart.splice(cartProductIndex, 1);
  },

  showToast(state, toastText) {
    state.toast.show = true;
    state.toast.text = toastText;
  },

  hideToast(state) {
    state.toast.show = false;
    state.toast.text = "";
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },

  emptyCart(state) {
    state.cart = []
    state.cartCount = 0;
  },

  SET_ANIMATION(state, animation) {
    state.animation = animation;
  }
};