import React, { Component } from 'react';
import './App.css';
import { Route, Switch,Link} from 'react-router-dom';
import {getAllStarShips} from '../../services/sw-api'
import StarShipPage from '../StarShipPage/StarShipPage'

class App extends Component {

  state = {
    starShips: []
  }

  handleOneStarShip=(id)=>{
    return (
    this.state.starShips[id]
    )
  }

  async componentDidMount(){
    const allStarShips = await getAllStarShips();
    const starShipsObject = allStarShips.results
    this.setState({
      starShips: starShipsObject
    })

  }
  render() {
    return(
    <div >
      <header className='App-Header'> STAR WARS STARSHIPS</header>
      <hr />
      <Switch>
        <Route exact path='/' render={() =>
        this.state.sharShips.length
        ?
        <section>
        {this.state.starShips.map((s,idx)=>(
          <Link 
            to={`/starships/${idx}`}
            key={idx}
            >
            {s.name}
            
          </Link>
        ))}
        </section>
        :
        <h1>is Loading</h1>
        }/>
        <Route path={`/starships/:id`} render={props=>
        <StarShipPage 
           {...props}
          starShip={this.handleOneStarShip}
            
        />
          
        
      }
      />

      </Switch>
    </div>
  )
}
}

export default App;
