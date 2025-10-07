import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
