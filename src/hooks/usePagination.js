import { useState, useEffect } from 'react';
import fetchPage from "../services/fetchPage";

const UsePagination = (items, contentType) => {
    const [allItems, setAllItems] = useState(items)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (currentPage > 1) {
            setLoading(true)
            fetchPage(currentPage, contentType)
                .then(response => {
                    setLoading(false)
                    setAllItems(prevItems => [...prevItems, ...response.data.items])
                })

        }
    }, [contentType, currentPage])

    function nextPage() {
        setCurrentPage(prevPage => prevPage + 1)
    }

    return [allItems, currentPage, nextPage, loading]
};

export default UsePagination;