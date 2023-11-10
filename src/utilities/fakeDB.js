const addToCart = (id, data) => {
  let cart = {
    id: id,
    data: data,
  };

  const newCrt = JSON.stringify(cart);
  localStorage.setItem("tours-cart", newCrt);
  return true;
};

const getStrdCart = (id) => {
  let strCart = {};
  const storedCart = localStorage.getItem("tours-cart");

  if (storedCart) {
    strCart = JSON.parse(storedCart);

    if (strCart.id === id) {
      return strCart;
    }
  }
};

export { addToCart, getStrdCart };
