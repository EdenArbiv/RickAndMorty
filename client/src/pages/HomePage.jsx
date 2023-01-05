import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { baseUrl, getRequest } from '../services/get_api';
import { StyledDiv } from './styles';

const HomePage = () => {

  const [getData, setGetData] = useState(false)
  const [data, setData] = useState([])

  const FirstgetData = async () => {
    return getRequest(baseUrl).then(res => {
      console.log(res)
      setData(res)
      setGetData(true)
    })
  }


  useEffect(() => {
    if(!getData){
      FirstgetData()
    }
  }, [])
  
  return (
    <>
    <Header/>
    <StyledDiv>
    {
      data && data.map(char => <Card char={char}/>)
    }
    </StyledDiv>
    </>
  )
}

export default HomePage;