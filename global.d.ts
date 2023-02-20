declare global {
  const PACKAGE_NAME: string;
  const PACKAGE_VERSION: string;
}

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module '*?url' {
  const content: string;
  export default content;
}

export {};
