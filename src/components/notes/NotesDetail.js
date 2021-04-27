import React from 'react'
import {useSelector} from 'react-redux';
import {useFirestoreConnect,isLoaded,isEmpty} from 'react-redux-firebase';
import moment from 'moment';
import {withRouter} from 'react-router-dom';

const NotesDetail = (props) => {
    
    //getting id of required note from list of notes
    const id=props.match.params.id;

    //conecting this id with firestore id to retrieve the note detail
    useFirestoreConnect([{collection:'notes',doc:id}]);
    const note = useSelector(({firestore:{data}})=>data.notes && data.notes[id]);

    // getting data of specified or given id 
    const noteMarkup = !isLoaded(note)?(
        //when data is loading 
        <div>
            <div className='container section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>Loading....</span>
                       
                    </div>
                    <div className='card-action grey lighten-4 grey-text'></div>
                </div>
            </div>
        </div>
    ):isEmpty(note)?(
        //after data is loaded if there is any empty note or if we pass wrong id in url page will not found here
        <div>
            <div className='container section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>The specified note can not be found</span>
                    
                    </div>
                    <div className='card-action grey lighten-4 grey-text'></div>
                </div>
            </div>
        </div>
    ):(
        //if note is loaded completely and there is no empty note then it will display
        <div>
            <div className='container section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{note.title}</span>
                        <p>{note.content}</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>{moment(note.createAt.toDate()).calendar()} </div>
                </div>
            </div>
        </div>
    )
    return noteMarkup;
}

export default withRouter(NotesDetail);
