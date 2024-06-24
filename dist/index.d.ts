import React, { FC, ReactNode } from 'react';
import { ThemeOptions } from '@mui/material/styles';

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: any;
}
declare const MyButton: FC<MyButtonProps>;

interface MyCardProps {
    children: ReactNode;
    actions?: ReactNode;
}
declare const MyCard: FC<MyCardProps>;

interface MyTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
}
declare const MyTextField: FC<MyTextFieldProps>;

interface ThemeProviderProps {
    themeOptions: ThemeOptions;
    children: ReactNode;
}
declare const ThemeProvider: FC<ThemeProviderProps>;

export { MyButton as Button, MyCard as Card, MyTextField as TextField, ThemeProvider as default };
