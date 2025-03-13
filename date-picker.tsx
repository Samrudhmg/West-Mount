"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export function DatePicker({
    onChange,
}: {
    onChange: (date: Date | undefined) => void;
}) {
    const [date, setDate] = React.useState<Date | undefined>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-start text-left relative  text-gray-700 border border-gray-300 h-12 px-4 shadow-sm focus:ring-2 focus:ring-teal-500"
                >
                    <CalendarIcon className="w-5 h-5 absolute right-0 mr-2 text-black" />
                    {date ? format(date, "dd/MM/yyyy") : "Select a date"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        onChange(selectedDate);
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
