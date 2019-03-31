import React from 'react';
import NavigationBar from "./components/navigationBar";
import Menu from "./views/menu";
import Feedback from "./views/feedback";
import Orders from "./views/orders";
import Costumized from "./views/customized";


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showPage:"Menu"
        }
    }
    //changing page
    changeShowPage(pageName){
        this.setState({showPage:pageName})
    }

    render() {
        return (
            <div>
                <NavigationBar changeShowPage={this.changeShowPage.bind(this)} />
                {this.state.showPage == "Menu" ? <Menu /> : null}
                {this.state.showPage == "Feedback" ? <Feedback /> : null}
                {this.state.showPage == "Orders" ? <Orders /> : null}
                {this.state.showPage == "Costumized" ? <Costumized /> : null}
            </div>
        );
    }
}
export default UserPage;