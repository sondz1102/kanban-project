import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Trường này không được bỏ trống")
    .email("Email không hợp lệ"),

  password: z
    .string()
    .min(1, "Password không được bỏ trống")
    .min(6, "Password phải chứa ít nhất 6 ký tự"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Trường này không được bỏ trống")
    .email("Email không hợp lệ"),

  password: z
    .string()
    .min(1, "Password không được bỏ trống")
    .min(6, "Password phải chứa ít nhất 6 ký tự"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
