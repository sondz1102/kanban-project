import { Link } from "react-router-dom";
import Input from "../ui/input/Input";

export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <div>
        <Input label="Fullname" require />
      </div>
      <div>
        <Input label="Email" require />
      </div>
      <div>
        <Input label="Phone" require />
      </div>
      <div>
        <Input type="password" label="Password" require />
      </div>
      <div>
        <Input type="password" label="Confirm Password" require />
      </div>
      <button
        type="submit"
        className="cursor-pointer inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
      >
        Create Account
      </button>
      <p className="mt-2 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          className="font-medium text-blue-600 hover:text-blue-500"
          to="/auth/login"
          data-discover="true"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
