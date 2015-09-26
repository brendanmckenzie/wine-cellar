const initialState = { items: [] };

export default function Listing(state = initialState, action) {
    switch (action.type) {
        case 'DATA_LOADED':
            return {
                ...state,
                items: action.data
            };

        case 'ITEM_ADDED':
            const items = state.items.slice(0);
            items.push(action.item);

            return {
                ...state,
                items: items
            };

        default:
            return state;
    }
}
