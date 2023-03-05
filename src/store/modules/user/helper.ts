import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://imglf6.lf127.net/img/WjBIbnVIMWRIRVJDQWZva0hodG82dlZyRGdmYURWMWVCd2g5dncxZU1KWm9XS1hpSFZsN2VnPT0.jpg?imageView&thumbnail=110x110&quality=90&type=jpg',
      name: 'Stephen An',
      description: 'ChatGPT',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
