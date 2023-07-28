import { useContext } from "react";
import NavigationContext from "../contexts/navigation.context";

function useNavigation() {
    return useContext(NavigationContext);
};

export default useNavigation;