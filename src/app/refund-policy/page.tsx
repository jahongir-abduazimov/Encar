"use client";

import request from "@/components/config";
import Container from "@/components/Container";
import DOMPurify from "isomorphic-dompurify";
import React, { useEffect, useState } from "react";

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

const RefundPolicy = () => {
  const [data, setData] = useState<SecureTransactionItem[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await request.get("/common/return_policy/");
        setData(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="min-h-[60vh] pt-5 pb-20">
      <Container>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-3">
          Политика возврата
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          data.map((item) => (
            <div
              className="mb-2"
              key={item.id}
              dangerouslySetInnerHTML={{
                __html: sanitizeAndStyle(item.text),
              }}
            />
          ))
        )}
      </Container>
    </section>
  );
};

export default RefundPolicy;
