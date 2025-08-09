import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        404 - Страница не найдена
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "30px" }}>
        Извините, страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link href="/">
        <span
          style={{
            color: "#0070f3",
            textDecoration: "underline",
            fontSize: "1.1rem",
          }}
        >
          Вернуться на главную
        </span>
      </Link>
    </div>
  );
}
