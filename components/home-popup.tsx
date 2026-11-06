"use client";

import { useEffect, useState } from "react";
import Popup from "@/components/popup";
import EnquiryForm from "@/components/enquiry";

export default function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("felixaEloraPopupShown");

    if (!hasSeenPopup) {
      // Small delay so the homepage loads first
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("felixaEloraPopupShown", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
     <Popup
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Enquiry form"
            download={false}
          />
  );
}
