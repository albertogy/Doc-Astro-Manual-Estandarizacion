import {en, es} from './en'
import {zhCn} from './zhCn'
import {config} from "../consts";

const ui = {
  es, en, 'zh-cn':zhCn
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)
