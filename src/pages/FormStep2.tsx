import { useNavigate } from "react-router-dom";
import { Theme } from "../components/Theme";
import { UseForm } from "../hooks/ContextHook";
import { FormActions } from "../context/FormContext";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../components/SelectOption";
import { Link } from "react-router-dom";

export function FormStep2() {

    const navigate = useNavigate()

    const { state, dispatch } = UseForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3')
        }
        else {
            alert("Preencha os dados.")
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <div id="container">
                <p className="text-sm text-[#B8B8D4]">Passo 2/3</p>
                <h1 className="m-0 p-0 text-2xl font-bold">{state.name}, o que melhor descreve você?</h1>
                <p className="text-sm text-[#B8B8D4]">Escolha a opção que melhor condiz com seu estado atual, profissionalmente .</p>

                <hr className="h-px border-0 bg-[#16195C] m-marginOne" />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="text-sm p-paddingTwo text-[#B8B8D4]">Voltar</Link>
                <button className="bg-[#25CD89] text-white text-sm font-bold p-paddingTwo border-0 rounded-3xl cursor-pointer mt-7" onClick={handleNextStep}>Próximo</button>
            </div>
        </Theme>
    )
}