declare module '*&ts-ignore' {
  const value: any
  export = value
}

declare module '*?ts-ignore' {
  const value: any
  export = value
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.jpg' {
  const value: string
  export = value
}
