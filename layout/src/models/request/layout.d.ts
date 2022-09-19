declare namespace Api {
  interface RequestData<T> {
    data: T;
    msg: string;
    success: boolean;
  }
}
