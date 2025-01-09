import {atom} from 'nanostores';

export const $themeColor=atom<string>("#3e1d26");
export const $accentColor=atom<string>("#b19f49");
export const $textColor=atom<string>("#b9b9b9");
export const $headingColor=atom<string>("#e2e2e2");

export function setThemeColor(color:string){
    $themeColor.set(color);
}

export function setAccentColor(color:string){
    $accentColor.set(color);
}

export function setTextColor(color:string){
    $textColor.set(color);
}

export function setHeadingColor(color:string){
    $headingColor.set(color);
}