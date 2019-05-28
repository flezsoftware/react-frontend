import React from 'react';
import API from "../API";
import PanelUserView from './PanelUserView';
import {isSuper} from "@babel/types";

class PanelUser extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            principal : {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.handleChange();
    }


    async  handleChange() {
        const {data: response} = await API.get(`user/principal`);
        console.log(response);
        this.setState(prevState => ({
            principal: response
        }));
    };
     render()   {
        return (
            <PanelUserView principal={this.state.principal} />
        );
    };
}

export  default  PanelUser;