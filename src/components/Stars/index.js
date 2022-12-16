import React from "react";

function Stars({ items, addStars }) {

  function  starShine(e) {
    for(let i = 0; i < e.currentTarget.id; i++) {
      document.getElementById(`${i+1001}`).style.fill="#000"
    }
  }
  
  function  stardarkness(e) {
    for(let i = 0; i < e.currentTarget.id; i++) {
      document.getElementById(`${i+1001}`).style.fill="gray"
    }
  }

  return(
    <ul className="card-body-stars">
      {items.map((item) => (
        <li key={item.id} id={item.id} 
        onClick={(e) => addStars(e)}      
        onMouseEnter={(e) => starShine(e)}
        onMouseLeave={(e) => stardarkness(e)}>
          <button  >
            <svg 
              id={1000+item.id} fill='gray' height="28" viewBox="0 0 18 18" width="28" xmlns="<http://www.w3.org/2000/svg>">
              <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
              <path d="M0 0h18v18H0z" fill="none"/>
            </svg>                    
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Stars;