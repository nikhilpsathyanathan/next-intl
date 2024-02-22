import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["en", "nl"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  type Messages = typeof import("../messages/en.json");

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
