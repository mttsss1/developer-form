import { ReactNode } from "react"
import { UseForm } from "../hooks/ContextHook"
import { Header } from "./Header"
import { SideBarItem } from "./SideBarItem"

type Props = {
    children: ReactNode
}

export function Theme({ children }: Props) {

    const { state } = UseForm()

    return (
        <div id="container" className="bg-[#02044A] text-white min-h-screen">
            <div id="content" className="m-auto max-w-5xl min-h-screen flex flex-col">
                <Header />

                <div id="steps" className="flex-1 flex">
                    <div id="side-bar" className="w-63 border-r-2 border-solid border-[#16195C] ">
                        <SideBarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SideBarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SideBarItem
                            title="Redes sociais"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </div>
                    <div id="page" className="flex-1 pl-10 pr-10 pt-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}