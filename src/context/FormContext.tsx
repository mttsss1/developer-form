import { createContext, ReactNode, useReducer } from 'react'

type StateProps = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

type ActionProps = {
    type: FormActions;
    payload: any;
}

type ContextTypeProps = {
    state: StateProps;
    dispatch: (action: ActionProps) => void;
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: StateProps = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

//Context.

export const FormContext = createContext<ContextTypeProps | undefined>(undefined);

//Reducer.

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
}
const FormReducer = (state: StateProps, action: ActionProps) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }
        case FormActions.setName:
            return { ...state, name: action.payload }
        case FormActions.setLevel:
            return { ...state, level: action.payload }
        case FormActions.setEmail:
            return { ...state, email: action.payload }
        case FormActions.setGitHub:
            return { ...state, github: action.payload }
        default:
            return state
    }
}

//Provider.

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(FormReducer, initialData)
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}