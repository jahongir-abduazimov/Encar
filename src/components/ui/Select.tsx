"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
  value?: Option | null;
  onChange?: (selected: Option | null) => void;
}

const Select = ({
  options,
  placeholder,
  searchable,
  disabled,
  className,
  value,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    if (disabled) return;
    setSelected(option);
    setIsOpen(false);
    setSearch("");
    onChange?.(option);
  };

  return (
    <div className={`relative w-64 ${className}`} ref={dropdownRef}>
      <div
        className={`rounded-lg px-3 py-2 flex justify-between items-center 
        bg-white ${selected ? "ring-2 ring-primary" : "ring-1 ring-gray-300"}
        ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
        `}
        onClick={() => {
          if (!disabled) setIsOpen(!isOpen);
        }}
      >
        <p className="text-sm md:text-base line-clamp-1">{selected ? selected.label : placeholder}</p>
        <IoIosArrowDown
          className={`text-gray-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-10 border-2 border-primary w-full mt-1 rounded-xl bg-white shadow overflow-hidden">
          {searchable && (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 border-b border-gray-400 outline-none"
              placeholder="Поиск..."
            />
          )}
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-1 hover:bg-primary hover:text-white cursor-pointer"
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">Пустой</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
