import { isEmpty } from 'lodash';

export const isAcceptedFile = (file, accept) => {
  if (isEmpty(accept)) {
    return true;
  }

  if (isEmpty(file)) {
    return false;
  }

  const acceptedTypes = accept.split(',');
  const fileName = file.name;
  const fileType = file.type;

  return acceptedTypes.some((type) => {
    const validType = type.trim();

    if (validType.startsWith('.')) {
      return fileName.endsWith(validType);
    }

    if (validType.endsWith('/*')) {
      return fileType.startsWith(validType.replace(/\/.*$/, ''));
    }

    return fileType === validType;
  });
};
