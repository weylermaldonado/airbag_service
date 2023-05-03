export class BaseResponse {
  constructor(
    private success: boolean,
    private statusCode: number,
    private data: any,
    private pagination?: object,
    private requestId?: string
  ) {}

  static fromException(err: any) {
    return new BaseResponse(false, err.statusCode, { message: err.message });
  }
  static ok(data: any): BaseResponse {
    return new BaseResponse(true, 200, data);
  }
  static noContent(data?: any): BaseResponse {
    return new BaseResponse(true, 204, data);
  }

  static created(data: any): BaseResponse {
    return new BaseResponse(true, 201, data);
  }

  static unprocessableEntity(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 422, data, undefined, requestId);
  }

  static badRequest(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 400, data);
  }

  static unauthorized(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 401, data);
  }

  static methodNotAllowed(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 403, data);
  }
  static recordNotFound(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 404, data);
  }

  static internalServerError(data: any, requestId?: string): BaseResponse {
    return new BaseResponse(false, 500, data);
  }

  getSuccess(): boolean {
    return this.success;
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getData(): any {
    return this.data;
  }

  toPrimitive() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      data: this.data,
      requestId: this.requestId,
    };
  }

  setRequestId(id: string): void {
    this.requestId = id;
  }
}
