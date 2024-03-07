"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input, Button } from "@nextui-org/react";

export default function Contact() {
  const social = [
    {
      link: "mailto:pmolakal@asu.edu",
      icon: <Mail />,
    },
    {
      link: "https://www.github.com/prantantheman",
      icon: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/pranith-molakalapalli",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/itsyaboipranith",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.twitter.com/prantantheman",
      icon: <FaTwitter />,
    },
    {
      link: "/Pranith_Molakalapalli.pdf",
      icon: <Resume />,
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(false);

    const newErrors = {
      name: !name,
      email: !email,
      message: !message,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      console.log("Form is valid, proceed with submission.");
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      setIsSubmitted(true);

      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Form has errors or is incomplete.");
    }
  };

  const buttonColor = isSubmitted ? "success" : "default";

  const filledFieldsCount = [name, email, message].filter(Boolean).length;

  // Calculate the background fill percentage
  const fillPercentage = (filledFieldsCount / 3) * 100;

  // Dynamic style for "Contact Me" header

  return (
    <div
      id="contact"
      className="min-h-screen mt-24 lg:mt-0 px-[1rem] md:px-[10rem] flex justify-center items-center"
    >
      <div className="flex flex-col w-full justify-center items-center border-2 border-white/10 rounded-lg md:rounded-md p-12">
        <h1 className="font-satoshi font-black text-7xl ">Contact Me!</h1>
        <div className="flex flex-col lg:flex-row w-full justify-center mt-14 gap-40">
          <div className="flex flex-col">
            <h1 className="font-satoshi text-xl text-white/80">
              If you want to just talk, or if you want build something with me,
              or maybe even want to hire me, feel free to just hit me up on any
              social media.
            </h1>
            <div className="flex gap-4 mt-4">
              {social.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="text-3xl hover:opacity-50 transition-opacity"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[30rem] flex items-start flex-col gap-6"
          >
            <Input
              variant="bordered"
              fullWidth
              color="default"
              size="md"
              placeholder="Pranith"
              label="Name"
              value={name}
              classNames={{
                inputWrapper:
                  "border-2 border-white/30 hover:border-white/40 focus:border-b",
              }}
              onChange={handleInputChange(setName)} // Updating the name state on change
            />
            <Input
              variant="bordered"
              fullWidth
              color="default"
              size="md"
              placeholder="pmolakal@asu.edu"
              label="Email"
              value={email}
              classNames={{
                inputWrapper:
                  "border-2 border-white/30 hover:border-white/40 focus:border-b",
              }}
              onChange={handleInputChange(setEmail)}
            />
            <Input
              variant="bordered"
              fullWidth
              color="default"
              size="md"
              placeholder="Want to builld something together?"
              label="Message"
              value={message}
              classNames={{
                inputWrapper:
                  "border-2 border-white/30 hover:border-white/40 focus:border-b",
              }}
              onChange={handleInputChange(setMessage)}
            />

            <Button
              type="submit"
              variant="shadow"
              color={buttonColor}
              className="w-full"
              isDisabled={!name || !email || !message || isSubmitted}
            >
              {isSubmitted ? "Submitted!" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-8 h-8"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
};

const Resume = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
};
