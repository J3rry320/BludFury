import React,{Component} from 'react';
import {AppBar,Drawer,MenuItem,Badge,IconButton,Menu,Divider,TextField} from 'material-ui'
import Popover,{PopoverAnimationVertical} from 'material-ui/Popover'
import FontIcon from 'material-ui/FontIcon'
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
         const rightIcons=(
           <div>
             <FontIcon className="material-icons">account_circle</FontIcon>
             <FontIcon className="material-icons">search</FontIcon>
             
             </div>
         );
    return (<div>
     <AppBar title="Bludfury"
     style={{zIndex:"1000",position:"fixed"}}
     showMenuIconButton="true"
     onRightIconButtonTouchTap={this.handleIconClick}
     onLeftIconButtonTouchTap={this.handleToggle}
     iconElementRight={rightIcons}
     iconStyleRight={{cursor:"pointer",paddingTop:"10px",fontSize:"22px"}}
     />

     //This is the sider Component   
     <Drawer
     docked={false}
     width={300}
     open={this.state.Sideropen}
     onRequestChange={(open) => this.setState({Sideropen:false})}
     >
    <strong>BludFury</strong>
    <MenuItem rightIcon={<FontIcon className="material-icons">search</FontIcon>
          }> <TextField hintText="Search" type="search"/></MenuItem>
     
     <MenuItem onClick={this.handleClose} leftIcon={<i className="material-icons">favorite</i>}
     >About Us</MenuItem>
     <MenuItem onClick={this.handleClose} leftIcon={<i class="material-icons">event</i>}
     >Events</MenuItem>
     <Divider/>
     <MenuItem onClick={this.handleClose} leftIcon={<i class="material-icons">mood</i>}
     >Tesimonals</MenuItem>
      <MenuItem onClick={this.handleClose} leftIcon={<i class="material-icons">question_answer</i>}
     >FAQ's</MenuItem>
     <Divider/>
    <MenuItem onClick={this.handleClose} leftIcon={<i class="material-icons">euro_symbol</i>}
     >Sponsors</MenuItem>
     <MenuItem onClick={this.handleClose} leftIcon={<i class="material-icons">contact_mail</i>}
     >Contact Us</MenuItem>
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

