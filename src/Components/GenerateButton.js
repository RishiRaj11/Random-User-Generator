import React from 'react'
import './GenerateButton.css'
const GenerateButton = (props) => {

    const { userCount, setUserCount } = props;
    const counterHandler = () => {
        if (userCount < 10) {
            setUserCount(userCount + 1)
        }

    }
    return (
        <div className='generateButton'>
            <h2>Random User Generator({userCount}) </h2>
            <button onClick={counterHandler}> Generate!</button>

        </div>
    )
}

export default GenerateButton;