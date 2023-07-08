import { createContext } from "react";

const UserContext = createContext({
    userInfo: {
        userName : 'kannan',
        email : 'kannan@gmail.com',
    }
})

export default UserContext