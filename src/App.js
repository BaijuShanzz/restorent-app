import Header from "./Components/Header/Header";
import Welcome from "./Components/Pages/Welcome/Welcome";
import Footer from "./Components/Footer/Footer";
import Partner from "./Components/Pages/Partner/Partner";
import Booking from "./Components/Pages/Booking/Booking";
import Dishes from "./Components/Pages/Dishes/Dishes";
import Ambience from "./Components/Pages/Ambience/Ambience";
function App() {
  return (
    <>
      <Header/>
      <Welcome/>
      <Partner/>
      <Booking />
      <Dishes />
      <Ambience />
      <Footer />
    </>
  );
}

export default App;
