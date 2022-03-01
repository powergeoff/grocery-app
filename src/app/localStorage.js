export const loadStorage = (type) => {
  //type 0 = grocery, 1 = recipe, 2 = onetime
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
  else if (type === 1 ){
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
  else if (type === 2 ){
    try {
      const serializedState = localStorage.getItem('oneTimeList');
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
  //type 0 = grocery, 1 = recipe, 2= oneTime
  if (type === 0) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('groceryList', serializedState);
    } catch {
      // ignore write errors
    }
  }
  else if (type === 1 ){
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('recipeList', serializedState);
    } catch {
      // ignore write errors
    }
  }
  else if (type === 2 ){
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('oneTimeList', serializedState);
    } catch {
      // ignore write errors
    }
  }
  
};

export const clearStorage = () => {
  localStorage.clear();
}