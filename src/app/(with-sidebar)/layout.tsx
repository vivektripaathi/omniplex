import Sidebar from "@/components/Sidebar/Sidebar";
import { Providers } from "../providers";

export default function WithSidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <Sidebar />
            {children}
        </Providers>
    );
}
