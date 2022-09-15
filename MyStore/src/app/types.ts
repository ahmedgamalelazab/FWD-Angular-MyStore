export interface GenericResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
}
