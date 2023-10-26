import Nav from "@/components/Nav";
import '../globals.css';
import Footer from "@/components/Footer";
function jobsLayout({ children }) {
  return (<div>
    <Nav/>
    {children}
    <Footer/>
    </div>);
}

export default jobsLayout;
