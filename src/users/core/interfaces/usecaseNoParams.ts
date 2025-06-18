export interface UseCaseNoParams<R> {
  execute(): Promise<R>;
}
