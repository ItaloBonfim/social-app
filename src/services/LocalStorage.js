const dataStorage = localStorage;

export const AddItemStorage = function(params = {}){
   return dataStorage.setItem(params);
}

export const RemoveItemStorage = function(params = ""){
   return dataStorage.removeItem(params);
}

export const ClearStorage = function () {
    return dataStorage.clear();
}

export const FindItemStorage = function(params = ""){
    return dataStorage.getItem(params)
}

