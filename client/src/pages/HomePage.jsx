import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import TabsTable from '../components/TabsTable';
import { baseUrl, getRequest } from '../services/get_api';
import { StyledDiv } from './styles';

const HomePage = () => {

  const [getData, setGetData] = useState(false)
  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [locations, setLocations] = useState([])
  const [page, setPage] = useState(1)
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState('character')

  const FirstgetData = async () => {
    setPage(1)
    return getRequest(baseUrl+`character?page=${page}`).then(res => {
      setCharacters(res)
      return  getRequest(baseUrl+'episode').then(res => {
        setEpisodes(res)
        return  getRequest(baseUrl+'location').then(res => {
          setLocations(res)
          setGetData(true)
        })
      })
    })
  }

  const LoadMore = () => {
    setLoading(true)
    return getRequest(baseUrl+`${tab}?page=${page + 1}`).then(res => {
      switch (tab) {
        case 'character':
          let newCharacters = [...characters]
          newCharacters.push(...res)
          setCharacters(newCharacters)
          break;
        case 'episode':
          let newEpisodes = [...episodes]
          newEpisodes.push(...res)
          setEpisodes(newEpisodes)
          break;
        case 'location':
          let newLocations = [...locations]
          newLocations.push(...res)
          setLocations(newLocations)
          break;
        default:
          let newCharacter = [...characters]
          newCharacter.push(...res)
          setCharacters(newCharacter)
        break;

      }
      setPage(page + 1)
      setUpdate(!update)
      setLoading(false)
    })
  }

  const searchValue = (e) => {
    let value = e.target.value
    if(value.length){
      return getRequest(baseUrl+`search/${tab}?name=${value}`).then(res => {
        if(res.err){
          switch (tab) {
            case 'character':
              setCharacters([])
              break;
            case 'episode':
              setEpisodes([])
              break;
            case 'location':
              setLocations([])
              break;
          }
        }else{
          let Results = res.slice(0,5)
          switch (tab) {
            case 'character':
              setCharacters(Results)
              break;
            case 'episode':
              setEpisodes(Results)
              break;
            case 'location':
              setLocations(Results)
              break;
          }
        }
        setUpdate(!update)
      })
    }else{
      setGetData(false)
      setUpdate(!update)
    }
  }

  useEffect(() => {
    if(!getData){
      FirstgetData()
    }
  }, [update, getData])

  return (
    <>
    <Header searchValue={searchValue}/>
    <TabsTable characters={characters} episodes={episodes} locations={locations} LoadMore={LoadMore} loading={loading} setPage={setPage} setTab={setTab} setGetData={setGetData}/>
    </>
  )
}

export default HomePage;