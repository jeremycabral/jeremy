import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { ApplyForm } from "../../components/ApplyForm";

export default function ApplyServicePage({
  params,
}: {
  params: { service?: string };
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <ApplyForm service={params.service} />
      <Footer />
    </div>
  );
}
