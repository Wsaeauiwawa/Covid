import React from 'react';
import styled from 'styled-components';
import { RiVirusLine } from "react-icons/ri";


const Confirm = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    border-radius: 30px;
    background: #FD0D1B;
`;
const Title = styled.h1`
    font-size: 1em;
    text-align: center;
    color: #FFF;


`;
const Recover = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    border-radius: 30px;
    background: #27AE60 ;
`;
const Hospital = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    border-radius: 30px;
    background: #179C9B;
`;
const Death = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    border-radius: 30px;
    background: #666666;
`;
const Pos = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'a a a'
        'b c d';
`;
const Head = styled.div`
//   margin-top: 10px;
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
`;



class Covid extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <>
            <Head>Covid-19 Tracker in Thailand</Head>
                <Pos>
                
                    <Confirm>
                        <RiVirusLine/>
                        <Title>Confirmed</Title>
                        {data.Confirmed}<br></br>
                        <span>[+{data.NewConfirmed}]</span>
                    </Confirm>
                
                    <Recover>
                        <RiVirusLine/>
                        <Title>Recovered</Title>
                        {data.Recovered}<br></br>
                        <span>[+{data.NewRecovered}]</span>
                    </Recover>
                    <Hospital>
                        <RiVirusLine/>
                        <Title>Hospitalized</Title>
                        {data.Hospitalized}<br></br>
                        <span>[+{data.NewHospitalized}]</span>

                    </Hospital>
                    <Death>
                        <RiVirusLine/>
                        <Title>Deaths</Title>
                        {data.Deaths}<br></br>
                        <span>[+{data.NewDeaths}]</span>
                        
                    </Death>
                </Pos>
                <p>last update: {data.UpdateDate}</p>
                        
            
                
            </>
        )
    }
}


export default Covid;

