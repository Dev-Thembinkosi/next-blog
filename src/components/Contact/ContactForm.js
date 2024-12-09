"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 30 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-grey focus:border-grey bg-transparent"
      />
      and i want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        placeholder="email"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-grey focus:border-grey bg-transparent"
      />
      or react out to me on{" "}
      <input
        type="tel"
        placeholder="phone"
        {...register("phone", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-grey focus:border-grey bg-transparent"
      /><br />
      Here are some details about my project: 
      <textarea
        {...register("project detail", {})}
        rows={3}
        placeholder="My project is about.."
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0  placeholder:text-lg border-b border-grey focus:border-grey bg-transparent"
      />
      <input type="submit" value="Send Request" className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded hecuroser-pointer" />
    </form>
  );
}
