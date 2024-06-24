import React, { ReactNode } from 'react';
interface MyCardProps {
    children: ReactNode;
    actions?: ReactNode;
}
declare const Card: React.FC<MyCardProps>;
export default Card;
