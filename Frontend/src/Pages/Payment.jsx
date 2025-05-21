
import { useState } from "react";
import RedButton from "../components/common/components/RedButton";
import i18n from "../components/common/components/LangConfig";
import { Link } from "@mui/material";
import QRPayment from "./QRPayment";
import { useCart } from "../context/CartContext";
import Gmail from "./Gmail";

const Payment = () => {
  const [showQRPayment, setShowQRPayment] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState(""); 
  
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "deepakjiobp") {
      setDiscount(1000);
      setMessage("🎉 ₹1000 discount applied!");
    } else {
      setDiscount(0);
      setMessage(""); 
      alert("Invalid Coupon Code");
    }
  };

  const total = Math.max(subtotal - discount, 0);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-48 text-center">
       <h1 className="text-3xl mt-2 font-bold text-center text-gray-800 mb-6">
       Secure Payment
       </h1>
       <br />
      <div className=" ml-10">
      {/* Coupon Section */}
      <p className="text-gray-600 text-left text-sm">Have a discount code?</p>
      <p className="text-gray-500 text-left text-xs mb-2">Enter it below to get a discount</p>

      <div className="flex justify-start items-center mb-4">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={applyCoupon}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Apply Coupon
        </button>
      </div>
      </div>

      {message && <p className="text-green-600 ml-10 text-left font-semibold">{message}</p>}

      <br />
      <br />
    
      <h1 className="text-2xl font-semibold mb-4">{i18n.t("payment.payment")}</h1>

      <div className="mt-6">
        {!showQRPayment ? (
          <button
            onClick={() => setShowQRPayment(true)}
            className=" bg-green border-e-green text-white px-6 py-3 text-lg rounded shadow hover:bg-green-700"
          >
            Proceed to Pay ₹{total}
          </button>
        ) : (
          <QRPayment amount={total} />
        )}
      </div>
      
      <div className="mt-4">
        <Gmail />
      </div>
    </div>
  );
};

export default Payment;
