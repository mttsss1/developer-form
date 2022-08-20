type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export function SelectOption({ title, description, icon, selected, onClick }: Props) {
    return (
        <div id="container" onClick={onClick} style={{ border: `2px solid ${selected ? '#25CD89' : '#16195C'}` }} className={`flex border-2 border-solid rounded-xl p-5 mb-4 items-center cursor-pointer hover:border-[#496459]`}>
            <div id="icon" className="w-16 h-16 rounded-full bg-[#191A59] flex justify-center items-center text-2xl">{icon}</div>
            <div id="info" className="flex-1 ml-5">
                <div id="title" className="text-lg font-bold mb-2">{title}</div>
                <div id="description" className="text-sm text-[#B8B8D4]">{description}</div>
            </div>
        </div>
    )
}