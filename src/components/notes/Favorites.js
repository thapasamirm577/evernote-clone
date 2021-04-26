import React from 'react'
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import NoteList from './notelist';


const Favorites = () => {
    useFirestoreConnect([{collection:'notes',where:['favorite','==',true],orderBy:['createAt','desc'],storeAs:'favnotes'}])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    return <NoteList notelist={favnotes} />
        
}

export default Favorites;
