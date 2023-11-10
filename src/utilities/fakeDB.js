const addToCart = (id, data) => {
  let cart = {
    id: id,
    data: data,
  };

  const newCrt = JSON.stringify(cart);
  localStorage.setItem("tours-cart", newCrt);
  return true;
};

export { addToCart };
