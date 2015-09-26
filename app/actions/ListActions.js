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
