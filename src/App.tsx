import AppBar from '@material-ui/core/AppBar/AppBar';
import Box from '@material-ui/core/Box/Box';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import DefaultTab from './containers/default';
import ServiceWorkerTab from './containers/service-worker';
import TabController from './components/tabs';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <TabController tabValue={tabValue} onChange={handleChange} />
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <DefaultTab />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <ServiceWorkerTab />
      </TabPanel>
    </div>
  );
}

export default App;
