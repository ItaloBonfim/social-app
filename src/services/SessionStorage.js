const dataStorage = sessionStorage;

export const AddItemStorage = function (params = {}) {
    return dataStorage.setItem(params.key, params.value);
}

export const RemoveItemStorage = function (params = "") {
    return dataStorage.removeItem(params);
}

export const ClearStorage = function () {
    return dataStorage.clear();
}

export const FindItemStorage = function (params = "") {
    return dataStorage.getItem(params)
}

export const FindItemStorageAsync = async function (params = "") {
    return await dataStorage.getItem(params)
}