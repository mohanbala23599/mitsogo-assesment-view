import React, { useEffect, useState } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css'

const CmnChart = React.memo((props) => {
    const [data, setData] = useState({
        columns: [],
        type: '',
        labels: false
    })

    useEffect(() => {
        setData({
            columns: props.data,
            type: props.type,
            labels: props.showLabels
        })
    }, [props.data, props.type, props.showLabels])

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.location.reload(false)
        });
    }, [data])

    return (
        <>
            <C3Chart data={data} size={{ height: props.height }} axis={{
                x: {
                    show: props.showXaxis
                },
                y: {
                    show: props.showYaxis
                }
            }} grid={{
                x: {
                    show: props.showGridX
                },
                y: {
                    show: props.showGridY
                }
            }}
            />
        </>
    )
})

export default CmnChart