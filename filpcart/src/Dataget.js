import React, { createContext, useState } from 'react'
export const datacontext = createContext("")
export const Dataget = ({ children }) => {
    const [cart, setcart] = useState("")
  
    return (
        <div>
            <datacontext.Provider value={{ setcart, cart }}>{children}</datacontext.Provider>
        </div>
    )
}
