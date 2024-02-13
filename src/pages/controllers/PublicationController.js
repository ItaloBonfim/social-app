import Get from '../../services/HttpsMethods/GET'
import Post from '../../services/HttpsMethods/POST'


const apiLink = {
    homePublication: 'api/home',
    getComments: 'api/comments/',
    getReaction: 'api/reaction/publication/',
    newPost: 'api/publications/new'
}

export const searchRecentlyPublication = async function (params)  {
    
    const response = await Get(apiLink.homePublication, params);
    console.log("executei")
    if(!response) alert('!Erro');

    return response;
}

export const searchRecentlyComments = async function (params) {
    const response = await Get(apiLink.getComments.concat(params));

    if(!response) alert('!Erro');

    return response;
}

export const searchReactions = async function (params) {
    const response = await Get(apiLink.getReaction.concat(params));

    if(!response) alert('!Erro');

    return response
}

export const NewPost = async function (params) {
    const response = await Post(apiLink.newPost, params);

    return response
}




