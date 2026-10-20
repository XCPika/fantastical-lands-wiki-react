import classJson from '../../app/data/classes/index.json'
import originJsonHandler from "../../middleware/data/classJsonHandler";
import ImpactViewPage from "../../components/custom/impact-view-page";


export default function ClassPage() {

    const classData = originJsonHandler(classJson);

    return (
        <ImpactViewPage jsonData={classData} title="Classes" singularTitle="Class"/>
    )

}