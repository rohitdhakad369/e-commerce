import React, { useRef, useState } from 'react';


const GooglePayQRCode = () => {
    const [showQRCode, setShowQRCode] = useState(false);
    const qrCodeRef = useRef(null); 

    const generateQRCode = () => {
        const upiLink = "upi://pay?pa=deepaknagarjiobp@okicici&pn=DeepakNagar&am=50&cu=INR";

        if (qrCodeRef.current) {
            qrCodeRef.current.innerHTML = '';
        }

        new window.QRCode(qrCodeRef.current, {
            text: upiLink,
            width: 256,
            height: 256,
        });

        setShowQRCode(true);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
            <h2>Google Pay Payment</h2>
            <p>Click the button below to generate a QR code for payment.</p>

            <button
                style={{
                    backgroundColor: '#4285F4',
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    textDecoration: 'none',
                }}
                onClick={generateQRCode}
            >
                Pay ₹50 with Google Pay
            </button>

            {showQRCode && (
                <div
                    id="qrcode"
                    ref={qrCodeRef}
                    style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                ></div>
            )}
      
        </div>
        
    );
};

export default GooglePayQRCode;