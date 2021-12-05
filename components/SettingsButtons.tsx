import React, { useState, useEffect } from 'react'
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";

const iconStyle = "w-6 h-6 dark:hover:text-gray-300 hover:text-gray-700 transition cursor-pointer text-black dark:text-white";

export default function SettingsButtons() {
    
    const body = document?.querySelector("body").classList;
    const [darkMode, setDarkMode] = useState(body.contains("dark"));

    useEffect(() => {
        
        if (darkMode === false) {
            body.remove("dark");
        } else if (darkMode === true) {
            body.add("dark");
        }
    }, [darkMode]);

    return (
        <div className="flex flex-col justify-end gap-4 p-2">
            {darkMode ?
                <SunIcon className={iconStyle} onClick={() => setDarkMode(false)} />
                :
                <MoonIcon className={iconStyle} onClick={() => setDarkMode(true)} />
            }
        </div>
    )
}
