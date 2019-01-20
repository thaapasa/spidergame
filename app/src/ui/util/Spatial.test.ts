import 'jest';
import { BoundingBox, Range } from './Spatial';

describe('range', () => {
  it('calculates range intersection', () => {
    expect(Range.intersects(1, 4, 6, 9)).toBe(false);
    expect(Range.intersects(1, 4, 2, 3)).toBe(true);
    expect(Range.intersects(1, 4, 0, 2)).toBe(true);
    expect(Range.intersects(1, 4, 3, 8)).toBe(true);
    expect(Range.intersects(1, 4, 0, 0)).toBe(false);
  });
});

describe('bounding box', () => {
  it('can be created for size at position', () => {
    expect(
      BoundingBox.forSizeAt({ width: 5, height: 7 }, { x: 14, y: 26 })
    ).toMatchObject({ x1: 14, y1: 26, x2: 19, y2: 33 });
  });

  it('tests for intersection', () => {
    const bb = new BoundingBox(1, 2, 5, 6);
    expect(bb.intersects(new BoundingBox(6, 3, 10, 4))).toBe(false);
    expect(bb.intersects(new BoundingBox(3, 3, 4, 4))).toBe(true);
  });
});
