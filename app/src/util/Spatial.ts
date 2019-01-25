export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export class BoundingBox {
  static forSizeAt(size: Size, pos: Position): BoundingBox {
    return new BoundingBox(
      pos.x,
      pos.y,
      pos.x + size.width,
      pos.y + size.height
    );
  }
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  intersects = (other: BoundingBox): boolean => {
    return (
      Range.intersects(this.x1, this.x2, other.x1, other.x2) &&
      Range.intersects(this.y1, this.y2, other.y1, other.y2)
    );
  };
}

export class Range {
  static intersects = (a1: number, a2: number, b1: number, b2: number) =>
    b1 < a2 && b2 > a1;
}

export function getRandomSafePosition(
  forSize: Size,
  areaBounds: Size,
  avoidObjects: BoundingBox[]
): Position {
  do {
    const pos = getRandomPosition(forSize, areaBounds);
    const bbox = BoundingBox.forSizeAt(forSize, pos);
    if (avoidObjects.find(a => a.intersects(bbox)) === undefined) {
      return pos;
    }
  } while (true);
}

export function getRandomPosition(forSize: Size, areaBounds: Size): Position {
  return {
    x: Math.floor(Math.random() * (areaBounds.width - forSize.width)),
    y: Math.floor(Math.random() * (areaBounds.height - forSize.height)),
  };
}
