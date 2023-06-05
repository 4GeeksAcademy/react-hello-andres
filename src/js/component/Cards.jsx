import React from 'react'

const Cards = () => {
  return (
    <div>
      <div className="card m-3" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://picsum.photos/150/180" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-footer justify-content-center">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </div>
    </div>
  )
}

export default Cards
