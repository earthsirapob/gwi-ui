import { FC, ReactNode } from 'react';
interface MyCardProps {
    children: ReactNode;
    actions?: ReactNode;
}
declare const MyCard: FC<MyCardProps>;
export default MyCard;
