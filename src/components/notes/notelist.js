import React from 'react'
import Note from './Note';

const NoteList = (props) => {
    return (
        <div>
            <div className='notescontainer'>
                {props.notelist && props.notelist.map(note=><Note note={note} key={note.id} />)}
            </div>
        </div>
    )
}
export default NoteList;