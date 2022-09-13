import axios from "axios";
import React, { useState, useEffect } from "react";

var Countries: any = []
async function fetchCountries() {


    Promise.all(
        await axios.get('https://restcountries.com/v3.1/all')
            .then((data: any) => {
                return data.data
            })
    ).then(res => {
        res.map(item => {
            const Country = {
                name: item.name.common,
                area: item.area.toLocaleString(),
                capital: item.capital,
                currencies: item.currencies,
                languages: item.languages,
                population: item.population.toLocaleString(),
                region: item.region,
            }
            Countries.push(Country)
        })
    })
}

export default fetchCountries
export { Countries }
