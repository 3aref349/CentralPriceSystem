import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExportExcel from './ReportNewOne'
import ExportExceltwo  from './ReportNewTwo'
import styled from 'styled-components'


const Wrapper = styled.section`
 display:flex;
 justify-content: center;




`;
const Titlediv = styled.div`

display flex;
justify-content: center;


`;
const Title = styled.h1`
color:Black;



`;



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
 backgroundColor: theme.palette.background.paper,
    width: 1300,
  
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Wrapper>

<div className="dashboard">

  <Titlediv>
    <Title>
      <h1>Reports</h1>
    </Title>
  </Titlediv>
<div
  className={classes.root}
 >

  
     
<AppBar
 position="static" 
 color="default">
<Tabs
  value={value}
  onChange={handleChange}
  indicatorColor="primary"
  textColor="primary"
  variant="fullWidth"
  aria-label="full width tabs example"
>
  <Tab label="Station Log Report" {...a11yProps(0)} />
  <Tab label="Price Event Report" {...a11yProps(1)} />
 
</Tabs>
</AppBar>


<SwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={value}
onChangeIndex={handleChangeIndex}
>
<TabPanel value={value} index={0} dir={theme.direction}>
  <ExportExcel />
</TabPanel>
<TabPanel value={value} index={1} dir={theme.direction}>
 <ExportExceltwo />
</TabPanel>

</SwipeableViews>

</div>
</div>
    
    </Wrapper>
  );
}
