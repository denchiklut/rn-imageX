import React from "react"

const withChildren = fn => Wrapper => {
    return (props) => (
        <Wrapper {...props}>
            {fn}
        </Wrapper>
    )
}

export default withChildren