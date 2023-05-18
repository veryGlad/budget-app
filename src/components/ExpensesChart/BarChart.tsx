import React, { useEffect, useRef } from 'react';
import {
  axisBottom,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from 'd3';

interface IData {
  label: string;
  value: number;
  isSelected?: boolean;
}

interface BarChartProps {
  data: IData[];
  radius?: number;
}

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}

interface BarsProps {
  data: BarChartProps['data'];
  height: number;
  scaleX: AxisBottomProps['scale'];
  scaleY: AxisLeftProps['scale'];
  radius?: number;
}

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current)
        .call(axisBottom(scale))
        .call((g) => {
          g.selectAll('.domain, .tick line').remove();
          g.selectAll('.tick text').attr('font-size', 13);
        });
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function Bars({ data, height, scaleX, scaleY, radius }: BarsProps) {
  return (
    <>
      {data.map(({ value, label, isSelected }) => {
        return (
          <rect
            rx={radius}
            key={`bar-${label}`}
            x={scaleX(label)}
            y={scaleY(value)}
            width={scaleX.bandwidth()}
            height={height - scaleY(value)}
            fill={isSelected ? '#8234F8' : '#FAFAFA'}
          />
        );
      })}
    </>
  );
}

export const BarChart: React.FC<BarChartProps> = ({ data, radius }) => {
  const margin = { top: 10, right: 0, bottom: 30, left: 0 };
  const width = 360 - margin.left - margin.right;
  const height = 150 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <Bars
          data={data}
          height={height}
          scaleX={scaleX}
          scaleY={scaleY}
          radius={radius}
        />
      </g>
    </svg>
  );
};

export default BarChart;
