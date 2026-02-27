export const metadata = {
  title: "Diamond TopUp",
  description: "Topup website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
