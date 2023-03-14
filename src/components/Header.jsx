import { UserContext } from "../context/UserContext";
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from "react";

export default function Header(){
    const {username, setUsername} = useContext(UserContext);
    const { language } = useContext(LanguageContext);

    const dictionary = {
        'vi': ["Đăng nhập", "Đăng xuất"],
        'en': ["Login", "Logout"],
        'korea': ["로그인", "로그 아웃"]
    }

    return (
        <div className="header_container">
            <div className="header_logo">MindX</div>
            <div className="header_text" style={{color:"white"}} onClick={username ? ()=>{setUsername("")} : ()=>{}}>{username ? dictionary[language][1] : dictionary[language][0]}</div>
        </div>
    );
}