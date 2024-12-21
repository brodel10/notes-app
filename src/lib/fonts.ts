import {
  Geist,
  Geist_Mono,
  Inter,
  Noto_Serif,
  Source_Code_Pro,
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--inter-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--noto-serif",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--source-code-pro",
  subsets: ["latin"],
});

export {geistSans, geistMono, interSans, notoSerif, sourceCodePro}