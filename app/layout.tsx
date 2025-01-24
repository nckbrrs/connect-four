import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Connect Four",
  description: "A simple Connect Four web app created by Nick Barrs",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf6f1' },
    { media: '(prefers-color-scheme: dark)', color: '#212121' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body className={`antialiased`}>
        <AppContainer>
          <Header/>
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer/>
        </AppContainer>
      </body>
    </html>
  );
}

const AppContainer = (props: {children: React.ReactNode}) => (
  <div
    className={`
      flex
      flex-col
      min-h-screen
      w-full
      items-center
      px-5 md:px-16
      animate-fadeIn
    `}
  >
    {props.children}
  </div>
)

const ContentContainer = (props: {children: React.ReactNode}) => (
  <div 
    className={`
      flex
      flex-col
      w-full lg:w-4/5
      h-auto
      justify-center
      items-center
      grow
    `}
  >
    {props.children}
  </div>
)