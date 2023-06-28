export default class CounterService {
  count = 0;

  getCount(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.count);
      }, 1000);
    });
  }

  postCount(number: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count = number;
        resolve(this.count);
      }, 1000);
    });
  }
}
