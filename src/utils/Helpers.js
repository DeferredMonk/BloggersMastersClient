import format from "date-fns/format"

export const dateToFinnishFormat = (date) => format(date, "d.M.yyyy HH.mm")
