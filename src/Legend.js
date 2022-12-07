import axios from 'axios'
import {Component, useEffect} from "react";
import {render} from "react-dom";

class Legend extends Component {
    constructor() {
        super();
        this.state = {info:{}}
    }
    componentDidMount() {
        fetch('https://otc-dev.everpay.io/auth-info')
            .then(res => res.json())
            .then(json => this.setState({info:json}))
    }

    render()
        {
            return (
                <div className="App">
                    <legend-trade
                        signature={this.state.info.signature}
                        timestamp={this.state.info.timestamp}
                        app-id={this.state.info.appId}
                        app-key={this.state.info.appKey}
                        app-url={this.state.info.appUrl}
                        app-uid="0x8Ec77d77085c65854bbfAAc6cfeA051EB4066EF2"
                        app-email="zzh.cq@qq.com"
                    />
                </div>
            );
        }
}

export default Legend;