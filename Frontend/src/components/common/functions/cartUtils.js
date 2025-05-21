export const updateCartItemQuantity = (cartItems, itemId, newQuantity) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
  );
};
