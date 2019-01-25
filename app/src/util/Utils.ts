export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export async function timeout(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
