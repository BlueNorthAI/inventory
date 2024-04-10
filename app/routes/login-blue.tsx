import { Link } from "@remix-run/react";
import { HeroBackground } from "~/components/blue/HeroBackground";
import blurCyanImage from "../images/blur-cyan.png";
import blurIndigoImage from "../images/blur-indigo.png"
import { Logomark } from "~/components/blue/Logo";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 overflow-y-hidden">
        <div className="relative h-screen hidden mt-auto lg:block bg-slate-900  w-[60rem]">
          <div>
            <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
          </div>

          <div className="relative">
            <img
              className="absolute -right-28 -top-40"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
            />
            <img
              className="absolute top-8 -right-28"
              src={blurIndigoImage}
              alt=""
              width={567}
              height={567}
            />

            <img
              className="absolute -bottom-[59rem] right-[33rem]"
              src={blurCyanImage}
              alt=""
              width={530}
              height={400}
            />
            <img
              className="absolute -bottom-[50rem] right-[23rem]"
              src={blurIndigoImage}
              alt=""
              width={567}
              height={530}
            />
          </div>
          <div className=" flex flex-1 flex-col justify-center items-center mt-auto h-screen px-4 py-12 text-white ">
            <div className="relative mt-4 ">
              <p className="flex justify-center bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent ">
                BlueNorth AI
              </p>
              <p className=" flex justify-center text-center mt-3 text-3xl tracking-tight text-white">
                Enterprise AI suite to transform Supply Chain Planning and
                Execution
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div>
              <Logomark/>
              <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <Link
                        to="#"
                        className="font-semibold text-sky-500 hover:text-sky-600"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <Link to="/demo/dashboard">
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-gradient-blue px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-center text-sm leading-6 text-gray-500">
              Not a member?{" "}
              <Link
                to="#"
                className="font-semibold text-sky-500 hover:text-sky-600"
              >
                Start a 14-day free trial
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
