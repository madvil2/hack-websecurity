export const logging = (store: any) => (next: any) => (action: string) => {
    console.info('[BEFORE]]', store.getState());
    console.info('[ACTION]', action);
    next(action);
    console.info('[AFTER]]', store.getState());
};
