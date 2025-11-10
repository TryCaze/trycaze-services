"use client";
import "./globals.css";
import { Navbar } from "./components/ui/nav";
import { Footer } from "./components/ui/footer";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check both localStorage and cookies for backward compatibility
    const localStorageConsent = localStorage.getItem("cookieConsent");
    const cookieConsent = getCookie("cookieConsent");
    
    if (cookieConsent === "true" || localStorageConsent === "true") {
      setCookieConsent(true);
    } else if (cookieConsent === "false" || localStorageConsent === "false") {
      setCookieConsent(false);
    } else {
      setCookieConsent(null); // No decision yet
    }
  }, []);

  // Helper function to set cookies
  const setCookie = (name: string, value: string, days: number = 365) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
  };

  // Helper function to get cookies
  const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const handleAccept = () => {
    // Set in both localStorage and cookies
    localStorage.setItem("cookieConsent", "true");
    setCookie("cookieConsent", "true", 365);
    setCookieConsent(true);
  };

  const handleDecline = () => {
    // Set in both localStorage and cookies
    localStorage.setItem("cookieConsent", "false");
    setCookie("cookieConsent", "false", 365);
    setCookieConsent(false);
  };

  const handleResetCookies = () => {
    // Clear from both localStorage and cookies
    localStorage.removeItem("cookieConsent");
    
    // Clear the cookie by setting expiration to past
    document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Clear any Google Analytics cookies if they exist
    const domain = window.location.hostname;
    const cookies = document.cookie.split(";");
    
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      
      // Clear common GA cookies
      if (name.includes("_ga") || name.includes("_gid") || name.includes("_gat")) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
    
    setCookieConsent(null);
  };

  return (
    <html lang="hr">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer onResetCookies={handleResetCookies} />

        {/* Show cookie banner only when no decision has been made (null) */}
        {cookieConsent === null && (
          <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 text-white p-3 flex flex-col md:flex-row items-center justify-between z-50 rounded-xl max-w-4xl mx-auto shadow-lg">
            <p className="mb-2 md:mb-0 md:mr-4 text-sm">
              Ova stranica koristi kolačiće za praćenje posjeta i poboljšanje korisničkog iskustva.{" "}
              <a href="/privatnost" className="underline">
                Saznaj više
              </a>
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleAccept}
                className="bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-800 transition text-sm"
              >
                Prihvaćam
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-700 text-white px-3 py-1.5 rounded-lg hover:bg-gray-600 transition text-sm"
              >
                Odbijam
              </button>
            </div>
          </div>
        )}

        {cookieConsent === true && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-75XZ114QLT"
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-75XZ114QLT', {
                  page_path: window.location.pathname,
                });
                
                console.log('Google Analytics loaded - cookie consent given');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}