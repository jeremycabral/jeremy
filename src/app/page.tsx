import { Footer } from "./components/Footer";
import { HomeClient } from "./components/HomeClient";
import { Navigation } from "./components/Navigation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />
      <HomeClient />
      <Footer />
    </div>
  );
}
