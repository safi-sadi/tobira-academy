"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Globe,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";

const contactItems = [
  {
    icon: MapPin,
    title: "Bangladesh Office",
    value: "House No # 446(Sarkar Bari), 1st Floor, Nayapara, Donia Road, Shonir Akhra, Jatrabari, Dhaka., Dhaka, Bangladesh, 1236",
    href: "https://maps.google.com/?q=Haji+Camp+Airport+Road+Uttara+Dhaka",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "01352-309628",
    href: "tel:+8801352-309628",
  },
  {
    icon: Mail,
    title: "Email",
    value: "www.tobirajla.com",
    href: "mailto:www.tobirajla.com",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    value: "Sat - Thu : 10:00 AM - 7:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
          Contact Information
        </span>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Let's Talk
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          Whether you're planning to study in Japan,
          need visa guidance, or simply have questions,
          our consultants are always ready to help.
        </p>
      </div>

      {/* Contact Cards */}

      {contactItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
              <Icon className="h-6 w-6" />
            </div>

            <div>
              <h4 className="font-bold text-gray-900">
                {item.title}
              </h4>

              {item.href ? (
                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="mt-2 block text-gray-600 transition hover:text-red-600"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-gray-600">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Social */}

      <div className="rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold">
          Follow Us
        </h3>

        <p className="mt-3 text-red-100">
          Stay connected with our latest seminars,
          success stories and Japanese language courses.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:scale-110 hover:bg-white hover:text-red-600"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>

          <a
            href="https://tweducationbd.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:scale-110 hover:bg-white hover:text-red-600"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}