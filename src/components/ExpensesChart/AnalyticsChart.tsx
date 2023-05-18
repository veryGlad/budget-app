import React from 'react';
import BarChart from './BarChart';
import { useAppSelector } from '../../store/store';

const AnalyticsChart: React.FC = () => {
  const { data } = useAppSelector((state) => ({
    data: state.monthlyAnalyticsSlice.data,
  }));

  const chartData = React.useMemo(() => {
    return data.map((item) => ({
      label: item.month,
      value: item.value,
      isSelected: item.isSelected,
    }));
  }, [data]);

  return <BarChart data={chartData} radius={6} />;
};

export default AnalyticsChart;
