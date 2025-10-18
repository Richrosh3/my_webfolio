"use client";

import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, SortDescriptor} from "@heroui/react";
import Rating from '@mui/material/Rating'
import { BookData, goodReadsData } from '@/actions/parse-gr-data';
import ReviewModal from './review-modal';


export default function BookReviewsTable() {
  const { reviews } = goodReadsData();
  const [isLoading, setIsLoading] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<{ column: keyof BookData; direction: "ascending" | "descending" }>({ column: 'date_read', direction: 'descending' });


  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSortChange = (descriptor: SortDescriptor) => {
    setSortDescriptor(() => {
      return {
        column: descriptor.column as keyof BookData,
        direction: descriptor.direction as "ascending" | "descending",
      };
    });
  };

  const sortData = (column: keyof BookData, items: BookData[]) => {
    return items.slice().sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      // If there is a date_read or date_added with a N/A value, I put them at the top of the ascending order and bottom of descending order
      if (valueA === 'N/A' && valueB === 'N/A') return 0;
      if (valueA === 'N/A') return sortDescriptor?.direction === 'ascending' ? -Infinity : Infinity;
      if (valueB === 'N/A') return sortDescriptor?.direction === 'ascending' ? Infinity : -Infinity;


      let cmp = 0;

      if (column === 'date_read' || column === 'date_added') {
        const dateA = valueA as Date;
        const dateB = valueB as Date;

        if (dateA < dateB) {
          cmp = -1;
        } else if (dateA > dateB) {
          cmp = 1;
        }
      } else if (column === 'overall_score') {
        const scoreA = typeof valueA === 'number' ? valueA : 0;
        const scoreB = typeof valueB === 'number' ? valueB : 0;

        cmp = scoreA - scoreB;
      } else {
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          cmp = valueA.localeCompare(valueB, undefined, { sensitivity: 'base' });
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          cmp = valueA - valueB;
        }
      }

      if (sortDescriptor?.direction === 'descending') {
        cmp *= -1;
      }

      return cmp;
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Table
        className='overflow-hidden mb-[4rem] shadow-2xl rounded-2xl'
        isHeaderSticky
        aria-label="GoodReads Data Table"
        classNames={{
          base: "max-h-[700px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl",
          table: "min-h-[400px]",
          thead: "[&>tr]:first:rounded-t-2xl sticky top-0 z-10",
          th: "bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 font-bold text-base tracking-wide text-center border-b-2 border-gray-200 dark:border-gray-600 backdrop-blur-lg first:rounded-tl-2xl last:rounded-tr-2xl",
          td: "py-4 text-gray-700 dark:text-gray-300",
          tr: "hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 transition-all duration-200"
        }}
        sortDescriptor={sortDescriptor}
        onSortChange={handleSortChange}
      >
        <TableHeader>
          <TableColumn 
            key="title"
            allowsSorting
            className="text-center px-6 py-5"
          >
            Title
          </TableColumn>
          <TableColumn
            key="author"
            allowsSorting
            className="text-center px-4 py-5"
          >
            Author
          </TableColumn>
          <TableColumn
            key="date_read"
            allowsSorting
            className="text-center px-4 py-5"
          >
            Date Read
          </TableColumn>
          <TableColumn
            key="stars"
            className="text-center px-4 py-5"
          >
            Stars
          </TableColumn>
          <TableColumn
            key="overall_score"
            allowsSorting
            className="text-center px-4 py-5"
          >
            Rating
          </TableColumn>
          <TableColumn
            key="review"
            className="text-center px-4 py-5"
          >
            Review
          </TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={sortDescriptor ? sortData(sortDescriptor.column, reviews) : sortData('date_read', reviews)}
          loadingContent={<Spinner color="primary" size="lg" />}
        >
          {(item) => {
            return (
              <TableRow
                key={item.title}
                className="border-b border-gray-100 dark:border-gray-800 transition-colors duration-200"
              >
                <TableCell className="px-6 py-4 font-medium">
                  <div className="max-w-xs truncate">
                    {item.title}
                  </div>
                </TableCell>
                <TableCell className="text-center px-4 py-4">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {item.author}
                  </div>
                </TableCell>
                <TableCell className="text-center px-4 py-4">
                  <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full inline-block">
                    {item.date_read ? item.date_read.toLocaleDateString() : 'N/A'}
                  </div>
                </TableCell>
                <TableCell className="text-center px-4 py-4">
                  <div className="flex justify-center">
                    <Rating 
                      name="star-rating"
                      value={typeof item.overall_score === 'number' ? item.overall_score : parseFloat(item.overall_score.toString())}
                      precision={0.1}
                      readOnly
                      size="medium"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#fbbf24',
                        },
                        '& .MuiRating-iconEmpty': {
                          color: '#d1d5db',
                        },
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center px-4 py-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200">
                    {item.overall_score}/5
                  </div>
                </TableCell>
                <TableCell className="text-center px-4 py-4">
                  <ReviewModal {...item}/>
                </TableCell>
              </TableRow>
            )
          }}
        </TableBody>
      </Table>
    </div>
  );
}