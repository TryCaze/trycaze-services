import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TryCaze - O nama",
  description: "Saznajte naše najvrjednije kvalitete našega rada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>
        {children}
      </body>
    </html>
  );
}
