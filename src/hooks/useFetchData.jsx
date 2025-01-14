import React, { useEffect, useState } from 'react';

const useFetchData = (text) => {
    // console.log(text)
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/${text}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [text])
    return category
};

export default useFetchData;