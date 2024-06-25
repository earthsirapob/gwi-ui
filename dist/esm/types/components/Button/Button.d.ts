import React, { FC } from 'react';
import { ButtonProps } from '@mui/material/Button';
interface MyButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
