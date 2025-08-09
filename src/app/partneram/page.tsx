"use client";

import React, { useEffect, useState } from "react";
import request from "@/components/config";
import DOMPurify from "isomorphic-dompurify";
import Container from "@/components/Container";

interface SecureTransactionItem {
  id: number;
  title: string;
  text: string; // HTML string from backend
}

const LINK_COLOR = "#5458FF"; // yoki '#2563eb' — xohlaganingizni qo'ying

function sanitizeAndStyle(html: string) {
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "strong", "em", "ul", "ol", "li", "br", "a"],
    ALLOWED_ATTR: ["href", "target", "rel"],
  });

  // DOMParser ishlatish faqat brauzerda (client) mumkin — lekin komponentingizda "use client" bor.
  if (typeof window === "undefined") return clean;

  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, "text/html");

  doc.querySelectorAll("a").forEach((a) => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    // inline style — eng yuqori ustunlik
    a.style.color = LINK_COLOR;
    a.style.textDecoration = "underline";
  });

  return doc.body.innerHTML;
}

const Partner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await request.get("/common/partners/");
        setData(res.data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="pt-5 pb-20 min-h-[]">
      <Container>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-6">
          Партнерам
        </h1>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : data.length ? (
          data.map((item: any) => (
            <div key={item.id}>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {item.title}
              </h2>
              <div
                className="mb-8 prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: sanitizeAndStyle(item.text),
                }}
              />
            </div>
          ))
        ) : null}
      </Container>
    </section>
  );
};

export default Partner;
