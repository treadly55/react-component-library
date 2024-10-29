import React from 'react'

export default function Tag({ edges, type, children }) {
    return (
        <>   
        <span className={`tag tag-${type} ${edges === 'round' ? 'rounded-tag' : 'square-tag'}`}>
            {children}
        </span>
        </>
    )
}
