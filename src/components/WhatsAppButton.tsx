import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappNumber = "2347060535490";
  const message = encodeURIComponent("Hi, I'd like to know more about your coaching services.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
      aria-label="Contact on WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-[#25D366]"></span>
      </span>
    </a>
  );
};
