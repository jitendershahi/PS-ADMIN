import React,{ Component } from 'react'

export class About extends Component {
   
    state= {
        loading:true
    }
    // statics = {

    //     willTranisitionTo: function(transition, params, query, callback) {
    //         if(!confirm("are you sure to see this....")) {
    //             transition.about();
    //         } else {
    //             callback()
    //         }

    //     } 
    // } 

    // static willTransitionTo(transition, callback) {
    //     if (this.state.loading) {
    //         transition.abort();
    //     } else {
    //         callback()
    //     }
    // }


    render() {
        return (
            <div>
                <h1>About</h1>
                <div>This adivplication uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                    </div>
            </div>
        )
    }
}

export default About;