"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  access_key: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      data.access_key = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response?.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                {"Let's work together"}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                I&apos;m always interested in new frontend opportunities and
                exciting projects. Whether you need a responsive web application
                or have a question, I&apos;ll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">
                    jarotechnologies@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-600 dark:text-slate-400 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">
                    +2347060858438
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-slate-600 dark:text-slate-400 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Port Harcourt, Nigeria
                  </span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Input
                        placeholder="Name"
                        type="text"
                        required
                        {...register("name")}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Subject"
                      required
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      required
                      {...register("message")}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md text-xs">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-md text-xs">
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
