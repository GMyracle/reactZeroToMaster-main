import React, {Component} from "react";
import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteFrom";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id
    })
  }
  render(){
    return (
      <Switch>
        <Route 
          exact
          path="/palette/new"
          render={() => <NewPaletteForm/>}/>
        <Route 
          exact path="/" 
          render={(routeProps) => <PaletteList palettes={seedColors}{...routeProps}/> }
        />
        <Route 
          exact
          path="/palette/:paletteId/:colorId"    
          render={
          routeProps => (
            <SingleColorPalette 
              colorID={routeProps.match.params.colorId}
             
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
          />
          )}
          />
        <Route 
          exact path="/palette/:id"
          render={routeProps => (<Palette 
            palette={generatePalette(
              this.findPalette(
                routeProps.match.params.id)
              )
            } />
            )}
        />
         
         
        

      </Switch>
      
    //   <div className="App">
    //     <Palette palette={generatePalette(seedColors[4])}/>
    //   </div>
    );
  }
  }
  

export default App;
