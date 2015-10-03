import sqlite from 'react-native-sqlite';
import database from '../db';

export const LOADING_DATA = 'LOADING_DATA';
function loadData() {
    return {
        type: LOADING_DATA
    };
}

export const DATA_LOADED = 'DATA_LOADED';
function dataLoaded(data) {
    return {
        type: DATA_LOADED,
        data
    };
}

export function refreshData() {
    return function (dispatch) {
        dispatch(loadData());

        database.loadData(data => dispatch(dataLoaded(data)));
    }
}

export const ADDING_ITEM = 'ADDING_ITEM';
function addingItem() {
    return {
        type: ADDING_ITEM
    }
}

export const ITEM_ADDED = 'ITEM_ADDED';
function itemAdded(item) {
    return {
        type: ITEM_ADDED,
        item
    }
}

export function addItem(item) {
    return function (dispatch) {
        dispatch(addingItem());

        database.addItem(item, item => dispatch(itemAdded(item)));
    }
}

export const ITEM_SELECTED = 'ITEM_SELECTED';
export function itemSelected(item) {
    return function(dispatch) {
        dispatch({
            type: ITEM_SELECTED,
            item
        });
    }
}

export const UPDATING_ITEM = 'UPDATING_ITEM';
function updatingItem() {
    return {
        type: UPDATING_ITEM
    }
}

export const ITEM_UPDATED = 'ITEM_UPDATED';
function itemUpdated(item) {
    return {
        type: ITEM_UPDATED,
        item
    }
}

export function updateItem(item) {
    return function (dispatch) {
        dispatch(updatingItem());

        database.updateItem(item, item => dispatch(itemUpdated(item)));
    }
}
