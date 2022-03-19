import React, { Component } from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'abc',
            fruit: 'Orange',
            message: '',
        }

        this.fruits = [
            { 'name': 'Apple', 'value': 'apple' },
            { 'name': 'Banana', 'value': 'banana' },
            { 'name': 'Orange', 'value': 'orange' },
        ]

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        const { state } = this;
        return (
            <form>
                <div>
                    <label>
                        Name:
                        <input type='text' name='name' valeu={state.name} onChange={this.handleChange} />{state.name}
                    </label>
                </div>
                <div>
                    <label>
                        Fruit:
                        <select value={state.fruit} multiple={true}>
                            {
                                this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea value={state.message} name="" id="" cols="30" rows="10" />
                    </label>
                </div>
                <input type="submit" value='Enviar' />
            </form>
        );
    }
}

export default MyForm;