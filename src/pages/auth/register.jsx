"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EyeIcon,
  EyeOffIcon,
  UserPlusIcon,
  MailIcon,
  KeyIcon,
} from "lucide-react";

export default function RegisterForm({ onRegister }) {
  const navigate = useNavigate();

  /* ──────────────── state ──────────────── */
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ──────────────── helpers ──────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((curr) => ({ ...curr, [name]: value }));

    if (errors[name]) setErrors((curr) => ({ ...curr, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords don’t match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const success = await onRegister(formData); // API call comes from parent
    setIsSubmitting(false);

    if (success) navigate("/dashboard");
  };

  /* ──────────────── UI ──────────────── */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white shadow-lg rounded-xl p-10">
        {/* header */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-indigo-600 flex items-center justify-center">
            <UserPlusIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            or{" "}
            <a
              href="/auth/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </a>
          </p>
        </div>

        {/* form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* full name */}
          <FieldWrapper
            id="fullName"
            label="Full name"
            placeholder="John Doe"
            value={formData.fullName}
            Icon={UserPlusIcon}
            error={errors.fullName}
            onChange={handleChange}
          />

          {/* email */}
          <FieldWrapper
            id="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            Icon={MailIcon}
            error={errors.email}
            onChange={handleChange}
          />

          {/* password */}
          <FieldWrapper
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            Icon={KeyIcon}
            error={errors.password}
            onChange={handleChange}
            rightEl={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition" />
                )}
              </button>
            }
          />

          {/* confirm password */}
          <FieldWrapper
            id="confirmPassword"
            label="Confirm password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.confirmPassword}
            Icon={KeyIcon}
            error={errors.confirmPassword}
            onChange={handleChange}
          />

          {/* submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 transition disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.376 0 0 5.372 0 12h4z"
                  />
                </svg>
                Creating account…
              </>
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        {/* social login */}
        <Divider>or continue with</Divider>
        <SocialButtons />
      </div>
    </div>
  );
}

/*──────────────── helper components ────────────────*/

function FieldWrapper({
  id,
  label,
  value,
  Icon,
  error,
  rightEl,
  onChange,
  ...inputProps
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          {...inputProps}
          className={`block w-full pl-10 pr-10 py-3 rounded-lg border ${
            error ? "border-red-300 bg-red-50" : "border-gray-300"
          } placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition sm:text-sm`}
        />
        {rightEl}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01M5.07 19h13.86c1.5 0 2.45-1.63 1.7-3L13.73 4a2 2 0 00-3.46 0L3.37 16c-.75 1.37.22 3 1.7 3z"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function Divider({ children }) {
  return (
    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-gray-500">{children}</span>
      </div>
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {[
        {
          label: "Google",
          svg: (
            <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.447,1.722-1.502,3.123-2.945,4.034 ..."></path>
          ),
        },
        {
          label: "Facebook",
          svg: (
            <path
              fillRule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10..."
              clipRule="evenodd"
            />
          ),
        },
        {
          label: "Twitter",
          svg: <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 ..." />,
        },
      ].map(({ label, svg }) => (
        <button
          key={label}
          className="w-full py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition flex items-center justify-center"
        >
          <span className="sr-only">{`Sign up with ${label}`}</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            {svg}
          </svg>
        </button>
      ))}
    </div>
  );
}
