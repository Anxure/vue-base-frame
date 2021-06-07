declare type Recordable<T = any> = Record<string, T>;
declare module '*.png' {
  const src: string
  export default src
}