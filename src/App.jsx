import {
  Memberships,
  Hero,
  Navbar,
  GymClasses,
  PopularTopics,
  WhyJoin,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <CarouselSection /> */}
      <Memberships />
      <GymClasses />
      <PopularTopics />
      <WhyJoin />
      <Footer />
    </div>
  );
};

export default App;
