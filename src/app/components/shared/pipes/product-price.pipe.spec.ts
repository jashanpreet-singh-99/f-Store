import { ProductPricePipe } from './product-price.pipe';

describe('ProductPricePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPricePipe();
    expect(pipe).toBeTruthy();
  });
});
