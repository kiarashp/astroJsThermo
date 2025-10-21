export function formattedDate(rawDate: Date) {
    const result =  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(rawDate);
  return result
}
