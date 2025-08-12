"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { SelectOption } from "@/types";

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
  // value could be either the whole SelectOption or just its value string (id)
  value?: SelectOption | string | null;
  onChange?: (selected: SelectOption | null) => void;
}

const Select = ({
  options,
  placeholder = "Select...",
  searchable = false,
  disabled = false,
  className = "",
  value = null,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<SelectOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // sync when incoming value changes (could be SelectOption or string)
  useEffect(() => {
    if (value === null) {
      setSelected(null);
      return;
    }
    if (typeof value === "string") {
      const found = options.find((o) => o.value === value) || null;
      setSelected(found);
    } else {
      // assume it's a full SelectOption
      setSelected(value);
    }
  }, [value, options]);

  // if the currently selected option disappears from options, clear it
  useEffect(() => {
    if (selected) {
      const stillExists = options.some((o) => o.value === selected.value);
      if (!stillExists) {
        setSelected(null);
        onChange?.(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

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

  const handleSelect = (option: SelectOption) => {
    if (disabled) return;
    setSelected(option);
    setIsOpen(false);
    setSearch("");
    onChange?.(option);
  };

  return (
    <div className={`relative w-64 ${className}`} ref={dropdownRef}>
      <div
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
        className={`rounded-lg px-3 py-2 flex justify-between items-center 
        bg-white ${selected ? "ring-2 ring-primary" : "ring-1 ring-gray-300"}
        ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
        `}
        onClick={() => {
          if (!disabled) setIsOpen((o) => !o);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!disabled) setIsOpen((o) => !o);
          }
        }}
      >
        <p className="line-clamp-1">
          {selected ? selected.label : placeholder}
        </p>
        {selected ? (
          <button
            type="button"
            aria-label="Clear selection"
            className="ml-2 cursor-pointer text-gray-600 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
              setSearch("");
              onChange?.(null);
            }}
          >
            <IoMdClose size={20} />
          </button>
        ) : (
          <IoIosArrowDown
            className={`text-gray-600 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
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
          <ul
            role="listbox"
            className="max-h-56 overflow-y-auto"
            aria-activedescendant={selected ? selected.value : undefined}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  id={option.value}
                  role="option"
                  aria-selected={selected?.value === option.value}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-1 hover:bg-primary hover:text-white cursor-pointer line-clamp-1 ${
                    selected?.value === option.value
                      ? "bg-primary text-white"
                      : ""
                  }`}
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
