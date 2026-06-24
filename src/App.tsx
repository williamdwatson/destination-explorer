import "./App.css";
import { TabPanel, TabView } from "primereact/tabview";
import { DESTINATIONS } from "./example-destinations";
import { Accordion, AccordionTab } from "primereact/accordion";
import type { sight_t, column_t } from "./types";
import Sight from "./Sight";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ICONS } from "./example-icons";

export default function App() {
    const [sightInfo, setSightInfo] = useState<sight_t | null>(null);
    const [showSight, setShowSight] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number[]>([]);

    /**
     * Callback to change the tab index
     * @param idx New tab index
     */
    const changeTab = (idx: number) => {
        setActiveTab(idx);
        const key = Object.keys(DESTINATIONS)[idx];
        setActiveIndex(Array.from(Array(DESTINATIONS[key]?.days?.length ?? 0).keys()));
    }

    /**
     * Callback to hide the sight information popup
     */
    const hideSight = () => {
        setImageIndex(0);
        setShowSight(false);
    }

    return  <>
    <Dialog header={sightInfo?.what} visible={showSight} onHide={hideSight} dismissableMask>
        {sightInfo?.description}
        {sightInfo?.image && !Array.isArray(sightInfo.image) ? <div className="sight-image-container">
            <img src={sightInfo.image} className="sight-image" />
        </div>
        : sightInfo?.image ? <div className="sight-images-container">
            <Button
                icon="pi pi-chevron-left"
                text
                disabled={imageIndex === 0}
                onClick={() => setImageIndex(Math.max(imageIndex-1, 0))}
            />
            <img src={(sightInfo.image as string[])[imageIndex]} className="sight-image" />
            <Button
                icon="pi pi-chevron-right"
                text
                disabled={imageIndex === (sightInfo.image as string[]).length-1}
                onClick={() => setImageIndex(prev => Math.min(prev+1, (sightInfo.image as string[]).length-1))}
            />
        </div>
        : null}
    </Dialog>
    <TabView activeIndex={activeTab} onTabChange={e => changeTab(e.index)}>
        {Object.entries(DESTINATIONS).map(([destination, info]) =>
        <TabPanel header={<span className="tab-header">{destination}</span>} key={`tab-${destination}`} leftIcon={info.icon ? ICONS[info.icon as keyof typeof ICONS] : <svg height="20" width="0"></svg>}>
            {info.note && <i className="destination-note">{info.note}</i>}
            {info.html && <div dangerouslySetInnerHTML={{__html: info.html}} />}
            {info.days && <Accordion multiple activeIndex={activeIndex} onTabChange={e => setActiveIndex(e.index as number[])}>
                {info.days.map((day, i) => <AccordionTab header={`${day.where} - Day ${i+1}`} key={`${destination}-day-${i}-${day.where}`}>
                    {day.note && <i>{day.note}</i>}
                    {Array.isArray(day.sights) ? <div>
                        {day.sights.map(sight => <div>
                            <Sight sight={sight} showInfo={() => setShowSight(true)} setSightInfo={setSightInfo} />
                        </div>)}
                    </div>
                    : <table className="sight-table">
                        <thead>
                            <tr>
                                {Object.keys(day.sights).map(header =>
                                <th key={`${destination}-column-day-${i}-${header}`}>
                                    {header}
                                </th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(Array(Math.max(...Object.values(day.sights).map(s => s.length))).keys()).map(j =>
                            <tr key={`${destination}-day-${i}-row-${j}`}>
                                {Object.values(day.sights as column_t).map(sights => j >= sights.length ? <td key={`${destination}-day-${i}-row-${j}-empty`}></td> :
                                <td key={`${destination}-day-${i}-row-${j}-${sights[j].what}`}>
                                    <Sight sight={sights[j]} showInfo={() => setShowSight(true)} setSightInfo={setSightInfo} />
                                </td>
                                )}
                            </tr>)}
                        </tbody>
                    </table>}
                </AccordionTab>)}
            </Accordion>}
        </TabPanel>)}
    </TabView>
    </>
}