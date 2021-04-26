import React from 'react'
import Form from './form'
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import NoteList from '../notes/notelist'

const Home =()=> {
    useFirestoreConnect([{collection:'notes',orderBy:['createAt','desc']}])
    const notes = useSelector((state)=> state.firestore.ordered.notes)

    return (
        <div>
            <div className="container">
                <div className="row center-align">
                    <div className="col-s7"><Form /></div>
                    <div className='notesHereContainer'>
                       <div className='before-after'></div>
                       <div className='col-s5 notesHere'>Notes are here</div>
                       <div className='before-after'></div>
                    </div>
                    <div className='after'></div>
                    <div className="col-s5"><NoteList notelist={notes} /></div>
                </div>
            </div>
        </div>
    )
}
export default Home;