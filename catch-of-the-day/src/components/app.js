import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{

    render(){
        return (
        <div>
            <div>
                <Header />
                <Order />
                <Inventory />
            </div>
        </div>
        )
    }
}


export default App;


