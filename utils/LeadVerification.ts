export const LEAD_STORAGE_KEY = "download_lead_verified";

export const isLeadValid = () => {
  if (typeof window === "undefined") return false;

  const saved = localStorage.getItem(LEAD_STORAGE_KEY);

  if (!saved) return false;

  const timestamp = Number(saved);

  return Date.now() - timestamp < 24 * 60 * 60 * 1000;
};

export const saveLeadVerification = () => {
  if (typeof window === "undefined") return;

  localStorage.setItem(LEAD_STORAGE_KEY, Date.now().toString());
};
