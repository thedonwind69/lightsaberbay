import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

  class Nav extends React.Component {

    constructor(props){
        super(props);
    }

    logout () {
        this.props.logout();
        this.props.history.push('/');
    }

    render () {
    
        if (this.props.currentUser) {
            return (
                    <div class="nav-bar-container">

                            <ul class="nav-bar-list">
                                <li><Link class={'tc-link nav-link nav-link-hover'} to="/">Home</Link></li>
                                <li> <Link class={'nav-link nav-link-hover'} to="/marketplace">Marketplace</Link></li>   
                                <li> <Link class={'nav-link nav-link-hover'} to="/inventory">Inventory</Link></li>          
                                <li> <Link class={'nav-link nav-link-hover'} to="/messages">Messages</Link></li>     
                                <li>
                                    <button class={'logout-button'} onClick={this.logout.bind(this)}>Logout</button>
                                </li>
                            </ul>

                        <div class="clearfix"></div>
                    </div>
            )
        } else {
            return (
                    <div class="nav-bar-container">
                
                            <ul class="nav-bar-list">
                                <li> <Link class={'tc-link nav-link nav-link-hover'} to="/">Home</Link> </li>
                                <li> <Link class={'nav-link nav-link-hover'} to="/login">Marketplace</Link></li>   
                                <li>
                                    <Link class={'nav-link nav-link-hover'} to="/login">LogIn</Link>
                                </li>
                                <li>
                                    <Link class={'nav-link nav-link-hover'} to="/signup">SignUp</Link>
                                </li>
                            </ul>
                
                        <div class="clearfix"></div>
                    </div>
            )
        }
        //end of render method
    }

  }
 
  export default withRouter(Nav);