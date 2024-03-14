import React, { Component } from 'react';
import 'react-table/react-table.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class BossList extends Component {
  constructor(props) {
    super(props);
    this.state = { Bosses: [] };
  } 

  componentDidMount() {
    this.fetch();
  }
  
  fetch = () => {
    console.log("FETCH")
    fetch('http://localhost:3000/bosses')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        Bosses: responseData
      }); 
    })
    .catch(err => console.error(err)); 
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Boss Catalog</h1>
        <div className="row">
          {this.state.Bosses.map((bosses) => (
            <div key={bosses.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={bosses.thumbnail} alt={bosses.name} />
                <Card.Body>
                <Card.Text>
                    <strong>Boss:</strong> 
                  </Card.Text>
                  <Card.Title>{bosses.name}</Card.Title>
                  <Button variant="warning">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BossList;
