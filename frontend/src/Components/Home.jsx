
import ChatLauncher from "./pages/ChatLauncher/ChatLauncher";
import Hero from "./pages/Hero";
import HomeAbout from "./pages/HomeAbout";
import HomeProducts from "./pages/HomeProduct";

export default function Home(){
    
    return(
        <div>
     <Hero />
     <HomeAbout/>
    <HomeProducts/>
    <ChatLauncher/>
        </div>
    )
}