import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&from=${formData.email}&body=Hi, My name is ${formData.name}, ${formData.message} | ${formData.email}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center max-w-4xl justify-center mx-auto items-center px-5 md:px-10">
      <h3 className="section-heading mb-8">Contact</h3>

      <div
        className="w-full p-6 md:p-10 space-y-8"
        style={{
          background: "rgba(13,17,23,0.85)",
          border: "1px solid rgba(0,255,159,0.15)",
        }}
      >
        {/* Terminal header */}
        <div
          className="flex items-center gap-2 text-xs pb-4 -mt-2 mb-4"
          style={{
            borderBottom: "1px solid rgba(0,255,159,0.1)",
            color: "rgba(0,255,159,0.4)",
          }}
        >
          <span style={{ color: "#ff5f56" }}>●</span>
          <span style={{ color: "#ffbd2e" }}>●</span>
          <span style={{ color: "#27c93f" }}>●</span>
          <span className="ml-2 font-mono">contact_terminal.sh</span>
        </div>

        <h4
          className="text-xl md:text-3xl font-semibold text-center"
          style={{ fontFamily: "Orbitron, monospace", color: "#e0ffe8" }}
        >
          <span
            style={{
              color: "#00ff9f",
              textDecoration: "underline",
              textDecorationColor: "rgba(0,255,159,0.4)",
              textShadow: "0 0 8px rgba(0,255,159,0.5)",
            }}
          >
            Lets Chat.
          </span>{" "}
          Please Reach Out
        </h4>

        {/* Contact info */}
        <div className="space-y-4">
          {pageInfo.phoneNumber && (
            <div className="flex items-center gap-4 justify-center">
              <PhoneIcon
                className="h-5 w-5 flex-shrink-0"
                style={{ color: "#00ff9f", filter: "drop-shadow(0 0 4px rgba(0,255,159,0.6))" }}
              />
              <p style={{ color: "rgba(224,255,232,0.7)", fontFamily: "Share Tech Mono, monospace" }}>
                {pageInfo.phoneNumber}
              </p>
            </div>
          )}
          {pageInfo.email && (
            <div className="flex items-center gap-4 justify-center">
              <EnvelopeIcon
                className="h-5 w-5 flex-shrink-0"
                style={{ color: "#00d4ff", filter: "drop-shadow(0 0 4px rgba(0,212,255,0.6))" }}
              />
              <p style={{ color: "rgba(224,255,232,0.7)", fontFamily: "Share Tech Mono, monospace" }}>
                {pageInfo.email}
              </p>
            </div>
          )}
          {pageInfo.address && (
            <div className="flex items-center gap-4 justify-center">
              <MapPinIcon
                className="h-5 w-5 flex-shrink-0"
                style={{ color: "#b700ff", filter: "drop-shadow(0 0 4px rgba(183,0,255,0.6))" }}
              />
              <p style={{ color: "rgba(224,255,232,0.7)", fontFamily: "Share Tech Mono, monospace" }}>
                {pageInfo.address}
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <form
          className="flex flex-col space-y-3 w-full max-w-xl mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            rows={4}
          />
          <button
            type="submit"
            className="py-4 px-10 uppercase tracking-widest font-bold text-sm transition-all duration-300 relative overflow-hidden group"
            style={{
              fontFamily: "Orbitron, monospace",
              color: "#0a0a0f",
              background: "#00ff9f",
              boxShadow: "0 0 10px rgba(0,255,159,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px rgba(0,255,159,0.7), 0 0 40px rgba(0,255,159,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 10px rgba(0,255,159,0.4)";
            }}
          >
            Transmit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
