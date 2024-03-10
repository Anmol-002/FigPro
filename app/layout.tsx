import { Work_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";
import Script from "next/script";
import Temp from "./Temp";

export const metadata = {
  title: "FigPro",
  description: "A place for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <Temp />
       <link rel='icon' href='/favicon.ico' />
    </head>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
