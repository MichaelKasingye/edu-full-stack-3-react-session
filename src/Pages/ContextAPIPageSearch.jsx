import React, { useState } from 'react'
// import { actionTypes } from '../ContextAPI/reducer';
// import { useStateValue } from '../ContextAPI/StateProvider';

export default function ContextAPIPageSearch() {
    const [input, setInput] = useState();
    // const [dispatch] = useStateValue();
  
    function search(e) {
      e.preventDefault();
      console.log("you hit seach", input);
  
      // dispatch({
      //   // type: actionTypes.SET_SEARCH_TERM,
      //   type:"Term",
      //   term: input
      // });
    }
  
    return (
      <form className="search">
        <div className="search_input">
          <input
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
  
        <div className="search_buttons">
          <button type="submit"  variant="outlined">
            Noonya Search
          </button>
          <button variant="outlined">
            {" "}
            <a href="https://github.com/MichaelKasingye/Search-Engine-clone">
              Git Hub Repo
            </a>{" "}
          </button>
        </div>
        <div className="search_buttonsHidden">
          <button type="submit" variant="outlined">
            Google Search
          </button>
          <button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    )
}
