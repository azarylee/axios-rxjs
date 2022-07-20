import { BehaviorSubject, Subscription } from "rxjs";
// import { ObjectProps } from "../types";

export type Action = () => void;
const initialState = {
    language: 'en',
};
export type LanguageStateProps = typeof initialState;

export class LanguageService {
    private static instance: LanguageService;

    private callback = new BehaviorSubject<null>(null);

    private disposables: Record<string, Subscription | undefined> = {};

    static getInstance() {
        if (!this.instance) {
            this.instance = new LanguageService();
        }

        return this.instance;
    }

    private languageState = {
        language: 'en'
    };

    get getLanguageState(): LanguageStateProps {
        return this.languageState;
    }

    // set setModalState(value: ObjectProps<string | boolean>) {
    //     this.modalState = Object.assign(this.modalState, value);
    //     this.callback.next(null);
    // }

    subscribeStatus(key: string, cb: Action) {
        this.disposables[key] = this.callback.subscribe(cb);
    }
}