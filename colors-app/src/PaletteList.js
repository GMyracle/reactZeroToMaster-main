import React, {Component} from "react"
import MiniPalette from "./MiniPalette"
import {Link} from "react-router-dom"
import {withStyles} from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"


class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const {palettes, classes } = this.props
        return (
            <div className={this.props.classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1> React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                        <Link to={`/palette/${palette.id}`}>
                            <MiniPalette {...palette} 
                                handleClick = {() => this.goToPalette}/>
                        </Link>
                        
                        ))}
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default withStyles (styles)(PaletteList);