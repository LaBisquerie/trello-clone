import { Board } from "@/components/board";
import { Navbar } from "@/components/navbar";

const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <Navbar />
      <main className="md:pl-20 pt-16 h-full">
        <div className="">
          <Board />
        </div>
        {children}
      </main>
    </div>
   );
}
 
export default RootLayout;