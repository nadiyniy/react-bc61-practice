export const getTotalCart = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.qty, 0);
};
