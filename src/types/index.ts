export type TopicStatus = 'not-started' | 'studying' | 'completed';
export type Subject = { id:string; name:string; short:string; priority:string; topics:string[]; note?:string };
export type UserData = {
  topics: Record<string, TopicStatus>; favorites:string[]; reviews:{id:string;topic:string;subject:string;date:string}[];
  sessions:{id:string;subject:string;topic:string;seconds:number;date:string}[];
  questions:{id:string;subject:string;total:number;correct:number;date:string}[];
  simulations:{id:string;name:string;date:string;total:number;correct:number;minutes:number}[];
  taf:Record<string,string>; settings:{dailyMinutes:number;questionGoal:number;simulationGoal:number}; welcomed:boolean;
};
