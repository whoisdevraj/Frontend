"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios"; // Import AxiosError for proper typing
import { useToast } from "@/components/ui/use-toast"; // Adjust import if needed
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define API base URL
const API_BASE_URL = "https://api-4forms.vercel.app/api";

// Validation schema using Zod
const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

// Interface for API error
interface ApiError {
  message: string;
}

// Function to request API key
export const requestApiKey = async (email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, {
      email,
    });
    return response.data.message;
  } catch (error: AxiosError<ApiError>) {
    throw new Error(
      error.response?.data?.message || "Failed to generate API key."
    );
  }
};

// Main component for the input form
export function InputForm() {
  const { success, error } = useToast(); // Adjusted to directly use the toast functions

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const message = await requestApiKey(data.email);
      success(`API Key Generated: ${message}`); // Success toast
    } catch (err: unknown) {
      if (err instanceof Error) {
        error(err.message || "Error generating API key."); // Error toast
      } else {
        error("An unknown error occurred."); // Fallback message for non-Error objects
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@domain.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter your email to receive an API key.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Generate API-Key
        </Button>
      </form>
    </Form>
  );
}