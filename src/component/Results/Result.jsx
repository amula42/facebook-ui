import React from 'react'

const Result = ({result}) => {
  console.log(result.toJS().images.original.url);
  return (
    <div>
        <img src={ result.toJS().images.original.url } alt="" />
    </div>
  )
}

export default Result;