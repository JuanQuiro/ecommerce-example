import "./global.css";

export const metadata = {
  title: "Ecommerce Examples",
  description: "Power Devs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
