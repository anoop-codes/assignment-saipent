import React, { Component } from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import XYAxis from '../components/axis/xy-axis';
import Line from '../components/line/Line';

class LineChart extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const data = [];
        this.props.data.forEach((news) => {
            data.push({ name: news.objectID, value: news.points })
        });
        this.setState({
            data
        })
    }

    componentWillReceiveProps(nextProps) {
        const data = [];

        nextProps.data.forEach((news) => {
            data.push({ name: news.objectID, value: news.points })
        });

        this.setState({
            data
        })

    }



    render() {
        const { data } = this.state;
        const parentWidth = 1000;

        const margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        };

        const width = parentWidth - margins.left - margins.right;
        const height = 200 - margins.top - margins.bottom;

        const ticks = 5;
        const t = transition().duration(1000);

        const xScale = scaleBand()
            .domain(data.map(d => d.name))
            .rangeRound([0, width]).padding(0.1);

        const yScale = scaleLinear()
            .domain(extent(data, d => d.value))
            .range([height, 0])
            .nice();

        const lineGenerator = line()
            .x(d => xScale(d.name))
            .y(d => yScale(d.value))
            .curve(curveMonotoneX);

        return (
            <div>
                <svg
                    className="lineChartSvg"
                    width={width + margins.left + margins.right}
                    height={height + margins.top + margins.bottom}
                >
                    <g transform={`translate(${margins.left}, ${margins.top})`}>
                        <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                        <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                    </g>
                </svg>
            </div>
        );
    }
}


export default LineChart;