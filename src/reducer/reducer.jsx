import React from 'react';

const reducer = (state,{type,payload}) => {
    switch (type) {
        case "SET_SURAHS": {
            return {
              ...state,
              surah: [...state.surah, payload],
            };
          }
    
        default: return state;
    }
};

export default reducer;