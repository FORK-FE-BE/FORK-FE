import {createContext, useContext, useState} from "react";


const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null); // null이면 로그인 안 된 상태

    const loginUser = (userData) =>{
        setUser(userData);
    };

    const logoutUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}

// 전역에서 쓰기 위한 훅
export const useUser = () => useContext(UserContext);