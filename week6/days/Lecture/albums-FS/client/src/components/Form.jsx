import React, { useState } from 'react';

const Form = (props) => {
    const {album, changeHandler,submitHandler, errors} = props
    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" value={album.title} onChange={changeHandler} placeholder='Album Title...' name='title' />
                {
                    errors.title ?
                        <p className='text-danger'>{errors.title.message}</p> :
                        null
                }
            </div>
            <div>
                <input type="text" value={album.artist} onChange={changeHandler} placeholder='Artist...' name='artist'/>
                {
                    errors.artist ?
                        <p className='text-danger'>{errors.artist.message}</p> :
                        null
                }
            </div>
            <div>
                <input type="text" value={album.releaseYear} onChange={changeHandler} placeholder='Release Year...' name='releaseYear'/>
                {
                    errors.releaseYear ?
                        <p className='text-danger'>{errors.releaseYear.message}</p> :
                        null
                }
            </div>
            <div>
                <label>Explicit? </label>
                <input type="checkbox" checked={album.isExplicit} onChange={changeHandler} placeholder='IsExplicit...' name='isExplicit'/>
                {
                    errors.isExplicit ?
                        <p className='text-danger'>{errors.isExplicit.message}</p> :
                        null
                }
            </div>
            <button>Add</button>
        </form>
    )
}

export default Form;