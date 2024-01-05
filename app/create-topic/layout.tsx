import { Navbar, Footer } from "@/components/shared";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen">
            <Navbar />
            <main className="py-48">{children}</main>
            <Footer />
        </div>
    );
}
