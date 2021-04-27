import React from 'react'
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import NoteList from './notelist';


const Favorites = () => {

    // checks whether there is any true value for favorite i.e. liked note if yes it stores at favnotes and 
    // pass to NoteList component
    
    useFirestoreConnect([{collection:'notes',where:['favorite','==',true],orderBy:['createAt','desc'],storeAs:'favnotes'}])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    return <NoteList notelist={favnotes} />
        
}

export default Favorites;
