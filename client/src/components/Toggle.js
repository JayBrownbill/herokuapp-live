// import ToggleDetails from './ToggleDetails'
// import ToggleButton from 'bootstrap-switch-button-react'
import React, { Component } from 'react'
import '../stylesheets/App.css'

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'


import TruthContent from './TruthContent.js'
import LiesContent from './LiesContent.js'





export default class Toggle extends Component {

    constructor() {
        super()
        this.state = { tabIndex: 0 }
    }

    LoadTruth() {
        this.setState = { tabIndex: 0 }
    }

    LoadFalse() {
        this.setState = { tabIndex: 1 }
    }

    render() {

        const TruthSwitch = "Truth"
        const FalseSwitch = "Lie"

        return (
            <div id="togglePage">

                <Tabs>
                    <TabList className="TabList">
                        <Tab onClick={() => this.LoadTruth()}> {TruthSwitch} </Tab>
                        <Tab onClick={() => this.LoadFalse()}> {FalseSwitch} </Tab>
                    </TabList>
                    <TabPanel> <h1>  <TruthContent/>  </h1> </TabPanel>
                    <TabPanel> <h1> <LiesContent/> </h1> </TabPanel>
                </Tabs>
            </div>
        )
    }
}


// <ToggleButton
// className='toggler'
// checked={true}
// size="sm"
// onlabel="Truth"
// offlabel="Lie" />

// UNFINISHED BUTTON CONNECT TABS TO EXTERNAL BUTTON