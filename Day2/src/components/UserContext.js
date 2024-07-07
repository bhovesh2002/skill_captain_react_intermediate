import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const ChangeUserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

export function useChangeUser(){
    return useContext(ChangeUserContext);
}

function UserProvider({ children }){

    const user1 = { name: 'Jane Smith', email: 'jane@example.com' };
    const user2 = { name: 'John Doe', email: 'John@example.com' };

    const [user, setUser] = useState(user1);

    function changeUser(){
        if(user.name === user1.name){
            setUser(user2);
        }else{
            setUser(user1);
        }
    }

    return(
        <UserContext.Provider value={user}>
            <ChangeUserContext.Provider value={changeUser}>
                { children }
            </ChangeUserContext.Provider>
        </UserContext.Provider>
    )

}

// export default UserContext;
export default UserProvider;