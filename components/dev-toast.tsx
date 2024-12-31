"use client";
import { useEffect } from "react";
import { toast } from "sonner";

const DevelopmentToast = () => {
  useEffect(() => {
    toast("Event has been created.");
  }, []); // Empty dependency array means this runs once on mount

  return null;
};

export default DevelopmentToast;
