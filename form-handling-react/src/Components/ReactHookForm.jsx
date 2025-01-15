import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
     
  return (
    <>
      <h1>React Registration Form </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            {...register("name",{required:true,minLength:{
                value:3,
                message:"Name should be between 3 to 20 characters"
            }})}
            />
            {errors.name && <p>{errors.name.message}</p>}
         
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email"
            {...register("email",{required:true,maxLength:{
                value:30,
                message:"Email should be less than 30 characters"
            }})}
          />
            {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            placeholder="Enter Password"
            {...register("password")}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Phone : </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            required
            autoComplete="off"
            placeholder="Enter Phone"
            {...register("phone")}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default ReactHookForm;
