import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { BookData } from "@/actions/parse-gr-data";

const cleanReview = (review: string | null): string => {
    if(review) {
        const text = review.replace(/<[^>]+>/g, "").replace(/Overall Score: \d+(\.\d+)?\/5/g, "");

        return text;
    }
    return ""
}

export default function ReviewModal(book: BookData) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <React.Fragment>
            <Button onPress={onOpen}>📖</Button>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="sm"
                size="lg"
                classNames={{
                    backdrop: "backdrop-opacity-50",
                    base: "bg-gradient-to-b from-violet-50 to-blue-200 dark:bg-[#19172c] text-black/80",
                    header: "",
                    footer: "",
                }}
                scrollBehavior="inside"
                className="h-[80vh] rounded-3xl"
            >
                <ModalContent>
                            <ModalHeader className="flex flex-col gap-3">
                                <p className="text-2xl">
                                    {book.title}
                                </p>
                                <div className="flow-root">
                                    <p className="float-left">
                                        By: {book.author}
                                    </p>
                                    <p className="float-right">
                                        Overall Score: {book.overall_score}
                                    </p>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                {cleanReview(book.review)}
                            </ModalBody>
                            <ModalFooter className="flow-root font-bold">
                                <p className="float-left">
                                    Date Read: {book.date_read ? book.date_read.toLocaleDateString() : 'N/A'}
                                </p>
                                <p className="float-right">
                                    # pages: {book.number_of_pages}
                                </p>
                            </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}
