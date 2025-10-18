import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import { BookData } from "@/actions/parse-gr-data";
import Rating from '@mui/material/Rating';

const cleanReview = (review: string | null): string => {
    if(review) {
        const text = review.replace(/<[^>]+>/g, "").replace(/Overall Score: \d+(\.\d+)?\/5/g, "");
        return text.trim();
    }
    return ""
}

export default function ReviewModal(book: BookData) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <React.Fragment>
            <Button 
                onPress={onOpen} 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                size="sm"
            >
                📖 Read Review
            </Button>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="lg"
                size="2xl"
                classNames={{
                    backdrop: "backdrop-opacity-60",
                    base: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl",
                    header: "border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-t-3xl",
                    body: "py-6",
                    footer: "border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-3xl"
                }}
                scrollBehavior="inside"
                className="max-h-[75vh] mt-16"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-4 p-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                                {book.title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <span>
                                    <strong>Author:</strong> {book.author}
                                </span>
                                <span>
                                    <strong># Pages:</strong> {book.number_of_pages}
                                </span>
                                <span>
                                    <strong>Date Completed:</strong> {book.date_read ? book.date_read.toLocaleDateString() : 'N/A'}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Rating 
                                    value={typeof book.overall_score === 'number' ? book.overall_score : parseFloat(book.overall_score.toString())}
                                    precision={0.1}
                                    readOnly
                                    size="large"
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#fbbf24',
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            color: '#d1d5db',
                                        },
                                    }}
                                />
                                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                    {book.overall_score}/5
                                </span>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody className="px-6">
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-base">
                                {cleanReview(book.review) || "No review available for this book."}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="p-6">
                        <Button 
                            color="primary" 
                            onPress={() => onOpenChange()}
                            className="ml-auto"
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}
