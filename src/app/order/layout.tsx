import {MainTemplate} from "@/components/template/MainTemplate";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<MainTemplate>
    {children}
  </MainTemplate>);
}
