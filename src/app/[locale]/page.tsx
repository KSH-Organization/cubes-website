import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Objectives from "./components/home/Objectives";
import ProjectManagement from "./components/home/ProjectManagement";
import RealEstate from "./components/home/RealEstate";
import Services from "./components/home/Services";
import WhoWeAre from "./components/home/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Objectives />
      <Services />
      <ProjectManagement />
      <RealEstate />
    </>
  );
}
