"use client";

import { useEffect, useState } from "react";
import { useFetch } from "@/lib/hooks";
import { reviewCorrection } from "@/app/book-reviews/reviews-corrections";

export type BookData = {
    title: string,
    author: string,
    date_added: Date | null,
    date_read: Date | null,
    rating: number,
    review: string,
    number_of_pages: string,
    publication_year: number,
    overall_score: number | string
}

const formatDate = (dateString: string | null): Date | null => {
    if (dateString) {
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }
    return null;
};



export const extractOverallScore = (review: string): number | string => {
    const match = review.match(/Overall Score: (\d+(\.\d+)?)\/5/);

    if (match && match[1]) {
        return parseFloat(match[1]);
    }

    return "N/A";
};

export const goodReadsData = () => {
    const [data, setData] = useState<any[]>([]);
    const { fetchCSVdata } = useFetch();

    useEffect(() => {
        fetchCSVdata('/goodreads_data.csv', setData);
    }, [])

    const readBooks = data.filter((item) => item.exclusive_shelf === "read");

    const filteredData = readBooks.map(

        (item): BookData => (
            {
                title: item.title,
                author: item.author,
                date_added: formatDate(item.date_added),
                date_read: formatDate(item.date_read),
                rating: item.my_rating,
                review: item.my_review,
                number_of_pages: item.number_of_pages,
                publication_year: item.original_publication_year,
                overall_score: extractOverallScore(item.my_review)
            })

    );

    const reviews = filteredData.map((item: BookData) => reviewCorrection(item));



    return {
        reviews
    }
}