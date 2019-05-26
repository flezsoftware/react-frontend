import React from 'react';
class FormValidator extends  React.Component{
    validateErrors(error,t){
        error.response.data.errors.forEach((item, key) =>
            {
                let args = {};
                item.arguments.forEach((entry, i) => {
                    if(i>0) args['arg' + i] = entry;
                });
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        [item.field]: t(item.codes[0],args)
                    }
                }));
            }
        );
    }
}
export default FormValidator;