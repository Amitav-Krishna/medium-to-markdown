import "@mantine/core/styles.css";
import type { Metadata } from "next";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "./ui/layout/Header";
import { theme } from "@/theme";
import { Footer } from "./ui/layout/Footer";
import classes from "./home.module.css";
import localFont from 'next/font/local';
import cx from 'clsx';

const CaviarDreams = localFont({ src: '../public/CaviarDreams.ttf' });

const description = "Convert Medium articles to Markdown online for free. No signup required. Just paste the URL and get the Markdown.";
const title = "Medium to Markdown";
const author = "Nabil Mansour";

const MAIN_URL = process.env.MAIN_URL;

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: { canonical: `${MAIN_URL}` },
  keywords: "Medium, Markdown, Articles, .md, Convert, Online, Free, Turndown, HTML, Next.js, Nabil Mansour",
  openGraph: {
    title: title,
    description: description,
    url: `${MAIN_URL}`,
    type: "website",
    images: [{ url: `${MAIN_URL}/med2mark.png`, alt: title }],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${MAIN_URL}/med2mark.png`],
  },
  authors: { name: author },
  creator: author,
  publisher: author,
  manifest: `${MAIN_URL}/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" href={`/favicon.ico`} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </head>
      <body className={cx(classes.body, CaviarDreams.className)}>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <Header />
          <div className={classes.app}>
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
