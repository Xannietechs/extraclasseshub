import { z } from "zod";

export const userAuthSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const userRegisterSchema = userAuthSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  role: z.enum(["student", "tutor"]),
});

export type UserRole = "student" | "tutor";