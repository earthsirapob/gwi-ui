import React from 'react';
interface MyButtonProps {
    text: string;
    onClick: () => void;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
