// Import the CSS module
import styles from "../home/page.module.css";
import Navbar from "../home/_components/Navbar";
import BottomNav from "../home/_components/MobileBottomNav";

type Props = {
  children: React.ReactNode;
};

export default async function Page({ children }: Props) {
  return (
    <>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <main className={`${styles.mainView} -mt-[75px] px-0 w-full mx-auto`}>
        {children}
      </main>
      <BottomNav />
    </>
  );
}
