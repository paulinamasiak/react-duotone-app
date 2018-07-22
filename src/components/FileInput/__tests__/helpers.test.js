import { isAcceptedFile } from '../helpers';

describe('isAcceptedFile function', () => {
  it('should return false when called without a file', () => {
    // when & then
    expect(isAcceptedFile(undefined, 'image/jpeg')).toBe(false);
    expect(isAcceptedFile(null, 'video/*')).toBe(false);
    expect(isAcceptedFile({}, '.jpeg')).toBe(false);
  });

  it('should return true when called without an accept', () => {
    // given
    const file = {
      name: 'test.jpg',
      type: 'image/jpeg',
    };

    // when & then
    expect(isAcceptedFile(file, undefined)).toBe(true);
    expect(isAcceptedFile(file, null)).toBe(true);
    expect(isAcceptedFile(file, '')).toBe(true);
  });

  it('should properly validate when called with a single mime type', () => {
    // given
    const file = {
      name: 'test.png',
      type: 'image/png',
    };

    // when & then
    expect(isAcceptedFile(file, 'image/png')).toBe(true);
    expect(isAcceptedFile(file, 'image/jpeg')).toBe(false);
  });

  it('should propely validate when called with multiple mime types', () => {
    // given
    const file = {
      name: 'test.mp4',
      type: 'audio/mp4',
    };

    // when & then
    expect(isAcceptedFile(file, 'image/png,audio/mp4,audio/it')).toBe(true);
    expect(isAcceptedFile(file, 'image/png,audio/mod,audio/it')).toBe(false);
  });

  it('should propely validate when called with a single base mime type', () => {
    // given
    const file = {
      name: 'test.bmp',
      type: 'image/bmp',
    };

    // when & then
    expect(isAcceptedFile(file, 'image/*')).toBe(true);
    expect(isAcceptedFile(file, 'video/*')).toBe(false);
  });

  it('should propely validate when called with multiple base mime types', () => {
    // given
    const file = {
      name: 'test.pdf',
      type: 'application/pdf',
    };

    // when & then
    expect(isAcceptedFile(file, 'application/*, image/*, video/*')).toBe(true);
    expect(isAcceptedFile(file, 'image/*, audio/*, text/*')).toBe(false);
  });

  it('should propely validate when called with a single extensions', () => {
    // given
    const file = {
      name: 'test.mpg',
      type: 'video/mpeg',
    };

    // when & then
    expect(isAcceptedFile(file, '.mpg')).toBe(true);
    expect(isAcceptedFile(file, '.pdf')).toBe(false);
  });

  it('should properly validate when called with multiple extensions', () => {
    // given
    const file = {
      name: 'test.mp3',
      type: 'audio/mpeg3',
    };

    // when & then
    expect(isAcceptedFile(file, '.pdf, .png, .mp3')).toBe(true);
    expect(isAcceptedFile(file, '.pdf, .png, .mp2')).toBe(false);
  });

  it('should propely validate when called with mixed mime types, base mime types and extensions', () => {
    // given
    const file = {
      name: 'test.mid',
      type: 'audio/midi',
    };

    // when & then
    expect(isAcceptedFile(file, '.mid, image/*, video/avi')).toBe(true);
    expect(isAcceptedFile(file, '.pdf, audio/*, video/mpeg3')).toBe(true);
    expect(isAcceptedFile(file, '.doc, image/*, audio/midi')).toBe(true);
    expect(isAcceptedFile(file, '.mp3, video/*, image/jpeg')).toBe(false);
    expect(isAcceptedFile(file, 'audio/mp3, image/*, .doc')).toBe(false);
  });
});
