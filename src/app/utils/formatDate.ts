export function formatDate(date: string, includeRelative = false, locale: "en" | "pt" = "en") {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  const pt = locale === "pt";

  if (yearsAgo > 0) {
    formattedDate = pt ? `há ${yearsAgo} ano${yearsAgo > 1 ? "s" : ""}` : `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = pt ? `há ${monthsAgo} ${monthsAgo > 1 ? "meses" : "mês"}` : `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = pt ? `há ${daysAgo} dia${daysAgo > 1 ? "s" : ""}` : `${daysAgo}d ago`;
  } else {
    formattedDate = pt ? "Hoje" : "Today";
  }

  const fullDate = targetDate.toLocaleString(pt ? "pt-BR" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
