export const loadStorage = (type) => {
  //type 0 = grocery, 1 = recipe
  if (type === 0) {
    try {
      const serializedState = localStorage.getItem('groceryList');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }
  else {
    try {
      const serializedState = localStorage.getItem('recipeList');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }
  
}; 

export const saveStorage = (state, type) => {
  //type 0 = grocery, 1 = recipe
  if (type === 0) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('groceryList', serializedState);
    } catch {
      // ignore write errors
    }
  }
  else {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('recipeList', serializedState);
    } catch {
      // ignore write errors
    }
  }
  
};

export const clearStorage = () => {
  localStorage.clear();
}