export function getDisplayNumber(departement) {
  if (departement.name === "la Corse-du-Sud") return "2A";
  if (departement.name === "la Haute-Corse") return "2B";
  return String(departement.number).padStart(2, "0");
}
