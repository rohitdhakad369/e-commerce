// import i18n from "../components/common/components/LangConfig";
// /* eslint-disable react/prop-types */
// import { useCart } from "../context/CartContext";
// import CartItem from "../components/Cart/CartItem";
// import WhiteButton from "../components/common/components/WhiteButton";
// import RedButton from "../components/common/components/RedButton";
// import ActiveLastBreadcrumb from "../components/common/components/Link";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cartItems } = useCart();

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
//       <ActiveLastBreadcrumb path="Home/Cart" />
//       <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24  ">
//         <h2 className="text-base">{i18n.t("cart.header.product")}</h2>
//         <h2 className="text-base ml-10">{i18n.t("cart.header.price")}</h2>
//         <h2 className="text-base ">{i18n.t("cart.header.quantity")}</h2>
//         <h2 className="text-base hidden md:flex">
//           {i18n.t("cart.header.subtotal")}
//         </h2>
//       </div>
//       {cartItems.map((item, index) => (
//         <CartItem
//           key={item.title}
//           item={item}
//           index={index}
//           stars={item.stars}
//           rates={item.rates}
//         />
//       ))}{" "}
//       <div className="flex justify-between items-center mt-2">
//         <Link to="..">
//           <WhiteButton name={i18n.t("whiteButtons.returnToShop")} />
//         </Link>

//         <WhiteButton name={i18n.t("whiteButtons.updateCart")} />
//       </div>
//       <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between ">
//         <div className="flex items-center md:justify-between justify-center mt-4 gap-2 ">

//         </div>

//         <div className="flex justify-between flex-col gap-6  border py-8 px-6 md:w-[470px]">
//           <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
//           <div className="flex justify-between mt-4 border-b">
//             <p className="text-xl">{i18n.t("cart.total")}:</p>
//             <p className="text-xl">₹{total}</p>
//           </div>
//           <div className="flex justify-between mt-4 border-b">
//             <p className="text-xl">{i18n.t("cart.subtotal")}:</p>
//             <p className="text-xl">₹{total}</p>
//           </div>
//           <div className="flex justify-between mt-4 border-b">
//             <p className="text-xl">{i18n.t("cart.shipping")}:</p>
//             <p className="text-xl">{i18n.t("cart.free")}</p>
//           </div>{" "}
//           <div className="mx-10">
//             <Link to="/checkout">
//               <RedButton name={i18n.t("redButtons.processToCheckout")} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import i18n from "../components/common/components/LangConfig";
// import { useCart } from "../context/CartContext";
// import CartItem from "../components/Cart/CartItem";
// import WhiteButton from "../components/common/components/WhiteButton";
// import RedButton from "../components/common/components/RedButton";
// import ActiveLastBreadcrumb from "../components/common/components/Link";
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
// import { useState } from "react";

// const Cart = () => {
//   const { cartItems } = useCart();
//   const [activeView, setActiveView] = useState('cart'); // 'cart' or 'order'
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const placeOrder = () => {
//     setIsOrderPlaced(true);
//     setActiveView('order');
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
//       <div className="flex justify-end gap-4 mb-4">
//         <button 
//           onClick={() => setActiveView('cart')}
//           className={`flex items-center gap-2 p-2 ${activeView === 'cart' ? 'text-blue-600' : 'text-gray-600'}`}
//         >
//           <FaShoppingCart size={24} />
//           <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
//             {cartItems.length}
//           </span>
//         </button>
//         <button 
//           onClick={() => setActiveView('order')}
//           className={`flex items-center gap-2 p-2 ${activeView === 'order' ? 'text-blue-600' : 'text-gray-600'}`}
//         >
//           <FaCheckCircle size={24} />
//         </button>
//       </div>

//       <ActiveLastBreadcrumb path="Home/Cart" />
      
//       {activeView === 'cart' ? (
//         <>
//           <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24">
//             <h2 className="text-base">{i18n.t("cart.header.product")}</h2>
//             <h2 className="text-base ml-10">{i18n.t("cart.header.price")}</h2>
//             <h2 className="text-base ">{i18n.t("cart.header.quantity")}</h2>
//             <h2 className="text-base hidden md:flex">
//               {i18n.t("cart.header.subtotal")}
//             </h2>
//           </div>
//           {cartItems.map((item, index) => (
//             <CartItem
//               key={item.title}
//               item={item}
//               index={index}
//               stars={item.stars}
//               rates={item.rates}
//             />
//           ))}
//           <div className="flex justify-between items-center mt-2">
//             <Link to="..">
//               <WhiteButton name={i18n.t("whiteButtons.returnToShop")} />
//             </Link>
//             <WhiteButton name={i18n.t("whiteButtons.updateCart")} />
//           </div>
//           <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between">
//             <div className="flex items-center md:justify-between justify-center mt-4 gap-2"></div>
//             <div className="flex justify-between flex-col gap-6 border py-8 px-6 md:w-[470px]">
//               <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
//               <div className="flex justify-between mt-4 border-b">
//                 <p className="text-xl">{i18n.t("cart.total")}:</p>
//                 <p className="text-xl">₹{total}</p>
//               </div>
//               <div className="flex justify-between mt-4 border-b">
//                 <p className="text-xl">{i18n.t("cart.subtotal")}:</p>
//                 <p className="text-xl">₹{total}</p>
//               </div>
//               <div className="flex justify-between mt-4 border-b">
//                 <p className="text-xl">{i18n.t("cart.shipping")}:</p>
//                 <p className="text-xl">{i18n.t("cart.free")}</p>
//               </div>
              
//               <div className="mx-10">
//             <Link to="/checkout">
//               <RedButton name={i18n.t("redButtons.processToCheckout")} />
//             </Link>
//           </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="flex flex-col gap-8 p-6 border rounded shadow">
//           <h2 className="text-2xl font-bold text-center text-green-600">
//             {isOrderPlaced ? i18n.t("cart.orderSuccess") : "Order Preview"}
//           </h2>
//           {isOrderPlaced && (
//             <p className="text-center text-lg">
//               {i18n.t("cart.thankYouMessage")}
//             </p>
//           )}
          
//           <div className="flex flex-col gap-4">
//             {cartItems.map((item) => (
//               <div key={item.title} className="flex justify-between items-center border-b pb-4">
//                 <div>
//                   <h3 className="font-medium">{item.title}</h3>
//                   <p className="text-gray-600">Qty: {item.quantity}</p>
//                 </div>
//                 <p className="font-medium">₹{item.price * item.quantity}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="flex justify-between border-t pt-4">
//             <span className="font-bold">{i18n.t("cart.total")}:</span>
//             <span className="font-bold">₹{total}</span>
//           </div>
          
//           {!isOrderPlaced && (
//             <button 
//               onClick={placeOrder}
//               className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition mt-4"
//             >
//               {i18n.t("redButtons.confirmOrder")}
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import i18n from "../components/common/components/LangConfig";
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import WhiteButton from "../components/common/components/WhiteButton";
import RedButton from "../components/common/components/RedButton";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle, FaBox, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Cart = () => {
  const { cartItems } = useCart();
  const [activeView, setActiveView] = useState('cart'); // 'cart' or 'order'
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    id: '',
    date: '',
    estimatedDelivery: ''
  });

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Generate random order ID (ORD-123456 format)
  const generateOrderId = () => {
    return 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  };

  // Calculate estimated delivery date (5 days from now)
  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle order placement
  const placeOrder = () => {
    const newOrderId = generateOrderId();
    const orderDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    setIsOrderPlaced(true);
    setOrderDetails({
      id: newOrderId,
      date: orderDate,
      estimatedDelivery: getDeliveryDate()
    });
    setActiveView('order');
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
      {/* Header with cart and order icons */}
      <div className="flex justify-end gap-4 mb-4">
        <button 
          onClick={() => setActiveView('cart')}
          className={`flex items-center gap-2 p-2 ${activeView === 'cart' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaShoppingCart size={24} />
          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartItems.length}
          </span>
        </button>
        <button 
          onClick={() => setActiveView('order')}
          className={`flex items-center gap-2 p-2 ${activeView === 'order' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <FaCheckCircle size={24} />
        </button>
      </div>

      <ActiveLastBreadcrumb path="Home/Cart" />
      
      {/* Cart View */}
      {activeView === 'cart' ? (
        <>
          <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24">
            <h2 className="text-base">{i18n.t("cart.header.product")}</h2>
            <h2 className="text-base ml-10">{i18n.t("cart.header.price")}</h2>
            <h2 className="text-base ">{i18n.t("cart.header.quantity")}</h2>
            <h2 className="text-base hidden md:flex">
              {i18n.t("cart.header.subtotal")}
            </h2>
          </div>
          
          {cartItems.map((item, index) => (
            <CartItem
              key={item.title}
              item={item}
              index={index}
              stars={item.stars}
              rates={item.rates}
            />
          ))}
          
          <div className="flex justify-between items-center mt-2">
            <Link to="..">
              <WhiteButton name={i18n.t("whiteButtons.returnToShop")} />
            </Link>
            <WhiteButton name={i18n.t("whiteButtons.updateCart")} />
          </div>
          
          <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between">
            <div className="flex items-center md:justify-between justify-center mt-4 gap-2"></div>
            
            <div className="flex justify-between flex-col gap-6 border py-8 px-6 md:w-[470px]">
              <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
              <div className="flex justify-between mt-4 border-b">
                <p className="text-xl">{i18n.t("cart.total")}:</p>
                <p className="text-xl">₹{total}</p>
              </div>
              <div className="flex justify-between mt-4 border-b">
                <p className="text-xl">{i18n.t("cart.subtotal")}:</p>
                <p className="text-xl">₹{total}</p>
              </div>
              <div className="flex justify-between mt-4 border-b">
                <p className="text-xl">{i18n.t("cart.shipping")}:</p>
                <p className="text-xl">{i18n.t("cart.free")}</p>
              </div>
              
              {/* <div className="mx-10">
                <button onClick={placeOrder}>
                  <RedButton name={i18n.t("redButtons.processToCheckout")} />
                </button>
              </div> */}
             <div className="mx-10">
             <Link to="/checkout">
               <RedButton name={i18n.t("redButtons.processToCheckout")} />
             </Link>
           </div>
            </div>
          </div>
        </>
      ) : (
        /* Order View */
        <div className="flex flex-col gap-8 p-8 border rounded-lg shadow-lg bg-white">
          {isOrderPlaced ? (
            /* Order Confirmation */
            <>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-green-600 text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Order Placed Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your purchase!
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  We've sent an order confirmation to your email
                </p>
              </div>

              <div className="border rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FaBox className="text-gray-500" /> Order Summary
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Order Number</p>
                    <p className="font-medium">{orderDetails.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-medium">{orderDetails.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="font-medium">{orderDetails.estimatedDelivery}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="font-medium">₹{total}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-500" /> Shipping Address
                  </h4>
                  <p className="text-gray-700">
                    369 Main Street<br />
                    New Delhi, DL 110001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Order Items</h3>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.title} className="flex justify-between items-center pb-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">₹{total}</span>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Link to="/">
                  <button className=" bg-slate-900 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </>
          ) : (
            /* Order Preview */
            <>
              <h2 className="text-2xl font-bold text-center">My Orders</h2>
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Items in Your Order</h3>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.title} className="flex justify-between items-center pb-4 border-b">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">₹{total}</span>
                </div>
              </div>

              <button 
                onClick={placeOrder}
                className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition mt-4 text-lg font-medium"
              >
                More Details
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;