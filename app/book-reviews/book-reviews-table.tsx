"use client";

import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, SortDescriptor} from "@nextui-org/react";
import Rating from '@mui/material/Rating'
import { BookData, goodReadsData } from '@/actions/parse-gr-data';
import ReviewModal from './review-modal';


export default function BookReviewsTable() {
  const { reviews } = goodReadsData();
  const [isLoading, setIsLoading] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<{ column: keyof BookData; direction: "ascending" | "descending" } | undefined>(undefined);


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
    <Table
      className='overflow-hidden mb-[4rem]'
      isHeaderSticky
      aria-label="GoodReads Data Table"
      classNames={{
        base: "max-h-[700px]",
        table: "min-h-[400px]",
      }}
      sortDescriptor={sortDescriptor}
      onSortChange={handleSortChange}
    >
      <TableHeader
        columns={["Title", "Author", "Date Read", "Stars", "Overall Rating", "Review"]}
      >
        <TableColumn key="title"
          className='bg-sky-200 text-center dark:bg-gray-950 dark:border-black/40'
          allowsSorting
          align='end'
          width={500}
        >
          Title
        </TableColumn>
        <TableColumn
          key="author"
          className='bg-sky-200 text-center pl-10 dark:bg-gray-950'
          allowsSorting
          width={300}>
          Author
        </TableColumn>
        <TableColumn
          key="date_read"
          className='bg-sky-200 text-center pl-9 dark:bg-gray-950'
          allowsSorting
          width={300}
        >
          Date Read
        </TableColumn>
        <TableColumn
          key="stars"
          className='bg-sky-200 text-center pl-4 dark:bg-gray-950'
          width={300}
        >
          Stars
        </TableColumn>
        <TableColumn
          key="overall_score"
          className='bg-sky-200 text-center pl-10 dark:bg-gray-950'
          allowsSorting
          width={300}
        >
          Overall Rating
        </TableColumn>
        <TableColumn
          key="review"
          className='bg-sky-200 text-center dark:bg-gray-950'
          width={300}
        >
          Review
        </TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={sortDescriptor ? sortData(sortDescriptor.column, reviews) : reviews}
        loadingContent={<Spinner color="white" />}
      >
        {(item) => {
          return (
            <TableRow
              key={item.title}
              className='hover:bg-sky-100 hover:dark:bg-gray-950 hover:dark:border-black/40 hover:dark:bg-opacity-30'
            >
              <TableCell className="" >
                {item.title}
              </TableCell>
              <TableCell className="text-center" >
                {item.author}
              </TableCell>
              <TableCell className="text-center" >
                {item.date_read ? item.date_read.toLocaleDateString() : 'N/A'}
              </TableCell>
              <TableCell className="text-center">
                <Rating name="star-rating"
                  value={typeof item.overall_score === 'number' ? item.overall_score : parseFloat(item.overall_score)}
                  precision={.1}
                  readOnly
                  size="large"
                />
              </TableCell>
              <TableCell className="text-center">
                {item.overall_score}
              </TableCell>
              <TableCell className="text-center">
                <ReviewModal {...item}/>
              </TableCell>
            </TableRow>
          )
        }}

      </TableBody>
    </Table>
  );
}