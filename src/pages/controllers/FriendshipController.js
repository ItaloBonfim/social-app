import Get from '../../services/HttpsMethods/GET'

const ApiLink = {
   getAllFriendship: 'api/friends',
   FindFriendship: 'api/',
   getInvites: 'api/friendRequests/',
   getAllUsers: 'api/user/All',
   getFollows: 'api/follow/see/following/',
   getFollowers: '/api/follow/see/followers'

}

export const getFriendships = async function () {

   const response = await Get(ApiLink.getAllFriendship);

   return response;

}
export const getAllUsers = async function () {

   const response = await Get(ApiLink.getAllUsers);

   return response;

}

export const getInvites = async function (props) {
   if (props.filter === '1') {
      const response = await Get(ApiLink.getInvites)

      return response;

   } else if (props.filter === '2') {
      const response = await Get(ApiLink.getInvites.concat(props.filter))
      return response;
   }

   return null;
}

export const getFollows = async function (props) {
   console.log(props)

   let urlVariable = {
      URL1: `api/follow/see/following/`
      //URL2: `api/follow/see/following/${props.userId}`
   }
      // let urlVariable = `api/follow/see/following/${props.userId}`;
   
   if (props?.userId) {
      return await Get(urlVariable.URL2);
      //return response
   }
   return await Get(ApiLink.getFollows);
   //return response
}

export const getFollowers = async function (props) {
   console.log(props)
   
   let urlVariable = `api/follow/see/followers/${props.userId}`;
  
   if (props?.userId){
      return await Get(urlVariable.externalUser);
      //return response
   }
   return await Get(ApiLink.getFollows);
   //return response
}

export const getFollowwFiltered = async (props) => {
   let urlVariable = {
      URL1: `api/follow/see/search/${props.filter}`,
      URL2: `api/follow/see/search/${props.filter}/${props.userId}`,
   } 
   console.log(urlVariable.URL1);

   if(props.userId){
      return await Get(urlVariable.URL2);
   }

   return await Get(urlVariable.URL1)
} 