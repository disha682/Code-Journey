import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Greetings */}
      <Greeting name="Priya" topic="React Components" />
      <Greeting name="Rohan" topic="JSX & Props" />

      {/* Profile Cards */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <ProfileCard
          name="Arjun Kumar"
          role="Frontend Developer"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <ProfileCard
          name="Sneha Verma"
          role="UI/UX Designer"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
