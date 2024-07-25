import { i18n } from "@lingui/core"

export enum LOCALES {
  en = "English",
  pt = "Português",
  es = "Español"
}

export async function dynamicLoadMessages(locale: keyof typeof LOCALES) {
  const catalog = await import(`./locales/${locale}.po`)
  i18n.loadAndActivate({ locale, messages: catalog.messages })
}