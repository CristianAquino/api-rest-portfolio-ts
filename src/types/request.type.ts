import { Request } from "express";

export interface RequestExtens<T> extends Request {
  id?: T;
}
