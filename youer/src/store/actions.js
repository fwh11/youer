export const saveSearchHistory = function({commit},query){
  commit(types.SET_SEARCH_HISTORY,saveSearch(query));
} 