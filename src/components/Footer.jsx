import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export default function Footer(){
    const { setLanguage } = useContext(LanguageContext);

    return (
        <div className="footer_container">
            <select name="language" id="language" onChange={e=>setLanguage(e.target.value)} style={{borderRadius:5, padding:2}}>
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
                <option value="korea">한국인</option>
            </select>
        </div>
    );
}