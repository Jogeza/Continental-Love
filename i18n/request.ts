import {headers} from "next/headers";
import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-continental-locale") === "it" ? "it" : "en";
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {locale, messages};
});
