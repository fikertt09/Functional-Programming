const { produce } = require('immer');   //install immer library

const dataStore = {            //created a datastore object
    cart: [],
    user: null,
    history: []
  };
  
  function dispatchEvent(event) {
    dataStore.history.push(event);
  
    switch (event.type) {
      case 'ADD_TO_CART':
        dataStore.cart.push(event.payload);
        break;
      case 'REMOVE_FROM_CART':
        dataStore.cart = dataStore.cart.filter(item => item.id !== event.payload.id);
        break;
      case 'LOGIN':
        dataStore.user = event.payload;
        break;
    }
  }
  
  function undoAction() {
    if (dataStore.history.length > 0) {
      const lastEvent = dataStore.history.pop();
      console.log('Undoing last action:', lastEvent);
  
      switch (lastEvent.type) {
        case 'ADD_TO_CART':
          dataStore.cart = dataStore.cart.filter(item => item.id !== lastEvent.payload.id);
          break;
        case 'REMOVE_FROM_CART':
          dataStore.cart.push(lastEvent.payload);
          break;
        case 'LOGIN':
          dataStore.user = null;
          break;
      }
    } else {
      console.log('No more actions to undo.');
    }
  }
  
  // Dispatched events
  dispatchEvent({ type: 'ADD_TO_CART', payload: { id: 1, name: 'Item 1' } });
  dispatchEvent({ type: 'ADD_TO_CART', payload: { id: 2, name: 'Item 2' } });
  dispatchEvent({ type: 'LOGIN', payload: { id: 1, name: 'John Doe' } });
  dispatchEvent({ type: 'REMOVE_FROM_CART', payload: { id: 1, name: 'Item 1' } });
  
  // Undo actions
  undoAction();
  undoAction();
  undoAction();
  undoAction();
