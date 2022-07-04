import { useState,ReactNode, createContext} from 'react';

export const ThemeContext = createContext(null as any);
interface Props {
    children?: ReactNode
    // any props that come into the component
}
const ThemeProvider = ({ children, ...props }:Props) => {
    const [theme, setTheme] = useState('dark');
    const providerValue = {
        theme,
        setTheme,
    };
    return(
        <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider;
