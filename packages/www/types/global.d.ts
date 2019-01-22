declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }

  interface Global extends NodeJS.Global {
    fetch?: any;
  }
}
