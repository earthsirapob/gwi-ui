import React from 'react'
import { Tabs, Tab } from '@mui/material'

interface MyTabsProps {
  tabs: { label: string; content: React.ReactNode }[]
  initialTab?: number
}

const MyTabs: React.FC<MyTabsProps> = ({ tabs, initialTab = 0 }) => {
  const [selectedTab, setSelectedTab] = React.useState(initialTab)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue)
  }

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <div>{tabs[selectedTab].content}</div>
    </>
  )
}

export default MyTabs
