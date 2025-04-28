"use client";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              to={isLogin ? "/auth/register" : "/auth/login"}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </Link>
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
