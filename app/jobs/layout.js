import Nav from "@/components/Nav";
import '../globals.css';
function jobsLayout({ children }) {
  return <div>
    <Nav/>
    {children}
    </div>;
}

export default jobsLayout;
