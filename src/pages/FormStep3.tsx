import { Link, useNavigate } from "react-router-dom";
import { Theme } from "../components/Theme";
import { UseForm } from "../hooks/ContextHook";
import { FormActions } from "../context/FormContext";
import { ChangeEvent, useEffect } from "react";

export function FormStep3() {

    const navigate = useNavigate()

    const { state, dispatch } = UseForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state)
        }
        else {
            alert("Preencha os dados.")
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <div id="container">
                <p className="text-sm text-[#B8B8D4]">Passo 3/3</p>
                <h1 className="m-0 p-0 text-2xl font-bold">Legal {state.name}, onde te achamos?</h1>
                <p className="text-sm text-[#B8B8D4]">Preencha com suas redes para conseguirmos entrar em contato.</p>

                <hr className="h-px border-0 bg-[#16195C] m-marginOne" />

                <label className="text-sm block mb-5">
                    Qual é o seu e-mail?
                    <input className="block mt-1 box-border w-full p-paddingOne border-2 border-solid border-[#25CD89] rounded-xl text-white outline-0 text-sm bg-[#02044A]" type="email" value={state.email} onChange={handleEmailChange} />
                </label>

                <label className="text-sm block mb-5">
                    Qual é o seu Github?
                    <input className="block mt-1 box-border w-full p-paddingOne border-2 border-solid border-[#25CD89] rounded-xl text-white outline-0 text-sm bg-[#02044A]" type="url" value={state.github} onChange={handleGithubChange} />
                </label>

                <Link to="/step2" className="text-sm p-paddingTwo text-[#B8B8D4]">Voltar</Link>
                <button className="bg-[#25CD89] text-white text-sm font-bold p-paddingTwo border-0 rounded-3xl cursor-pointer mt-7" onClick={handleNextStep}>Finalizar cadastro</button>
            </div>
        </Theme>
    )
}