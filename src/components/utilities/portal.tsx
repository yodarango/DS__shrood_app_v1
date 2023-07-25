import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, portalId }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    let portal = document.getElementById(portalId || "root");

    if (portal) return createPortal(children, portal);
  } else return null;
};
