import { Link } from "react-router-dom";
import { ReactComponent as ProfileIcon } from '../assets/profile.svg'
import { ReactComponent as BookIcon } from '../assets/book.svg'
import { ReactComponent as MailIcon } from '../assets/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export function SideBarItem({ title, description, icon, path, active }: Props) {
    return (
        <div id="container" className="m-marginOne cursor-pointer">
            <Link to={path} className="flex items-center">
                <div id="info" className="flex-1 mr-5">
                    <p id="title" className="text-right font-bold mb-1.5 text-sm text-white">{title}</p>
                    <p id="description" className="text-right text-sm text-[#B8B8D4]">{description}</p>
                </div>
                <div id="icon-area" style={{ backgroundColor: `${active ? '#25CD89' : '#494A7C'}` }} className="w-12 h-12 rounded-full bg-[#494A7C] flex justify-center items-center">
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </div>
                <div id="point" style={{ backgroundColor: `${active ? '#25CD89' : '#02044A'}` }} className="w-3 h-3 border-2 border-solid border-[#494A7C] ml-7 -mr-1.5 bg-[#02044A] rounded-full"></div>
            </Link>
        </div>
    )
}