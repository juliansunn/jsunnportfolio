import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const devEmail = "juliansunn@gmail.com";
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${devEmail}?subject=${formData.subject}&from=${formData.email}&body=Hi, My name is ${formData.name}, ${formData.message} | ${formData.email}`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center md:text-2xl lg:text-4xl">
          <span className="underline decoration-cyan-300">Lets Chat.</span>
          {"  "}
          Please Reach out
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-cyan-500 h-7 w-7 animate-pulse" />
            <p>+ 1 (530) 514-2519</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-cyan-500 h-7 w-7 animate-pulse" />
            <p>{devEmail}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-cyan-500 h-7 w-7 animate-pulse" />
            <p>Santa Cruz, California</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-x-2">
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
          />
          <button
            type="submit"
            className="bg-cyan-500 py-5 px-10 rounded-md text-zinc-800 font-extrabold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
