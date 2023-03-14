import { useState, useContext } from "react";
import { UserContext } from '../context/UserContext'
import { LanguageContext } from '../context/LanguageContext';

export default function Form(){
    const [name, setName] = useState("");
    const { setUsername } = useContext(UserContext);
    const { language } = useContext(LanguageContext);

    const dictionary = {
        'en': ["Username", "Login"],
        'vi': ["Tên", "Đăng nhập"],
        'korea': ["이름", "로그인"]
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (name){
            setUsername(name)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome to Login Form</h1>
            <label htmlFor="username" style={{margin:0 , color:"white"}}>{dictionary[language][0]}: </label>
            <input value={name} onChange={e => setName(e.target.value)} name="username" id="username" style={{margin:5}}/>
            {/* <button type="submit">{dictionary[language][1]}</button> */}
            <button>
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                    </svg>
                    </div>
                </div>
                <span>{dictionary[language][1]}</span>
                
        </button>
        </form>
    );
}