import React from 'react'
import DefaultNavbar from '../navigation/DefaultNavbar'
import DefaultFooter from '../navigation/DefaultFooter'

const PageWrapper = (props) => {
    return (
        <>
            <div className="w-full mainfont">
                <DefaultNavbar />
            </div>
            <main>
                {props.children}

            </main>
            <div className="w-full mainfont">
                <DefaultFooter />
            </div>
        </>
    )

}

export default PageWrapper;