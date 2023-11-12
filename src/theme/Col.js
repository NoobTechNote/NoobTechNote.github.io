import React from 'react';
import MDXContent from '@theme/MDXContent';


export default function Col({col, children}) {
    const percent = col !== 0 ? 100 / col : 100;
    return (
        <div style={{
            width: `${percent}%`,
            float: "left",
            paddingRight: "10px"
        }}>
            <MDXContent>
                {children}
            </MDXContent>
        </div>
    )
}
