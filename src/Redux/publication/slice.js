import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // substituir
    publication: [],
    // substituir
    comments: [],
    activate: false,

    publications: {
        publication: [],
        comment: [],
        reaction: [],
    },
    dialogConfigs: {
        thumbsUp: false,
        comments: true,
        share: true,
        fullWidth: true,
        maximumWidth: 'xl',
    },

    contentType: {
        image: true,
        video: false,
        multiple: {
            images: [],
            videos: []
        }
    },
    error: ''

}


const publicationSlice = createSlice({
    name: 'publication',
    initialState,
    reducers: {
        //actions
        resumePerfil: (state, action) => {
            state.activate = action.payload;
        },

        contentsPublications: (state, action) => {
            /* if(state.publication.length > 0){
                
                state.publication = [state.publication, action.payload]
            
            
            } else {
                state.publication = action.payload;
            } */

            state.publication = action.payload;
            state.publications.publication = action.payload;
        },

        contentComments: (state, action) => {
            state.comments = action.payload;
            state.publications.comment = action.payload;
        },
        contentReaction: (state, action) => {
            state.publications.reaction = action.payload;
        },
        clearContents: (state) => {
            state.publications.publication = [];
            state.publications.comment = [];
            state.publications.reaction = [];
        }

    }
})

export const {
    resumePerfil,
    contentsPublications,
    contentComments,
    contentReaction,
    clearContents,

} = publicationSlice.actions


export default publicationSlice.reducer;
