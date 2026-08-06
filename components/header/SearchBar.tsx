"use client";


import {
    FiSearch
} from "react-icons/fi";


import {
    useEffect,
    useRef
} from "react";



interface SearchBarProps {

    placeholder?: string;

}



export default function SearchBar({

    placeholder = "Search anything..."

}: SearchBarProps) {


    const inputRef =
        useRef<HTMLInputElement>(null);



    useEffect(() => {


        function handleKeyDown(
            e: KeyboardEvent
        ) {


            if (
                (e.ctrlKey || e.metaKey)
                &&
                e.key.toLowerCase() === "k"
            ) {

                e.preventDefault();

                inputRef.current?.focus();

            }


        }



        window.addEventListener(
            "keydown",
            handleKeyDown
        );



        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        }


    }, []);




    return (

        <div

            className="
                group

                relative

                w-full

                h-12
            "

        >


            <FiSearch

                className="
                    absolute

                    left-5

                    top-1/2

                    -translate-y-1/2

                    text-xl

                    text-muted-foreground

                    group-focus-within:text-primary
                "

            />



            <input

                ref={inputRef}

                type="search"

                placeholder={placeholder}


                className="
                    w-full

                    h-full


                    rounded-2xl


                    border

                    border-border


                    bg-input


                    pl-14


                    pr-24


                    text-sm


                    outline-none


                    focus:border-primary


                    focus:ring-4

                    focus:ring-primary/20


                    transition-all

                "

            />



            <div

                className="
                    hidden

                    lg:flex


                    absolute

                    right-4

                    top-1/2

                    -translate-y-1/2


                    px-2.5

                    py-1


                    rounded-lg


                    border

                    border-border


                    text-xs

                    text-muted-foreground

                    bg-background
                "

            >

                Ctrl K


            </div>


        </div>

    );

}