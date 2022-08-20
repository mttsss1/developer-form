import { useNavigate } from "react-router-dom";
import { Theme } from "../components/Theme";
import { UseForm } from "../hooks/ContextHook";
import { FormActions } from "../context/FormContext";
import { ChangeEvent, useEffect } from "react";

export function FormStep1() {

    const navigate = useNavigate()

    const { state, dispatch } = UseForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2')
        }
        else {
            alert("Preencha os dados.")
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <div id="container">
                <p className="text-sm text-[#B8B8D4]">Passo 1/3</p>
                <h1 className="m-0 p-0 text-2xl font-bold">Vamos começar com seu nome</h1>
                <p className="text-sm text-[#B8B8D4]">Preencha o campo abaixo com seu nome completo.</p>

                <hr className="h-px border-0 bg-[#16195C] m-marginOne" />

                <label className="text-sm">
                    Seu nome completo
                    <input className="block mt-1 box-border w-full p-paddingOne border-2 border-solid border-[#25CD89] rounded-xl text-white outline-0 text-sm bg-[#02044A]" type="text" autoFocus value={state.name} onChange={handleNameChange} />
                </label>

                <button className="bg-[#25CD89] text-white text-sm font-bold p-paddingTwo border-0 rounded-3xl cursor-pointer mt-7" onClick={handleNextStep}>Próximo</button>
            </div>
        </Theme>
    )
}