
import React, { Component } from 'react'

class List extends Component {

    
    // componentDidMount(){
    //     this.callSingleList()
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => console.log(err));
    // }

    // callSingleList = async (listId) => {
    //     console.log(this.state.listId);
    //     const response = await fetch(`/lists/${this.props.activeList}`);
    //     const body = await response.json();

    //     if(response.status !== 200) throw Error(body.message);
    //     return body;
    // }


    render() {
        return (
            <div>
                {this.props.activeList}
            </div>
        )
    }
}

export default List;


// componentDidMount() {
//     this.callApi()
//     .then(res => {
//       const sortedLists = res.sort(sortAlphabetically("name")) //sort lists alphabetically
//       this.setState({
//         lists: sortedLists,
//         activeList: sortedLists[0]._id
//       })
//     })
//     .catch(err => console.log(err));
//   }

//   //Function to sort lists alphabetically

//   /* 
//   Take the object as a function
//   */

//   callApi = async () => {
//     const response = await fetch('/lists');
//     const body = await response.json();

//     if(response.status !== 200) throw Error(body.message);

//     return body;
//   }


// #region Old Code

// import React from 'react'

// const List = (props) => {
    
//     return (
//         <div>
//             This is the list component: {props.activeList}
//         </div>
//     )
// }

// export default List;

// #endregion
