import React from "react";
import { useMoralis } from "react-moralis";
import useLocalStorage from "../../hooks/use-local-storage";
import { AuthContext } from "../contexts";

type AuthProviderProps = {
    children: React.ReactElement
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", '');
  const { authenticate, logout, setUserData } = useMoralis();

  console.log(user)
  return (
    <AuthContext.Provider
      value={{
        user,
        signin: async (callback: () => void) => {
          if (!user) {
            await authenticate()
              .then(function (authedUser: any ) {
                setUser(authedUser)
                callback()
                console.log(authedUser?.get("ethAddress"));
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        },
        signOut: (callback) => {
          logout();
          setUser();
          callback();
        },
        updateProfile: async (updateInfo: any, callback) => {
          try {
            await setUserData(updateInfo)
            callback();
          } catch (erro) {
            console.log('failed updating profile information..')
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
