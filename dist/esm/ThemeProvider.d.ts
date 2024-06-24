import { FC, ReactNode } from 'react';
import { ThemeOptions } from '@mui/material/styles';
interface ThemeProviderProps {
    themeOptions: ThemeOptions;
    children: ReactNode;
}
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
