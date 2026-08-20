import type {ReactNode} from 'react';
import {AlertTriangle, ChevronRight} from 'lucide-react';
export function PageHeader({eyebrow='PREPARAÇÃO PRÉ-EDITAL',title,desc,children}:{eyebrow?:string;title:string;desc?:string;children?:ReactNode}){return <header className="page-head"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{desc&&<p>{desc}</p>}</div>{children}</header>}
export function Alert({children,kind='warning'}:{children:ReactNode;kind?:'warning'|'info'}){return <div className={`alert ${kind}`}><AlertTriangle size={18}/><div>{children}</div></div>}
export function Progress({value}:{value:number}){return <div className="progress" aria-label={`${value}% concluído`}><i style={{width:`${Math.min(100,value)}%`}}/></div>}
export function Stat({label,value,hint}:{label:string;value:string|number;hint?:string}){return <article className="stat"><span>{label}</span><strong>{value}</strong>{hint&&<small>{hint}</small>}</article>}
export function Empty({title,desc}:{title:string;desc:string}){return <div className="empty"><div className="empty-mark"/><h3>{title}</h3><p>{desc}</p></div>}
export function RowLink({title,meta,onClick}:{title:string;meta:string;onClick?:()=>void}){return <button className="row-link" onClick={onClick}><span><strong>{title}</strong><small>{meta}</small></span><ChevronRight size={18}/></button>}
