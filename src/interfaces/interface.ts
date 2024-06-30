export interface IAnalytics {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface IPieCharts {
  title: string;
  subtitle: string;
  data?: IPieData[];
  growth: string;
  growthdes: string;
}

export interface IPieData {
  name: string;
  value: number;
}

export interface IPosts {
  id: string;
  body: string;
  name: string;
  username: string;
  date: string;
  comments: IComment[];
}

export interface IComment {
  id: string;
  text: string;
  iuser: string;
}
