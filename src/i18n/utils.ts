import {en} from './en'
import {es} from './es'
import {config} from "../consts";

const ui = {
  es, en
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)
