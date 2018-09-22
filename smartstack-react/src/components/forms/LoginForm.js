import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Form } from 'semantic-ui-react';


class LoginForm extends Component {
    state = {
        data: {},
        loading: false,
        errors: {}
    }

    render() {
        return (
           <Form>
               <Form.Field>
                   <label htmlFor=""></label>
               </Form.Field>
               <Button variant="raised" color="primary">Login</Button>
           </Form>
        );
    }
}

export default LoginForm;