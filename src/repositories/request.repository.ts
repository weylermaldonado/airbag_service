import { Repository } from "@/infrastructure/interfaces";
import { TYPES } from "@/infrastructure/types";
import { inject, injectable } from "inversify";
import { Model } from "mongoose";

@injectable()
export class RequestRepository implements Repository {
  constructor(@inject(TYPES.Request) private readonly request: Model<any>) {
    request = this.request;
  }
  get(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getAll(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(...args: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: any): Promise<any> {
    return this.request.create(data);
  }
}
