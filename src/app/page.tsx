import Contact from "./partials/Contact";
import Hero from "./partials/Hero";
import Navbar from "./partials/Navbar";
import RecentProject from "./partials/RecentProject";

export default function Home() {
  return(
    <div>
      <Navbar />
      <Hero id="about-me" /> 
      <RecentProject id="projects" />
      <Contact id="contact-me" />
    </div>
  )
}