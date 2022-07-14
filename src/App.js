import React from 'react';
import './Box.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  const cardInfo = [
    {image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
    {image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
    {image: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
    {image: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Dummy Title",text:"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful."},
  ];
  const renderCard = (card,index)=> {
    return (
      <>
      <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Img variant="top" src={card.image}/>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="secondary mt-3">Change Theame</Button>
      </Card.Body>
    </Card>
    </>
    )
  }
  return (
    <div className='row'>
      {cardInfo.map(renderCard)}
    </div>
  );
}

export default App;
