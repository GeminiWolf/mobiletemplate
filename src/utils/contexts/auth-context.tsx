import { createContext } from "react";

export const AuthContext = createContext({ 
    signin: (callback: () => void) => callback(), 
    user: null,
    signOut: (callback: () => void) => callback(),
    updateProfile: (_accountInfo: any, callback: () => void) => callback()
});

export default AuthContext;