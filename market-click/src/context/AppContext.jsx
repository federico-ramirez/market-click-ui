import React, { useState, useMemo, useCallback } from "react";

const AppContext = React.createContext();
const TOKEN_KEY = "token";
const USER_ROLE = "role";

export const AppProvider = (props) => {
    const [token, setToken] = useState();
    const [roleName, setRoleName] = useState([]);

    const setTokenAll = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        setToken(token);
    }

    const setRoleAll = (roles) => {
        localStorage.setItem(USER_ROLE, JSON.stringify(roles));
        setRoleName(roles);
    }

    const login = useCallback((email, password) => {
        const loginAsync = async () => {
            let status = false;
            try {
                let response = await loginFecth(email, password);

                if (response && response.token) {
                    setTokenAll(response.token);
                    setRoleAll(response.roleName);
                    status = true;
                }
            } catch (error) {
                console.error(error);
            } finally {
                return status;
            }
        };
        return loginAsync();
    }, [token, roleName])

    const logout = useCallback(() => {
        setRoleName(undefined);
        localStorage.removeItem(USER_ROLE)
        setTokenAll(undefined);
        localStorage.removeItem(TOKEN_KEY)
    }, [])

    const value = useMemo(() => ({
        token: token,
        roleName: roleName,
        login: login,
        logout: logout
    }), [token, roleName, login, logout]);

    return <AppContext.Provider value={value} {...props} />;
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error("must be inside of Provider");
    }

    return context;
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRoleNames = () => localStorage.getItem(USER_ROLE);