import React from 'react';
import Card from 'react-bootstrap/Card';

const defaultPLayer =   {
    id: 1,
    name: "Lionel Messi",
    team: "Barcelona",
    nationality: "Argentina",
    age: 34,
    jerseyNumber: 10,
    image: "https://b.fssta.com/uploads/application/soccer/headshots/711.png",
}

const Player = ({player = defaultPLayer}) => {
        const {name,team,jerseyNumber,age,image} = player
    return (

            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={image} style={{width:'100%',height:'300px'}} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title style={{marginTop:'1rem'}}>{name}</Card.Title>
                    <Card.Text>{team}</Card.Text>
                    <Card.Text>{jerseyNumber}</Card.Text>
                    <Card.Text>{age}</Card.Text>
                </Card.Body>
            </Card>
                     
    )
}

export default Player