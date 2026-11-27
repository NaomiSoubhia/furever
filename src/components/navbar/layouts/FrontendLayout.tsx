import Footer from "@/components/home/Footer";
import Navbar from "../Navbar";

export default function FrontendLayout({ children}: { 
    children: React.ReactNode }) {
  return (
      /* Main content container centered with responsive horizontal padding */
    <>
    <Navbar/>
    <div className="mx-auto max-w-7xl w-full sm:px-6 lg:px-8" >
        {children}
        </div>
    <Footer/>
        </>
  );
}   
