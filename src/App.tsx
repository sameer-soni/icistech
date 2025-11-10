import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import Gallery from "./pages/Gallery";
import PublishedWorks from "./pages/PublishedWorks";
import Sponsors from "./pages/Sponsors";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import AmityUniversity from "./pages/AmityUniversity";
import IcisTech from "./pages/IcisTech";
import NotFound from "./pages/NotFound";
import CallForPoster from "./pages/CallForPoster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/committee" element={<OrganizingCommittee />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/call-for-poster" element={<CallForPoster />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/published-works" element={<PublishedWorks />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/amity-university" element={<AmityUniversity />} />
          <Route path="/icistech" element={<IcisTech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
