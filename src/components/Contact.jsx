import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Loader } from "./Loader";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [shake, setShake] = useState(false);

  const [error, setError] = useState(false);
  const [sending, setSendStatus] = useState(false);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const serviceid = import.meta.env.VITE_SERVICE_ID;
  const tempid = import.meta.env.VITE_TEMP_ID;

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const msgInput = document.querySelector("#msg");

  const handleSubmit = () => {
    if (name === "" || email === "" || msg === "") {
      toast.warn("Please fill all the contents");
      setError(true);
      setShake(true);
      setTimeout(()=>setShake(false),500)
      return;
    } else {
      setError(false);
    }
    const formVals = {
      name: name,
      email: email,
      message: msg,
    };
    setSendStatus(true);
    emailjs
      .send(serviceid, tempid, formVals, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Message Sent!");
        },
        (error) => {
          toast.error(`Message not sent due to: ${error.text}`);
        }
      )
      .finally(() => {
        setSendStatus(false);
        setName("");
        setEmail("");
        setMsg("");
      });
  };

  return (
    <div className="border-[1px] bg-[#101010] gap-[20px] md:gap-[36px] lg:gap-[68px] pb-[40px] my-[80px] flex-col mx-auto rounded-[10px] flex items-center lg:w-[612px] px-[5%] justify-center border-black dark:border-white">
      <ToastContainer />
      <div className="flex w-full flex-col dark:text-white">
        <label
          htmlFor="name"
          className="bg-white text-[20px] lg:text-[24px] dark:bg-[#101010] dark:text-white relative w-fit left-3 top-4"
        >
          Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="John Doe"
          className={`bg-transparent hover:border-emerald-400 rounded-[4px] px-4 lg:text-[20px] py-3 border-[1px] border-black dark:border-white ${
            error && name === ""
              ? "ring-1 border-red-400 dark:border-red-700"
              : "border-black"
          }`}
          id="name"
        />
      </div>
      <div className="flex w-full mx-auto flex-col dark:text-white">
        <label
          htmlFor="email"
          className="bg-white text-[20px] lg:text-[24px] dark:bg-[#101010] dark:text-white relative w-fit left-3 top-4"
        >
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="john@email.com"
          className={`bg-transparent hover:border-emerald-400 rounded-[4px] lg:text-[20px] px-4 py-3 border-[1px] border-black dark:border-white ${
            error && email === ""
              ? "ring-1 border-red-400 dark:border-red-700"
              : "border-black"
          }`}
          id="email"
        />
      </div>
      <div className="flex w-full flex-col dark:text-white">
        <label
          htmlFor="msg"
          className="bg-white text-[20px] lg:text-[24px] dark:bg-[#101010] dark:text-white relative w-fit left-3 top-4"
        >
          Message
        </label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Your message..."
          maxLength={500}
          id="msg"
          className={`bg-transparent hover:border-emerald-400 rounded-[4px] lg:text-[20px] min-h-[228px] px-4 py-3 border-[1px]  dark:border-white ${
            error && msg === ""
              ? "ring-1 border-red-400 dark:border-red-700"
              : "border-black"
          }`}
        ></textarea>
      </div>
      {!sending ? (
        <div
          onClick={() => handleSubmit()}
          className={`w-full flex justify-center items-center bg-black hover:bg-emerald-500 dark:hover:bg-emerald-600 text-white transition-colors cursor-pointer dark:bg-white dark:text-black font-bold font-["Inria_Sans"] h-[50px] ${shake?"shake":""}`}
        >
          <button className="text-[20px]">Send Message</button>
        </div>
      ) : (
        <div
          className={`w-full flex justify-center items-center animate-pulse bg-black text-white transition-colors cursor-not-allowed dark:bg-white dark:text-black font-bold font-["Inria_Sans"] h-[50px]`}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};
