import "./globals.css";

export const metadata = {
  title: "Rare Zenith – Real Estate Consultancy",
  description:
    "Helping investors and end-users find ideal under-construction and ready-to-move projects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
