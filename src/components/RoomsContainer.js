import React from 'react';
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'


function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if(loading){
        return <Loading/>
                         }
        return (
            <div>
                <RoomsFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
             </div>)
}


export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomsFilter from './RoomsFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// const RoomsContainer = () => {
//     return ( 
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return (
//                             <div>
//                                 hello rooms container
//                                 <RoomsFilter rooms={rooms}/>
//                                 <RoomList rooms={sortedRooms}/>
//                             </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//      );
// }
 
// export default RoomsContainer;