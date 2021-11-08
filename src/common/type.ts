export interface Schema{
  name?: string,
  attributes?:Record<string, string|undefined>,
  children?: Schema[]
}
export type ParseJsonBystring =(str:string,defaultValue:any)=>any