import type {UserData} from '../types';
export const initialData:UserData={topics:{},favorites:[],reviews:[],sessions:[],questions:[],simulations:[],taf:{},settings:{dailyMinutes:180,questionGoal:30,simulationGoal:65},welcomed:false};
const KEY='cbmms-pre-edital-v1';
export function load():UserData{try{return {...initialData,...JSON.parse(localStorage.getItem(KEY)||'{}'),settings:{...initialData.settings,...JSON.parse(localStorage.getItem(KEY)||'{}').settings}}}catch{return initialData}}
export const save=(data:UserData)=>localStorage.setItem(KEY,JSON.stringify(data));
export const clear=()=>localStorage.removeItem(KEY);
