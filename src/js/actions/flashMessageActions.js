import * as types from './types';

export function addFlashMessage(message) {
    return {
        type: types.ADD_FLASH_MESSAGE,
        payload: message
    }
}

export function deleteFlashMessage(id) {
    return {
        type: types.DELETE_FLASH_MESSAGE,
        payload: id
    }
}
