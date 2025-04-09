
import React from 'react';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export interface GrowthDataItem {
  year: string;
  clients: number;
}

interface GrowthChartProps {
  growthData: GrowthDataItem[];
}

const GrowthChart = ({ growthData }: GrowthChartProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-16">
      <h3 className="text-xl font-semibold mb-4 text-amc-teal">Client Growth Over Time</h3>
      <div className="h-64">
        <ChartContainer
          config={{
            clients: { theme: { light: "#00878a", dark: "#00b8bd" } },
          }}
        >
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00b8bd" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00b8bd" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis
              tickFormatter={(value) => `${value}K`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 border rounded shadow">
                      <p className="text-sm font-medium">Year: {payload[0].payload.year}</p>
                      <p className="text-sm font-medium text-amc-teal">
                        {payload[0].value}K Clients
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="clients"
              stroke="#00878a"
              strokeWidth={3}
              fill="url(#colorClients)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
