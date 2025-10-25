import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TastedPage from "./pages/TastedPage";
import TastedPrivacyPage from "./pages/TastedPrivacyPage";
import TastedTosPage from "./pages/TastedTosPage";
import JogatinaPage from "./pages/JogatinaPage";
import JogatinaPrivacyPage from "./pages/JogatinaPrivacyPage";
import JogatinaTosPage from "./pages/JogatinaTosPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/tasted" element={<TastedPage />} />
          <Route path="/projects/tasted/privacy" element={<TastedPrivacyPage />} />
          <Route path="/projects/tasted/tos" element={<TastedTosPage />} />
          <Route path="/projects/jogatina" element={<JogatinaPage />} />
          <Route path="/projects/jogatina/privacy" element={<JogatinaPrivacyPage />} />
          <Route path="/projects/jogatina/tos" element={<JogatinaTosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
