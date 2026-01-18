import { Fredoka, Rock_Salt, Rubik } from "next/font/google";

export const inter = Rubik({
    variable: '--font-body'
});

export const fredoka = Fredoka({
    weight: '600',
    variable: '--font-heading'
})

export const rockSalt = Rock_Salt({
    weight: '400',
    variable: '--font-accent'
});