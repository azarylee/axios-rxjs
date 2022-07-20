import { createContext, useContext } from "react";
// import { LanguageService } from "../service/ModalService";

// export const Language = LanguageService.getInstance();
export const LanguageContext = createContext({
    language: 'en',
});

export type LanguageContextProps = {
    language: string
}

export function useLanguage() {
    return useContext(LanguageContext);
}