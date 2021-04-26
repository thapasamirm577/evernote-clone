import React from 'react';
import userInput from '../../customHook/useInput';
import {editNote} from '../../store/actions/noteActions'
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
const EditForm = () => {
    const note = useSelector((state) =>state.note )
    const [title, bindTitle, resetTitle] =userInput(note.title)
    const [content, bindContent, resetContent] =userInput(note.content)
    const dispatch = useDispatch()
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editNote({id:note.id,title,content}))
        resetTitle()
        resetContent()
        history.push('/')
    }
    
    return (
        <div>
            <div className='section'>
                <form onSubmit={handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>New text</h5>
                    <div className="input-field">
                        <input id="note_title" type="text" className="validate" {...bindTitle}/>
                        <label className="active" htmlFor="note_title">Note title</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                        <label className="active" htmlFor="note_content">Note Content</label>
                    </div>
                    <button className='btn green'>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default EditForm
