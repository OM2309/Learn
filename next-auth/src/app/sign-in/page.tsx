"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await axios.post("/api/sign-in", data);
      const token = res.data.token;
      localStorage.setItem("token", token); // Store token
      setMessage("Signed in successfully ✅");
    } catch (error: unknown) {
      const err = error as AxiosError<{ error: string }>;
      const errorMsg = err.response?.data?.error || "Something went wrong ❌";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            {...register("email")}
            className="border p-2 w-full"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className="border p-2 w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>

        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
}
