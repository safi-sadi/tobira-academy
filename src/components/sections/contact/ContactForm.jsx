"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
    User,
    Mail,
    Phone,
    BookOpen,
    MessageSquare,
    Send,
    Loader2,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const [agree, setAgree] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agree) {
            setStatus({
                type: "error",
                message: "Please agree to the Privacy Policy.",
            });
            return;
        }

        setLoading(true);

        setStatus({
            type: "",
            message: "",
        });

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message:
                    "Your message has been sent successfully. We will contact you soon.",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setAgree(false);
        } catch (error) {
            console.error(error);

            setStatus({
                type: "error",
                message:
                    "Unable to send your message. Please try again.",
            });
        }

        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-10 shadow-2xl"
        >

            {/* Background Glow */}

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-100 blur-3xl" />

            <div className="relative">

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                    Contact Form
                </span>

                <h2 className="mt-5 text-4xl font-bold">
                    Send us a Message
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                    Complete the form below and our consultants
                    will respond as quickly as possible.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    {/* Row 1 */}

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Name */}

                        <div className="relative">

                            <User
                                size={18}
                                className="absolute left-5 top-5 text-red-500"
                            />

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-red-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-red-100
                "
                            />

                        </div>

                        {/* Email */}

                        <div className="relative">

                            <Mail
                                size={18}
                                className="absolute left-5 top-5 text-red-500"
                            />

                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-red-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-red-100
                "
                            />

                        </div>

                    </div>
                    {/* Row 2 */}

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Phone */}

                        <div className="relative">

                            <Phone
                                size={18}
                                className="absolute left-5 top-5 text-red-500"
                            />

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-red-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-red-100
                "
                            />

                        </div>

                        {/* Subject */}

                        <div className="relative">

                            <BookOpen
                                size={18}
                                className="pointer-events-none absolute left-5 top-5 text-red-500"
                            />

                            <select
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="
                  w-full
                  appearance-none
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-red-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-red-100
                "
                            >
                                <option value="">
                                    Select Subject
                                </option>

                                <option>
                                    Study in Japan
                                </option>

                                <option>
                                    Student Visa
                                </option>

                                <option>
                                    Japanese Language Course
                                </option>

                                <option>
                                    Scholarship
                                </option>

                                <option>
                                    General Inquiry
                                </option>

                                <option>
                                    Other
                                </option>

                            </select>

                        </div>

                    </div>

                    {/* Message */}

                    <div className="relative">

                        <MessageSquare
                            size={18}
                            className="absolute left-5 top-5 text-red-500"
                        />

                        <textarea
                            rows={7}
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your study plan..."
                            className="
                w-full
                resize-none
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                py-4
                pl-14
                pr-5
                outline-none
                transition
                focus:border-red-500
                focus:bg-white
                focus:ring-4
                focus:ring-red-100
              "
                        />

                    </div>

                    {/* Privacy */}

                    <label className="flex items-start gap-3">

                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="
                mt-1
                h-5
                w-5
                rounded
                border-gray-300
                accent-red-600
              "
                        />

                        <span className="text-sm leading-7 text-gray-600">

                            I agree to the

                            <span className="font-semibold text-red-600">
                                {" "}Privacy Policy{" "}
                            </span>

                            and consent to being contacted regarding my enquiry.

                        </span>

                    </label>

                    {/* Alert */}

                    {status.message && (

                        <motion.div

                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}

                            className={`flex items-center gap-3 rounded-2xl p-4 text-sm font-medium ${status.type === "success"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-red-50 text-red-700"
                                }`}

                        >

                            {status.type === "success"
                                ? <CheckCircle2 size={20} />
                                : <AlertCircle size={20} />
                            }

                            {status.message}

                        </motion.div>

                    )}
                              {/* Submit Button */}

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            type="submit"
            disabled={loading}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-red-600
              to-orange-500
              px-8
              py-5
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:shadow-red-300
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />

                Sending Message...
              </>
            ) : (
              <>
                Send Message

                <Send
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </>
            )}
          </motion.button>

        </form>

        {/* Bottom Text */}

        <div className="mt-8 border-t pt-6">

          <p className="text-center text-sm leading-7 text-gray-500">

            Our consultants usually reply within

            <span className="font-semibold text-red-600">
              {" "}24 Hours
            </span>

            . For urgent enquiries please call our office directly.

          </p>

        </div>

      </div>

    </motion.div>
  );
}