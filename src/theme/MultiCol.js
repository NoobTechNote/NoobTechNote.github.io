import React from 'react';
import MDXContent from '@theme/MDXContent';


export default function MultiCol({col, children}) {
    const percent = 100 / col;
    return (
    <div style={{
        width: `${percent}%`,
        "float": "left",
        clear: "right",
        paddingRight: "10px"}}>
        <MDXContent>
            {children}
        </MDXContent>
    </div>
    )
}
