import Navbar from "../home/_components/Navbar";
import BottomNav from "../home/_components/MobileBottomNav";

type Props = {
  children: React.ReactNode;
};

export default async function Page({ children }: Props) {
  return (
    <>
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <main className={`-mt-[75px] px-0 w-full mx-auto`}>{children}</main>
      <BottomNav />
    </>
  );
}
