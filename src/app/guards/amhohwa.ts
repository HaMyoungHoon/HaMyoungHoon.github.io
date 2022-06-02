import * as CryptoJS from "crypto-js";

export let getLocalStorage = (key: string): string => {
  return decrypt(localStorage.getItem(key));
};
export let setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, encrypt(value));
};
export let removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
export let getSessionStorage = (key: string): string => {
  return decrypt(sessionStorage.getItem(key));
};
export let setSessionStorage = (key: string, value: string): void => {
  sessionStorage.setItem(key, encrypt(value));
};
export let removeSessionStorage = (key: string): void => {
  sessionStorage.removeItem(key);
};

export function encrypt(data : string | null): string {
  if (data == null) {
    return "";
  }
  return CryptoJS.AES.encrypt(data, AES_KEY).toString();
}
export function decrypt(data : string | null): string {
  if (data == null) {
    return "";
  }
  return CryptoJS.AES.decrypt(data, AES_KEY).toString(CryptoJS.enc.Utf8);
}

export function isDateType(data: string): string {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  if (!data.match(regex)) {
    return new Date().toISOString().slice(0, 10);
  }

  const temp = new Date(data);
  if (!temp.getTime() && temp.getTime() != 0) {
    return new Date().toISOString().slice(0, 10);
  }

  return data;
}
export function toNumber(data: string): string {
  const regex = /\D/g;
  const regex2 = /\B(?=(\d{3})+(?!\d))/g;
  return data.replace(regex, "").replace(regex2, ",");
}

const AES_KEY = "6574852065748520"
