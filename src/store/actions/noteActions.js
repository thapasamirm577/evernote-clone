export const addNote =(note)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection("notes").add({
            ...note,
            favorite:false,
            createAt:new Date()
        }).then(()=>{
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}
export const deleteNote = (note)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection("notes").doc(note.id).delete()
        .then(()=>{
            console.log("note deleted successfully!!");
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const toggleFav = (note)=>{
    return (dispatch,getState,{getFirestore})=>{
        const favHeart = !note.favorite
        const firestore = getFirestore()
        firestore.collection("notes").doc(note.id).update({
            favorite: favHeart
        
        })
        .then(()=>{
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const editNote = (note)=>{
    return (dispatch,getState,{getFirestore})=>{
        const favHeart = !note.favorite
        const firestore = getFirestore()
        firestore.collection("notes").doc(note.id).update({
            title:note.title,
            content:note.content
        
        })
        .then(()=>{
            console.log("note liked successfully!!");
        }).catch((error)=>{
            console.log(error)
        })
    }
}