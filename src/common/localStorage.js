export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('newsState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (newsState) => {
    try {
        const serializedState = JSON.stringify(newsState);
        localStorage.setItem('newsState', serializedState);
    } catch {
        // ignore write errors
    }
};