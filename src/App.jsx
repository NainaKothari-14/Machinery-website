import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsapp from "./components/layout/FloatingWhatsapp";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import { WebsiteProvider } from "./context/WebsiteContext";
import "./assets/styles/animations.css";

function App() {
  return (
    <HelmetProvider>
      <WebsiteProvider>
        <TopBar />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <FloatingWhatsapp />
        <ScrollToTop />
        <Toaster position="top-center" />
      </WebsiteProvider>
    </HelmetProvider>
  );
}

export default App;
