import "~/styles/globals.css";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";
import localFont from "next/font/local";

const twFullConfig = resolveConfig(
	tailwindConfig as Config & typeof tailwindConfig
);

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV == "development"
			? "http://localhost:3000"
			: "https://ryanbarrs.com"
	),
	title: "Connect Four",
	description: "Connect Four by Nick Barrs",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	openGraph: {
		title: "Connect Four",
		description: "Connect Four by Nick Barrs",
		siteName: "Connect Four",
		type: "website",
		images: [
			{
				url: "/open-graph-img.png",
				width: 1200,
				height: 630,
				alt: "Preview image for Connect Four by Nick Barrs"
			}
		]
	}
};

export const viewport: Viewport = {
	themeColor: [
		{
			media: "(prefers-color-scheme: light)",
			color: twFullConfig.theme.colors["bone"]
		},
		{
			media: "(prefers-color-scheme: dark)",
			color: twFullConfig.theme.colors["black"]
		}
	]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={bodyContainerStyling}>
				<TopNav />
				{children}
			</body>
		</html>
	);
}

const bodyContainerStyling = `
	antialiased
	flex
	flex-col
	h-screen
	w-full
	items-center
	bg-bone dark:bg-black
`;
