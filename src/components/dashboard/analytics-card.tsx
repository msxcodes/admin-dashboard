"use client";
import { IPieCharts } from "@/interfaces/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { ArrowUp } from "lucide-react";

const AnalyticsCard = ({ title, subtitle, growth, growthdes }: IPieCharts) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold">{growth}</h1>
          <span className="flex  text-xs items-center opacity-60">
            {growthdes} <ArrowUp size={16} className="text-green-700" />{" "}
          </span>
          {/* <ResponsiveContainer width="100%" height="100%">
            <PieChart width={200} height={200}>
              <Pie
                dataKey="value"
                startAngle={0}
                endAngle={360}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                label
              />
            </PieChart>
          </ResponsiveContainer> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
