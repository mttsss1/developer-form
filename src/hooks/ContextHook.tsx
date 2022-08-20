import { useContext } from "react";
import { FormContext } from "../context/FormContext";

//Hook.

export function UseForm() {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('UseForm precisa ser usado dentro do FormProvider')
    }
    return context
}