import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { StyledDiv, Title, Wrapper } from './styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '../Card';
import { baseUrl, getRequest } from '../../services/get_api';
import LocationCard from '../LocationCard';
import EpisodeCard from '../EpisodeCard';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: 50,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'relative',
marginLeft: '15px',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    width: '20ch',
    border: '1px solid black',
    borderRadius: '7px',
    margin: 10
    },
},
}));

const SearchComp = (props) => {
    const [type, setType] = useState('character')
    const [results, setResults] = useState([])
    const [update, setUpdate] = useState(false)
    const [value, setValue] = useState('')
    const [go, setGo] = useState(false)

    const searchValue = () => {
    if(value.length){
        return getRequest(baseUrl+`search/${type}?name=${value}`).then(res => {
            console.log(res)
        if(res.err){
            switch (type) {
            case 'character':
                setResults([])
                break;
            case 'episode':
                setResults([])
                break;
            case 'location':
                setResults([])
                break;
            }
        }else{
            switch (type) {
            case 'character':
                setResults(res)
                break;
            case 'episode':
                setResults(res)
                break;
            case 'location':
                setResults(res)
                break;
            }
        }
        setUpdate(!update)
        })
    }else{
        setUpdate(!update)
    }
    }

    useEffect(() => {

    }, [update])
    

  return (
    <Wrapper>
        <center>
           <Search>
                <Title>What are you looking for?</Title>
            <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant={type === 'character' ? "contained" : "outlined"} onClick={() => setType('character')}>characters</Button>
                <Button variant={type === 'episode' ? "contained" : "outlined"} onClick={() => setType('episode')}>episodes</Button>
                <Button variant={type === 'location' ? "contained" : "outlined"} onClick={() => setType('location')}>locations</Button>
            </Stack>
            <br/><br/>
      
            <SearchIcon sx={{position: 'absolute', marginTop: 2.2, marginLeft: 2}}/>
            <StyledInputBase
              onChange={(e) => {
                setValue(e.target.value)
              }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="outlined" onClick={() => {
                searchValue()
                setGo(true)
                }}>Go!</Button>
       
          </Search>
          <StyledDiv>
            {
                go ?
                type === 'character' ? 
                results && results.length > 1 ? results.map(result => <Card char={result}/> ) : <StyledDiv> There is nothing here :(</StyledDiv>
                : type === 'episode' ? 
                results && results.length > 1 ? results.map(result => <EpisodeCard episode={result}/> ) : <StyledDiv> There is nothing here :(</StyledDiv>
                : 
                results && results.length > 1 ? results.map(result => <LocationCard location={result}/> ) : <StyledDiv> There is nothing here :(</StyledDiv>
                : 
                ''
            }
          </StyledDiv>
          </center>
    </Wrapper>
  )
}

export default SearchComp;