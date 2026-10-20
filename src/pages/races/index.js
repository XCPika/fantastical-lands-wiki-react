import raceJson from '../../app/data/races/index.json'
import originJsonHandler from "../../middleware/data/classJsonHandler";
import ImpactViewPage from "../../components/custom/impact-view-page";


export default function RacePage() {

    const raceData = originJsonHandler(raceJson);

    return (
        <ImpactViewPage jsonData={raceData} title="Races" singularTitle="Race"/>
    )

}