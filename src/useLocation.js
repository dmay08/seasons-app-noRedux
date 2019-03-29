import { useState, useEffect } from 'react'

export default () => {
    const [lat, setLat] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition( // 3rd = geoloc is called
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)
            );
        }, []) 

    // return { lat: lat, errorMessage: errorMessage }
    return [lat, errorMessage] // can do either [] or {}, but [] >> allows us to use array destruturing syntax (like lines 4-5)
}