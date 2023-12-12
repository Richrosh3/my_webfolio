"use client";

import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, SortDescriptor } from "@nextui-org/react";
import { BookData, goodReadsData } from '@/actions/parse-gr-data';

export default function BookReviews() {
  const { reviews } = goodReadsData();
  const [isLoading, setIsLoading] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<{ column: keyof BookData; direction: "ascending" | "descending" } | undefined>(undefined);


  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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

      // If there is a date_read or date_added with a N/A value, I put them at the top of the ascending order or bottom of descending order
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
    <div className='items-center justify-center'
    >
      <Table
        className='overflow-hidden'
        isHeaderSticky
        aria-label="GoodReads Data Table"
        classNames={{
          base: "max-h-[520px] overflow-scroll",
          table: "min-h-[400px]",
        }}
        sortDescriptor={sortDescriptor}
        onSortChange={handleSortChange}
      >
        <TableHeader>
          <TableColumn key="title" className='bg-sky-200' allowsSorting>Title</TableColumn>
          <TableColumn key="author" className='bg-sky-200' allowsSorting>Author</TableColumn>
          <TableColumn key="date_read" className='bg-sky-200' allowsSorting>Date Read</TableColumn>
          <TableColumn key="overall_score" className='bg-sky-200' allowsSorting>Overall Rating</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={sortDescriptor ? sortData(sortDescriptor.column, reviews) : reviews}
          loadingContent={<Spinner color="white" />}
        >
          {(item) => {
            console.log(item)
            return (
              <TableRow
                key={item.title}
                className='hover:bg-sky-100'
              >
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.date_read ? item.date_read.toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell>{item.overall_score}</TableCell>
              </TableRow>
            )
          }}
        </TableBody>
      </Table>
    </div>
  );
}
