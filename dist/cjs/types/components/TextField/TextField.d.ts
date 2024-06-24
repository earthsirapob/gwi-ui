import React, { FC } from 'react';
interface MyTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
}
declare const MyTextField: FC<MyTextFieldProps>;
export default MyTextField;
