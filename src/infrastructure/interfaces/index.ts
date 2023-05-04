import { JWTToken } from "../auth/jwt.token";
import { RiddleDTO } from "../dto/riddle.dto";

export interface Service {
  execute(input: RiddleDTO): Object;
}

export interface JWT {
  sign(data: object): Promise<JWTToken>;
  verify(token: JWTToken): Promise<any>;
}
export interface Controller {
  execute(...args: any): Promise<any>;
  getInfo(...args: any): Promise<any>;
}

export interface Repository {
  get(...args: any): Promise<any>;
  getAll(...args: any): Promise<any>;
  update(...args: any): Promise<any>;
  delete(...args: any): Promise<any>;
  create(...args: any): Promise<any>;
}

export interface Riddle {
  validateInput(...args: any): any;
  run(...args: any): string | number | number[];
}
