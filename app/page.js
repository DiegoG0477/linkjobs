import "./globals.css";
import Login from "../components/Login";
import Img from "next/image";
import image from "@/public/assets/imagen-login.jpg"
function HomeLoginPage() {
  return (
    <div className="login__container">
      <div className="parte1">
        <Login />
      </div>
        <Img src={image} alt="imagen-login" className="imagen"/>
     
    </div>
  );
}

export default HomeLoginPage;
