"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import Papa from 'papaparse';


export function useSectionInView(sectionName: SectionName, threshold = .75) {
    const { ref, inView } = useInView({
        threshold
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref, inView
    };
}


type Callback = (data: any) => void;

export function useFetch() {
    const sanitizeColumns = (data: any) => {
        return data.map((item: any) => {
            const sanitizedItem: any = {}; 

            Object.keys(item).forEach(key => {
                const sanitizedKey = key.toLowerCase().replace(/(\s|-)+/g , '_');
                sanitizedItem[sanitizedKey] = item[key];
            })

            return sanitizedItem;
        })
    }

    const fetchCSVdata = async (filePath: string, callback: Callback) => {
        console.log(filePath);
        const response = await fetch(filePath);
        const reader = response.body!.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csvString = decoder.decode(result.value!);
        const { data } = Papa.parse(csvString,
            {
                header: true,
                dynamicTyping: true,
            });

        const sanitizedData = sanitizeColumns(data);
        callback(sanitizedData);
    }

    return { fetchCSVdata }
}