import React from "react"
import { UserAuthContext } from "../store/UserAtuh"


export const useAuth = () => React.useContext(UserAuthContext);