import AnalyticsBarChart from "@/components/dashboard/analytics-bar-charts";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import AnalyticCharts from "@/components/dashboard/analytics-charts";
import PostTable from "@/components/posts/PostTable";

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4 ">
        <AnalyticsCard
          growth="70+"
          title="Today Analytics"
          subtitle="Today's Growth"
          growthdes="User registered today"
        />
        <AnalyticsCard
          growth="360+"
          title="Weekly Analytics"
          subtitle="Week's Growth"
          growthdes="User registered in last 7 days"
        />
        <AnalyticsCard
          growth="700+"
          title="Monthly Analytics"
          subtitle="Monthly's Growth"
          growthdes="User registered in last 30 days"
        />
      </div>
      <AnalyticCharts />
      <AnalyticsBarChart />
    </div>
  );
}
