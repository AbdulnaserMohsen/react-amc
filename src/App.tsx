
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* These routes are placeholders - would be implemented in future iterations */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/products" element={<NotFound />} />
          <Route path="/products/individual" element={<NotFound />} />
          <Route path="/products/mses" element={<NotFound />} />
          <Route path="/products/calculator" element={<NotFound />} />
          <Route path="/digital" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/branches" element={<NotFound />} />
          {/* Catch all unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
