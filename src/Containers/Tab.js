import React,{Component} from 'react';
import classes from './Tab.module.css';


class Tab extends Component{
  render(){
  return(
    <React.Fragment>
    <h1 style={{marginTop:'11%',paddingLeft:'3em'}}>Manage Campaigns</h1>
<div className={classes.Campaigns}>
<a  className= {classes.childCampaigns} href='/' title='Upcoming Campaigns' >Upcoming Campaigns</a>
<a className= {classes.childCampaigns} href='/' title='Live Campaigns' >Live Campaigns</a>
<a className= {classes.childCampaigns} href='/' title='Past Campaigns' >Past Campaigns</a>
</div>
</React.Fragment>
  )
  }
}

export default Tab;