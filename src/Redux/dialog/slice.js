import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    dialogConfigs: {
        thumbsUp: false,
        comments: true,
        share: true,
        fullWidth: true,
        maximumWidth: 'xl',
        currentDialog: null,
        Friends: {
            InvitedFieldSelected: '1'
        }
    },

    dialogFriends: {
        Friends: [],
        Invites: {
            MyReceived: [],
            awaiting: [],
        },
        Meeting: [],
        Follows: [],
        Followers: [],
    }

}


const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        //actions
        updateCurrentDialog: (state, action) => {
            state.dialogConfigs.Friends.InvitedFieldSelected = action.payload
        },

        Friendships: (state, action) => {
            state.dialogFriends.Friends = action.payload;
        },
        InvitesFriendships: (state, action) => {
            if(state.dialogConfigs.Friends.InvitedFieldSelected === '1'){
                state.dialogFriends.Invites.MyReceived = action.payload;
            }
            
            if(state.dialogConfigs.Friends.InvitedFieldSelected === '2') {
                state.dialogFriends.Invites.awaiting = action.payload;
            }
        },
        MeetingFriendships: (state, action) => {
            state.dialogFriends.Meeting = action.payload;
        },
        FollowsUsers: (state, action) => {
            state.dialogFriends.Follows = action.payload;
        },
        FollowingUsers: (state, action) => {
            state.dialogFriends.Followers = action.payload;
        },
        CloseDialog: (state) =>  {
            state.dialogFriends.Following = []
            state.dialogFriends.Follows = []
            state.dialogFriends.Friends = []
            state.dialogFriends.Meeting = []
            state.dialogFriends.Invites.MyReceived = []
            state.dialogFriends.Invites.awaiting = []
        }
    }
})

export const {
    updateCurrentDialog,
    Friendships,
    InvitesFriendships,
    MeetingFriendships,
    FollowsUsers,
    FollowingUsers,
    CloseDialog,

} = dialogSlice.actions


export default dialogSlice.reducer;
