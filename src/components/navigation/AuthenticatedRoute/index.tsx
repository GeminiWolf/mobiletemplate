import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../utils/contexts";

type AuthProps = {
    children: React.ReactElement
}

const AuthenticatedRoute: React.FC<AuthProps> = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}

export default AuthenticatedRoute
