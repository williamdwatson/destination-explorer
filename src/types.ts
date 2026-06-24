export type sight_t = {
    /**
     * What the sight is
     */
    what: string,
    /**
     * Sight description
     */
    description?: string,
    /**
     * Image(s) to show
     */
    image?: string|string[]
}

export type column_t = {
    [header: string]: sight_t[]
}

type day_t = {
    /**
     * Primary location of the day
     */
    where: string,
    /**
     * Note associated with the day
     */
    note?: string,
    /**
     * List of sights to see
     */
    sights: sight_t[] | column_t
}

export type destinations_t = {
    /**
     * Destination name
     */
    [destination: string]: {
        icon?: string,
        /**
         * Overall note on the destination
         */
        note?: string,
        /**
         * HTML to display
         */
        html?: string,
        /**
         * List of possible days in the itinerary
         */
        days?: day_t[],
    }
}