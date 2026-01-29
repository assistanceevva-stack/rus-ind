import ChatWidget from "./ChatWidget";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Equipment from "./pages/Equipment";
import HonestMark from "./pages/HonestMark";
import MarkingStations from "./pages/MarkingStations";
import WeightLines from "./pages/WeightLines";
import MesWmsIntegration from "./pages/MesWmsIntegration";
import PackagingLines from "./pages/PackagingLines";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PersonalDataConsent from "./pages/PersonalDataConsent";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import OfflineHandler from "./components/OfflineHandler";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <OfflineHandler />
          <CookieConsent />
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/honest-mark" element={<HonestMark />} />
            <Route path="/equipment/marking-stations" element={<MarkingStations />} />
            <Route path="/equipment/weight-lines" element={<WeightLines />} />
            <Route path="/equipment/mes-wms-integration" element={<MesWmsIntegration />} />
            <Route path="/equipment/packaging-lines" element={<PackagingLines />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/personal-data-consent" element={<PersonalDataConsent />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
