import React from 'react';
import DataSource from "../../users/DataSource";
import API from "../../API";
import UserView from "../../users/UserView";
import FormValidator from "../../validation/FormValidator";

function hocEdit(ViewComponent,selectData,postPath,getPath,redirectPath) {

    return class extends FormValidator {
        constructor(props) {
            super(props);
            const {match: {params}} = props;
            this.id = params.id;
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                object: { },
                errors : { }
            };
        }

        async componentDidMount() {
            this.handleChange();
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange = async () => {
            const {match: {params}} = this.props;
            const {data: response} = await API.get(`${getPath}/${params.id}`);
            this.setState(prevState => ({
                object: response
            }));
        }

        onChange = (e) => {
            const {name,value} = e.target;
            this.setState(prevState => ({
                object: {
                    ...prevState.object,
                    [name]: value
                }
            }));
        }

        validateErrors(error) {
            this.setState(prevState => ({
                errors: { username: '', password: '', email: '' }
            }));
            return super.validateErrors(error, this.props.t)
        }

        onSubmit = (e) => {
            e.preventDefault();
            API.post(postPath, this.state.object)
                .then((result) => {
                    if(redirectPath!=null){
                    this.props.history.push(redirectPath);
                    }
                }).catch((error) => {
                if(error.response.status === 400){
                    this.validateErrors(error);
                }
            });
        }

        render() {
            const {t} = this.props;
            const {object,errors} = this.state;
            return (
                <ViewComponent user={object} errors={errors} onChange={this.onChange} label={'EditUser'} onSubmit={this.onSubmit} />
            );
        }
    }

}

export default hocEdit;