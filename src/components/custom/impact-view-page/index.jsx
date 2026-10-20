import { useState } from "react"
import ImpactPanel from "../impact-panel"





const ImpactView = ({ data }) => {
    const powers = data.powers

    return (
        <div className="impact-view-content">
            <section className="impact-overview" aria-labelledby="impact-description-heading">
                <div>
                    <h2 id="impact-description-heading">Overview</h2>
                    <p>{data.description}</p>
                </div>
                <div className="impact-summary" aria-label="Entry summary">
                    <span className="impact-summary-item">
                        <strong>Impact</strong>
                        <span>{data.impact}</span>
                    </span>
                    <span className="impact-summary-item">
                        <strong>Powers</strong>
                        <span>{powers.length}</span>
                    </span>
                </div>
            </section>

            <section className="impact-powers" aria-labelledby="impact-powers-heading">
                <div className="impact-section-heading">
                    <h2 id="impact-powers-heading">Powers</h2>
                    <span>{powers.length} {powers.length === 1 ? "ability" : "abilities"}</span>
                </div>
                {powers.length > 0 ? powers.map((power, index) => (
                    <details className="impact-power" key={power.name} open={index === 0}>
                        <summary>
                            <span className="impact-power-name">{power.name}</span>
                            <span className={`impact-power-type ${power.active ? "is-active" : "is-passive"}`}>
                                {power.active ? "Active" : "Passive"}
                            </span>
                        </summary>
                        <div className="impact-power-details">
                            <p>{power.description || "No description provided."}</p>
                            <dl>
                                <div>
                                    <dt>Activation key</dt>
                                    <dd>{power.key || data.key || "None"}</dd>
                                </div>
                                <div>
                                    <dt>Cooldown</dt>
                                    <dd>{power.cooldown} seconds</dd>
                                </div>
                            </dl>
                        </div>
                    </details>
                )) : (
                    <p className="impact-empty-powers">No powers are listed for this entry.</p>
                )}
            </section>
        </div>
    )
}


const ImpactViewPage = ({ title, jsonData, singularTitle = title }) => {
    const [activeData, setActiveData] = useState(null)

    return (
        <>
            <section id="origin-view" className="stone-border">
                {jsonData !== undefined ? jsonData.map((v, i) => {
                    return <ImpactPanel data={v} key={v.name} onClick={() => { setActiveData(v) }} />
                }) : null}

            </section>
            <section id="origin-details" className="stone-border">
                <ImpactPanel id="current_origin" data={
                    {
                        name: activeData === null ? title : activeData.name,
                        impact: activeData === null ? null : activeData.impact
                    }}
                />
                {/* <div className="origin-banner" id="current_origin">
                        <div className="origin-banner-icon" style={activeData ? { backgroundImage: activeData.name ? `url(${icon})` : undefined }}></div>
                        <h1 className="origin-banner-title" id="current_origin_title">{activeData === null ? title : activeData.name}</h1>
                        {activeData ? <div className={`origin-banner-impact impact-${activeData.impact}`}></div> : null}
                    </div> */}
                <div className="main-origin-details">
                    {activeData === null ?
                        <div className="impact-view-content">
                            <section className="impact-overview" aria-labelledby="impact-description-heading">
                                <div>
                                    <h2 id="impact-description-heading"></h2>
                                    <p>Select a {singularTitle} to see more!</p>
                                </div>
                                <div className="impact-summary" aria-label="Entry summary">
                                    <span className="impact-summary-item">
                                        <strong>Impact</strong>
                                        <span>??</span>
                                    </span>
                                    <span className="impact-summary-item">
                                        <strong>Powers</strong>
                                        <span>??</span>
                                    </span>
                                </div>
                            </section>
                        </div>
                             :
                    <ImpactView data={activeData} />
                    }
                </div>
            </section>
        </>
    )
}

export default ImpactViewPage