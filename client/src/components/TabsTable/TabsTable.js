import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '../Card';
import { StyledDiv } from './styles';
import EpisodeCard from '../EpisodeCard';
import LocationCard from '../LocationCard';

function TabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Characters" {...a11yProps(0)} />
          <Tab label="Episodes" {...a11yProps(1)} />
          <Tab label="Locations" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel  sx={{ display: 'flex', justifyContent: 'center' }} value={value} index={0}>
        <StyledDiv>
            {props.characters && props.characters.map(char => <Card char={char}/>)}
        </StyledDiv>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <StyledDiv>
            {props.characters && props.episodes.map(episode => <EpisodeCard episode={episode}/>)}
        </StyledDiv>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <StyledDiv>
            {props.characters && props.locations.map(location => <LocationCard location={location}/>)}
        </StyledDiv>
      </TabPanel>
    </Box>
  );
}