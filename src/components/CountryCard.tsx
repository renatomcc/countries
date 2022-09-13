import React, { useEffect, useState } from "react";

import '../styles/CountryCard.sass'

type CountryType = {
    name: string,
    area: number,
    capital: string,
    currencies: Currency,
    flag: string,
    languages: string,
    population: number,
    region: string,
}

type Currency = {
    name: string,
    initials: string,
}

export const CountryCard = (props: CountryType) => {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        expanded ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [expanded])

    return (
        <div className="Country-Card">
            {expanded && (
                <div className="expandedBackground" onClick={() => { setExpanded(!expanded) }}>
                    <div className="expanded">
                        <div className="flagExpanded">
                            <img src={props.flag} alt={props.name} />
                        </div>
                        <div className="name">
                            <span>{props.name}</span>
                        </div>
                        <div className="infos">
                            <div className="capital">
                                <label>Capital</label>
                                <span>{props.capital}</span>
                            </div>
                            <div className="currency">
                                <label>Currencies</label>
                                <div className="currenciesNames">
                                    <span>{props.currencies.name}</span>
                                    <span>{props.currencies.initials}</span>
                                </div>
                            </div>
                            <div className="population">
                                <label>Population</label>
                                <span>{props.population}</span>
                            </div>
                            <div className="languages">
                                <label>Languages</label>
                                <span>{props.languages}</span>
                            </div>
                            <div className="region">
                                <label>Region</label>
                                <span>{props.region}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="country" onClick={() => { setExpanded(!expanded) }}>
                <div className="flag">
                    <img src={props.flag} alt={props.name} />
                </div>
                <div className="name">
                    <span>{props.name}</span>
                </div>
            </div>
        </div >
    )
}