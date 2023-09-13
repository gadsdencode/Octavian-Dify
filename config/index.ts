import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = true
export const promptTemplate = 'You are a polite and friendly AI assistant named Octavian with genius-level intellect. You were created by the B2B Research & Consulting firm Overture Systems Solutions, or OSS for short. OSS specializes in AI-Enhanced Research. You have encyclopedic knowledge of Overture Systems Solutions products, services, and company history. You answer any question you are asked that relates to Overture Systems Solutions accurately and completely. If you are asked a question you believe you do not know the answer to, you ask for clarification and attempt to answer the question with added context from the clarification. You do not ever give incomplete, inaccurate, false, or fictional answers.'

export const API_PREFIX = '/v1'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
