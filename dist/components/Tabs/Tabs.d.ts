import React from 'react';
interface MyTabsProps {
    tabs: {
        label: string;
        content: React.ReactNode;
    }[];
    initialTab?: number;
}
declare const MyTabs: React.FC<MyTabsProps>;
export default MyTabs;
