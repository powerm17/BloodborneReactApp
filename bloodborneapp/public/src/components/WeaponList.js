import React, { Component } from 'react';
import 'react-table/react-table.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class WeaponList extends Component {
  constructor(props) {
    super(props);
    this.state = { Weapons: [] };
  } 

  componentDidMount() {
    this.fetch();
  }
  
  fetch = () => {
    console.log("FETCH")
    fetch('http://localhost:3000/weapons')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        Weapons: responseData
      }); 
    })
    .catch(err => console.error(err)); 
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Weapon Catalog</h1>
        <div className="row">
          {this.state.Weapons.map((weapon) => (
            <div key={weapon.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={weapon.thumbnail} alt={weapon.name} />
                <Card.Body>
                  <Card.Title>{weapon.name}</Card.Title>
                  <Card.Text>{weapon.description}</Card.Text>
                  <Card.Text>
                    <strong>Base Damage:</strong> {weapon.base_damage}
                  </Card.Text>
                  <Card.Text>
                    <strong>Damage Type:</strong> {weapon.damage_type}
                  </Card.Text>
                  <Card.Text>
                    <strong>Durability:</strong> {weapon.durability}
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WeaponList;
