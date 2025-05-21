import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRPayment = ({amount}) => {
    const [showQR, setShowQR] = useState(false);
    const upiLink = `upi://pay?pa=deepaknagarjiobp@okicici&pn=DeepakNagar&am=${amount}&cu=INR`;

    return (
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <h1>Google Pay Payment</h1>
            <br />
            <p>Click the button below to generate a QR code for payment.</p>
            <br />
            <button
                onClick={() => setShowQR(true)}
                style={{
                    backgroundColor: '#4285F4',
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                }}
            >
                Pay ₹{amount} with Google Pay
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                {showQR && <QRCode value={upiLink} size={200} />}
            </div>
            
            {/* Payment Apps Icons */}
    <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        {/* Google Pay */}
        <img src="https://cdn.iconscout.com/icon/free/png-256/google-pay-2038779-1721670.png" alt="Google Pay" width="60" />

        {/* PhonePe */}
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png" alt="PhonePe" width="50" />

        {/* Paytm */}
        <img src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paypal-256.png" alt="Paytm" width="60" />

        {/* Amazon Pay */}
        <img src="https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-512.png" alt="Amazon Pay" width="60" />

        {/* Visa */}
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" width="60" /> */}

        {/* MasterCard */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" width="60" />

        {/* RuPay */}
        <img src="https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_001-rupay-1024.png" alt="RuPay" width="60" />
    </div>
            

        </div>
    );
};

export default QRPayment;
