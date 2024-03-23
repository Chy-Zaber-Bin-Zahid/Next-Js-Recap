"use client";
import Image from "next/image";
import { BiHide } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Spinner } from "@phosphor-icons/react";

const Login: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/companies");
    }
  }, []);

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  // password show hide
  const passwordHideOpen = (): void => {
    setPasswordVisible((prevVisible: boolean) => !prevVisible);
  };

  // zod validation with react-hook-form
  type FormData = {
    email: string;
    password: string;
  };

  const schema = z.object({
    email: z.string().nonempty({ message: "Please enter your email!" }).email(),
    password: z
      .string()
      .nonempty({ message: "Please enter your password!" })
      .min(8)
      .max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // react query

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      const authName = "65d6e54dd2d038abc102b4b2";
      const authPass = "897cf996-ec96-4707-9c4d-2f25d64565be";
      const base64Credentials = btoa(authName + ":" + authPass);

      return axios.post("http://192.168.0.168:5000/auth/sign-in", data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Basic ${base64Credentials}`,
        },
      });
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.auth.accessToken);
      router.push("/companies");
    },
  });

  const submitData = async (data: FormData) => {
    const bodyData = {
      email: data.email,
      password: data.password,
      grantType: "password",
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTAyYmEwNDg4NjQxNzUxMDE4NmFkNmEiLCJ1c2VyVHlwZSI6ImFkbWluIiwiY2xpZW50SWQiOiI2NTAzMDdhZTNiODE0NDdlNWQ3OTM0MjUiLCJlbWFpbCI6IjZzZW5zZWV2QGdtYWlsLmNvbSIsImlhdCI6MTY5NTM1OTE3OSwiZXhwIjoxNjk1MzU5Nzc5fQ.x6tNWy3Hz1BUM_PS0jpBwSWm7RHWtNks3o-UuJCUMcI",
    };
    mutation.mutate(bodyData, {
      onError: (error) => {
        console.error("Mutation failed:", error);
      },
    });
  };
  const { isPending, isSuccess } = mutation;

  return (
    <main className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(submitData)} className="w-full max-w-96">
        <div className="flex justify-center items-center p-4">
          <Image
            src="/images/Main Logo 1.png"
            alt="Main Logo"
            width={120}
            height={120}
            priority
          ></Image>
        </div>
        <div className="bg-[#F8F9FB] flex flex-col border-t-4 border-[#0763E3] p-8">
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="text-sm text-[#989DA4] mb-6">Continue with pattern50</p>
          <div className="flex flex-col gap-2">
            <label className="text-[#6C6E72] text-sm" htmlFor="">
              Email Address
            </label>
            <input
              className="py-2 px-3 text-sm border rounded border-[#EBEBEE]"
              type="text"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
            <label className="text-[#6C6E72] text-sm" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                className="py-2 pl-3 pr-7 text-sm border rounded border-[#EBEBEE] w-full"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
              {!passwordVisible ? (
                <BiHide
                  onClick={passwordHideOpen}
                  className="absolute top-3 right-2 cursor-pointer"
                />
              ) : (
                <RxEyeOpen
                  onClick={passwordHideOpen}
                  className="absolute top-3 right-2 cursor-pointer"
                />
              )}
            </div>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-right mt-4 underline text-[#0763E3] "
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            className="text-white bg-[#0763E3] rounded mt-6 text-sm p-2 flex justify-center items-center gap-2"
          >
            {isPending ? (
              <>
                Loading <Spinner className="animate-spin" size={20} />
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
