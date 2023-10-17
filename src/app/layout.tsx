import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "./globals.css";
import "./antd.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Providers from "@/redux/provider";
import { ConfigProvider } from "antd";
import theme from "@/config/theme/themeConfig";
import { SWRProvider } from "./swr-provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: {
    template: "%s | ClickToEarn",
    default: "ClickToEarn",
  },
  description: "Click To Earn website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.variable} ${inter.variable} font-roboto`}>
        <SWRProvider>
          <Providers>
            <StyledComponentsRegistry>
              <ConfigProvider theme={theme}>{children}</ConfigProvider>
            </StyledComponentsRegistry>
          </Providers>
        </SWRProvider>
      </body>
    </html>
  );
}
