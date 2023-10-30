import { useState } from "react"
import { createContext } from "react"

export const UserContext = createContext()


export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const login = user => {
        setUser(user)
        setIsLogin(true)
    }
    const logout = () => {
        setUser('')
        setIsLogin(false)
    }
    const contextValue = {
        user,
        isLogin,
        login,
        logout,
    }





    return <UserContext.Provider value={contextValue}> {children}</UserContext.Provider>


}