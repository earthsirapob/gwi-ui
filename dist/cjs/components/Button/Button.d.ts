import React, { FC } from 'react';
interface MyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: any;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
