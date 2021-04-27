import React, { useState } from 'react'
import { deleteNote, toggleFav } from '../../store/actions/noteActions';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Fade, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #4CAF50',
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    span: {
        display: 'inline-block',
        marginRight: '5px',
    }
}));

function Note({ note }) {
    const dispatch = useDispatch()
    //actions
    const deleteHandler = () => {
        dispatch(deleteNote(note));
    }
    const toggleFavHandler = () => {
        dispatch(toggleFav(note));
    }
    const editNoteHandler = () => {
        dispatch({ type: 'EDIT_NOTE', payload: note })
    }
    //favorite toggle
    const FullFavIcon = note.favorite ? 'favorite' : 'favorite_border';

    //handling modal for delettion
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
    
            <div className='note white'>

                {/* like and delete action icon */}
                <div className='right-align' >
                    <i className='material-icons red-text' style={{ cursor: 'pointer' }} onClick={toggleFavHandler}>{FullFavIcon}</i>
                    <i className='material-icons ' style={{ cursor: 'pointer' }} onClick={handleOpen}>delete</i>

                </div>

                {/* note title  */}
                <h5 className='black-text'>{note.title}</h5>

                {/* Note content is here */}
                <p className='truncate'>{note.content}</p>

                {/* see more about note */}
                <Link to={`/note/${note.id}`}>
                    <p className='changeColor'>See more...</p>
                </Link>
                
                
                {/* date for note */}
                <p className='grey-text'>{moment(note.createAt.toDate()).fromNow()}</p>
                
                {/* edit note from edit icon */}
                <div className='right-align'>
                    <Link to={`/edit-form/${note.id}`}>
                        <i className='material-icons changeColor' style={{ cursor: 'pointer' }} onClick={editNoteHandler}>edit</i>
                    </Link>
                </div>
                
                {/* //Modal for deletion */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h5 id="transition-modal-title">Do you want to delete?</h5>
                            <p id="transition-modal-description">Be careful, it will be permanently deleted!</p>

                            <span className={classes.span}><Button onClick={handleClose} variant="contained">Cancel</Button></span>
                            <Button variant="contained" onClick={deleteHandler} color="secondary">
                                Delete
                            </Button>

                        </div>
                    </Fade>
                </Modal>

            </div>
        </div>
    )
}

export default withRouter(Note);
