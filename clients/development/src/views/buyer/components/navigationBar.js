import React from "react";
import { Nav,NavItem,Navbar,NavLink } from 'reactstrap';


class navigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("Orders")}>My orders</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("Costumized")}>Make yourself</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("Menu")}>Menu</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("Feedback")}>Feedback</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            
            
        )
    }
}



export default navigationBar;
