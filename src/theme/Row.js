import React from 'react';
import MDXContent from '@theme/MDXContent';
import "./Row.css"


export default function Row({children}) {
    return (
        <div className="clearfix" style={{width: "100%"}}>
            <MDXContent>
                {children}
            </MDXContent>
        </div>
    )
}
