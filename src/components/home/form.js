import React,{useEffect} from 'react'
import userInput from '../../customHook/useInput';
import { addNote } from '../../store/actions/noteActions';
import {useDispatch} from 'react-redux';

const Form = () => {

    //custom hook for storing the input value from user
    const [title, bindTitle, resetTitle] =userInput()
    const [content, bindContent, resetContent] =userInput()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title,content}))
        resetTitle()
        resetContent()
    }
    
    return (
        <div>
            <div className='section'>
                <form onSubmit={handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>New Note</h5>

                    {/* Input note title here */}
                    <div className="input-field">
                        <input id="note_title" type="text" className="validate" {...bindTitle}/>
                        <label htmlFor="note_title">Note title</label>
                    </div>
                    
                    {/* Input Note content here */}
                    <div className="input-field col s12">
                        <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
                        <label htmlFor="note_content">Note Content</label>
                    </div>
                    <button className='btn green'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
