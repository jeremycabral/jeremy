import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ApplyForm } from "../components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <ApplyForm service="startup" />
      <Footer />
    </div>
  );
}
