import React from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Gmail = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            sendEmail();
        }, 100000);
        // 20000
        return () => clearTimeout(timer); 
    }, []);

    const sendEmail = () => {
        const templateParams = {
            to_email: "deepaknagar2436@gmail.com",  
            message: "Your order has been successfully placed."
        };

        emailjs.send(
            "service_e87q63b",  
            "template_1cmcznr",  
            templateParams,
            "-RWU-qCcc12VU4hT9"   
        ).then(
            (response) => {
                alert("Order Placed Successfully");
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                alert("Failed to send order email.");
                console.log("FAILED...", error);
            }
        );
    };

    return (
        <>
        <button onClick={sendEmail}></button>
        </>
    );
};

export default Gmail;
