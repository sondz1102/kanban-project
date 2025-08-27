import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/auth";
import { useLoginMutation } from "../../store/api/baseApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (formData: LoginFormData) => {
    const result = await login(formData).unwrap();
    dispatch(
      setAuth({
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken,
      })
    );
    navigate("/app/dashboard");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("email")}
          label="Email"
          error={errors.email?.message}
          require
        />
      </div>
      <div>
        <Input
          {...register("password")}
          type="password"
          label="Password"
          error={errors.password?.message}
          require
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
      >
        Sign In
      </button>
      <p className="mt-2 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
          className="font-medium text-blue-600 hover:text-blue-500"
          to="/auth/register"
          data-discover="true"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
