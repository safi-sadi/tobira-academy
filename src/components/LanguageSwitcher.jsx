"use client";

import { useEffect, useRef, useState } from "react";
import { Globe2, Check, ChevronDown } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "🇧🇩",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
  },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const wrapperRef = useRef(null);

  // Load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (languageCode) => {
    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = languageCode;

      googleSelect.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );
    }

    localStorage.setItem("language", languageCode);
    setCurrentLanguage(languageCode);
    setOpen(false);
  };

  const selectedLanguage =
    languages.find((language) => language.code === currentLanguage) ||
    languages[0];

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      {/* Dropdown */}
      <div
        className={`
          absolute bottom-[calc(100%+12px)] right-0
          w-[220px]
          overflow-hidden
          rounded-2xl
          border border-white/60
          bg-white/95
          shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          backdrop-blur-xl
          transition-all duration-200 origin-bottom-right
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible translate-y-2 scale-95 opacity-0"
          }
        `}
      >
        {/* Header */}
        <div className="border-b border-gray-100 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Language
          </p>

          <p className="mt-0.5 text-sm font-semibold text-gray-800">
            Choose your language
          </p>
        </div>

        {/* Languages */}
        <div className="p-2">
          {languages.map((language) => {
            const isSelected =
              currentLanguage === language.code;

            return (
              <button
                key={language.code}
                onClick={() =>
                  changeLanguage(language.code)
                }
                className={`
                  group flex w-full items-center gap-3
                  rounded-xl px-3 py-3
                  text-left
                  transition-all duration-150
                  ${
                    isSelected
                      ? "bg-indigo-50"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                {/* Flag */}
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-xl shadow-sm">
                  {language.flag}
                </span>

                {/* Language Name */}
                <span className="flex-1">
                  <span
                    className={`
                      block text-sm font-semibold
                      ${
                        isSelected
                          ? "text-indigo-600"
                          : "text-gray-800"
                      }
                    `}
                  >
                    {language.nativeName}
                  </span>

                  <span className="block text-xs text-gray-400">
                    {language.name}
                  </span>
                </span>

                {/* Selected */}
                {isSelected && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className={`
          group
          flex items-center gap-2
          rounded-full
          border border-white/60
          bg-white/90
          px-4 py-3
          shadow-[0_10px_35px_rgba(0,0,0,0.15)]
          backdrop-blur-xl
          transition-all duration-200
          hover:-translate-y-0.5
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
          ${
            open
              ? "ring-2 ring-indigo-100"
              : ""
          }
        `}
      >
        {/* Globe */}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
          <Globe2 size={17} strokeWidth={2.2} />
        </span>

        {/* Current language */}
        <span className="hidden text-sm font-semibold text-gray-800 sm:block">
          {selectedLanguage.nativeName}
        </span>

        {/* Flag */}
        <span className="text-lg">
          {selectedLanguage.flag}
        </span>

        {/* Arrow */}
        <ChevronDown
          size={16}
          className={`
            text-gray-500
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>
    </div>
  );
}