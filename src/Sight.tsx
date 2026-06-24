import type { SyntheticEvent } from "react"
import type { sight_t } from "./types"

interface SightProps {
    /**
     * Sight
     */
    sight: sight_t,
    /**
     * Show more information about the sight
     */
    showInfo: () => void,
    /**
     * Sets the sight for which to show more information
     * @param sight Sight for which to show more information
     */
    setSightInfo: (sight: sight_t) => void,
}

export default function Sight({ sight, showInfo, setSightInfo }: SightProps) {
    /**
     * Handles sight name clicks
     * @param _e Click event
     */
    const clickHandler = (_e: SyntheticEvent) => {
        setSightInfo(sight);
        showInfo();
    }

    return <span className="sight" onClick={clickHandler}>
        {sight.what}
    </span>
}