"use client"

import Script from "next/script"

const ThemeScript = () => {
  return (

    
    <Script id="script" strategy="AfterInteractive" >
          {`
            if (
              localStorage.theme === 'dark' || 
              (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          `}
        </Script>
  )
}

export default ThemeScript