export const WriterInterface = Symbol('WriterInferface');
export interface WriterInterface {
  write(msg: string): Promise<void>;
}
