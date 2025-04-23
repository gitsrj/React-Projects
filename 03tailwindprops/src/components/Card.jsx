import React from 'react'

function Card({username, description, btnText = "visit me"}) {
    console.log(username)
  return (
    <div className="card bg-base-100 w-96 shadow-sm mb-4">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{username}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{btnText}</button>
    </div>
  </div>
</div>
  )
}

export default Card;