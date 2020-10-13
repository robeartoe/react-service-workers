import React from 'react'
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';

interface Props {
    tabValue: number;
    onChange: (event: React.ChangeEvent<{}>, value: any) => void;
}

function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function TabController(props: Props) {
    const {tabValue, onChange} = props;
    return (
        <Tabs value={tabValue} onChange={onChange} aria-label="simple tabs example">
          <Tab label="Default Implementation" {...a11yProps(0)} />
          <Tab label="Service Workers" {...a11yProps(1)} />
        </Tabs>
    )
}
