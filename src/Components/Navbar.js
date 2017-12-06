import React,{Component} from 'react';
import {AppBar,Drawer,MenuItem,Badge,IconButton,Menu} from 'material-ui'
import PeopleOutline from 'material-ui/svg-icons/social/people-outline'
import Popover,{PopoverAnimationVertical} from 'material-ui/Popover'
import Slider from 'material-ui/Slider';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Navbar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      Sideropen: false,
      DropDownOpen:false,
    };
  }
  handleIconClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      DropDownOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleIconClose = () => {
    this.setState({
      DropDownOpen: false,
    });
  };
  handleToggle = () => this.setState({Sideropen: !this.state.open});
  handleClose = () => this.setState({Sideropen: false});
 
     
    
  render() {
         
    return (<div>
     <AppBar title="Bludfury"
     style={{zIndex:"1000",position:"fixed"}}
     showMenuIconButton="true"
     onRightIconButtonTouchTap={this.handleIconClick}
     onLeftIconButtonTouchTap={this.handleToggle}
     iconElementRight={<PeopleOutline/>}
     iconStyleRight={{cursor:"pointer",paddingTop:"10px",fontSize:"22px"}}
     />

     //This is the sider Component   
     <Drawer
     docked={false}
     width={200}
     open={this.state.Sideropen}
     onRequestChange={(open) => this.setState({Sideropen:false})}
     >
     <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
     <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
     </Drawer>   
     
     //This is the component which renders when user button is clicked 
     <Popover
      open={this.state.DropDownOpen}
      anchorEl={this.state.anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={this.handleIconClose}
      animation={PopoverAnimationVertical}
    >
      <Menu>
        <MenuItem primaryText="Log In"  />
        <MenuItem primaryText="Sign Up" />
      </Menu>
    </Popover>
    </div>
    );
  }
}

