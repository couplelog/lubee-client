// src/@common/types/rolldate.d.ts
interface RolldateOptions {
  el: string;
  format: string;
  minStep: number;
  beginYear: number;
  endYear: number;
  trigger: string;
  lang: {
    title: string;
    cancel: string;
    confirm: string;
  };
  value: string;
  confirm?: (date: string) => void;
}

declare module "../../onboarding/components/rolldate/rolldate.es.js" {
  export default class Rolldate {
    constructor(options: RolldateOptions);
  }
}
