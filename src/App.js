import Header from "./Components/Header/Header";
import Welcome from "./Components/Pages/Welcome/Welcome";
import Footer from "./Components/Footer/Footer";
import Partner from "./Components/Pages/Partner/Partner";
import Booking from "./Components/Pages/Booking/Booking";
import Dishes from "./Components/Pages/Dishes/Dishes";
function App() {
  return (
    <>
      <Header/>
      <Welcome/>
      <Partner/>
      <Booking />
      <Dishes />
      <Footer />
    </>
  );
}

export default App;
