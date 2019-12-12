import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css'

class App extends Component {
    state = {
        name: 'krishna yendluri',
        data: [],
        loader: true,
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/photos')
        //     .then(response => response.json())
        //     .then(json => this.setState({ data: json }))

        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ data: res.data, loader: false })
            })

    }
    render() {

        return (
            <div className='text-success'>
                <h1>my name is {this.state.name}</h1>
                <table className='table table-bordered table-hover text-success'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>geo location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.map((val, ind) => {
                            console.log(val)
                            return (
                                <tr key={ind}>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.address.geo.lat}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {this.state.loader && <div className='spinner-border'></div>}
                <div>
                    <ul className='pagination float-right'>
                        <li className='page-item'>
                            <a className='page-link'>pre</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>1</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>2</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>3</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>next</a>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default App;

