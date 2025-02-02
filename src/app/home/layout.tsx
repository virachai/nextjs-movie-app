// Import the CSS module
import styles from "./page.module.css"; // Adjust the path if necessary
import Navbar from "./_components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default async function Page({ children }: Props) {
  return (
    <>
      <Navbar />
      <main
        className={`${styles.mainView} -mt-[75px] px-0 w-full mx-auto`}
      >
        {children}
      </main>
    </>
  );
}
