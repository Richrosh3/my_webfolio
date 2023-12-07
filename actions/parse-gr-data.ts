"use client";

import { useEffect, useState } from "react";
import { useFetch } from "@/lib/hooks";

type BookData = {
    title: string,
    author: string,
    date_added: string,
    date_read: string,
    rating: number,
    review: string,
    number_of_pages: string,
    publication_year: number
}

export const goodReadsData = () => {
    const [data, setData] = useState<any[]>([]);
    const { fetchCSVdata } = useFetch();

    useEffect(() => {
        fetchCSVdata('/goodreads_data.csv', setData);
    }, [])

    const readBooks = data.filter((item) => item.exclusive_shelf === "read");

    const filteredData = readBooks.map(
        (item): BookData => ({
            title: item.title,
            author: item.author,
            date_added: item.date_added,
            date_read: item.date_read,
            rating: item.my_rating,
            review: item.my_review,
            number_of_pages: item.number_of_pages,
            publication_year: item.original_publication_year
        })
    );

    return {
        filteredData
    }
}