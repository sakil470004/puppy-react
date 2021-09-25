import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component {
    //constructor need must becouse we need state data to store our work
    constructor() {
        super();
        this.state =
        {
            robots: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        //download robot data from insternet
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
                .then(users => {this.setState({ robots: users })

            });

        //sakil:i hard coded her e . becouse i wand to think about user
    //    let users=['Sakil', 'Rahat','Nayeem','Tareq','Habib','Tanbir','Emam','Shofiq','Mynul','Saqura','Narutto','Asta','Asif','Irafan','Rabbi','Mahfuz'];
        // this.setState({ robots: Users });

    }

    // every time searchChange we update the seachfield through the function
    onSearchChange = (event) => {
        //update searchfield
        this.setState({ searchfield: event.target.value })

    }

    render() {    
        // this line is distructor is reduce this.state from other line
        //    const {robots,searchfield}=this.state

        //compare the searchfild and our old  data which came from robots.js
        const fillteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        // console.log(fillteredRobots);
        //this is only for when web loading slow
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='app-div' >
                    <h1>Puppy</h1>
                    {/* pass the data in searchBox */}
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* fix the all card by giving a list from fillterRobots*/}

                    {/* <Scroll> */}
                    <CardList robots={fillteredRobots} />
                    {/* </Scroll> */}
                </div>

            );
        }
    }

}

export default App;