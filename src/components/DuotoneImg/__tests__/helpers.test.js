import { hexToRgb } from '../helpers';

describe('hexToRgb function', () => {
  it('shloud return null when hex is not valid', () => {
    expect(hexToRgb('#gf00ff')).toBe(null);
    expect(hexToRgb('#af00f')).toBe(null);
    expect(hexToRgb('450000')).toBe(null);
  });

  it('should transform red color correctly', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(hexToRgb('#af0000')).toEqual({ r: 175, g: 0, b: 0 });
    expect(hexToRgb('#450000')).toEqual({ r: 69, g: 0, b: 0 });
  });

  it('should transform green color correctly', () => {
    expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(hexToRgb('#00af00')).toEqual({ r: 0, g: 175, b: 0 });
    expect(hexToRgb('#004500')).toEqual({ r: 0, g: 69, b: 0 });
  });

  it('should transform blue color correctly', () => {
    expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
    expect(hexToRgb('#0000af')).toEqual({ r: 0, g: 0, b: 175 });
    expect(hexToRgb('#000045')).toEqual({ r: 0, g: 0, b: 69 });
  });

  it('should transform mixed color correctly', () => {
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#af5646')).toEqual({ r: 175, g: 86, b: 70 });
  });
});
