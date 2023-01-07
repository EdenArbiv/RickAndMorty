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
import LoadingBtn from '../LoadingBtn';

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
    switch (newValue) {
        case 0 || '0':
            props.setTab('character')
            break;
        case 1 || '1':
            props.setTab('episode')
            break;
        case 2 || '2':
            props.setTab('location')
            break;
        default:
            props.setTab('character')
        break;
    }
  };

  const resetData = () => {
    props.setPage(1)
    props.setGetData(false)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Characters" {...a11yProps(0)} onClick={() => resetData()} />
          <Tab label="Episodes" {...a11yProps(1)} onClick={() => resetData()} />
          <Tab label="Locations" {...a11yProps(2)} onClick={() => resetData()} />
        </Tabs>
      </Box>
      <TabPanel sx={{ display: 'flex', justifyContent: 'center' }} value={value} index={0}>
        <StyledDiv>
            {props.characters && props.characters.map(char => <Card char={char}/>)}
        </StyledDiv>
        {props.characters.length ? <LoadingBtn loading={props.loading} onClick={() => props.LoadMore()}/> : <StyledDiv>There is nothing here</StyledDiv>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <StyledDiv>
            {props.characters && props.episodes.map(episode => <EpisodeCard episode={episode}/>)}
        </StyledDiv>
        {props.episodes.length ? <LoadingBtn loading={props.loading} onClick={() => props.LoadMore()}/> : <StyledDiv>There is nothing here</StyledDiv>}
      </TabPanel>
      <TabPanel value={value} index={2}>
      <StyledDiv>
            {props.characters && props.locations.map(location => <LocationCard location={location}/>)}
        </StyledDiv>
        {props.locations.length ? <LoadingBtn loading={props.loading} onClick={() => props.LoadMore()}/> : <StyledDiv>There is nothing here</StyledDiv>}
      </TabPanel>
    </Box>
  );
}