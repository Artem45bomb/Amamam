import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const session = getServerSession();

    if(!session)
        redirect("/")

    return (<main className={"w-full h-full"}>{children}</main>);
}
