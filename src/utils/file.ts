export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader?.result?.toString().split(',')[1]);
    reader.onerror = (error) => reject(error);
  });

export const toArrayBuffer = (buf: any) => {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  return view.map((x, i) => buf[i]);
};

export const getExtensionTypeOfFile = (name: string) =>
  name.slice(name.lastIndexOf('.'));

export const getFilenameWithoutExtension = (name: string) =>
  name.slice(0, name.lastIndexOf('.'));

export const getFileNameWithExtension = (
  originalName: string,
  name: string
) => {
  const extension = getExtensionTypeOfFile(originalName);
  return `${name}${extension}`;
};

export const getMimeType = (filename: string) => {
  const typeOfFile = getExtensionTypeOfFile(filename);
  switch (typeOfFile) {
    case '.doc':
    case '.DOC':
      return 'application/msword';
    case '.pdf':
    case '.PDF':
      return 'application/pdf';
    case '.png':
    case '.PNG':
      return 'image/png';
    case '.jpeg':
    case '.jpg':
    case '.JPEG':
    case '.JPG':
      return 'image/jpeg';
    case '.json':
    case '.JSON':
      return 'application/json';
    case '.docx':
    case '.DOCX':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case '.txt':
    case '.TXT':
      return 'text/plain';
    default:
      return 'text/plain';
  }
};

export const downloadFromURI = async ({
  name,
  path,
  handleError,
}: {
  name: string;
  path: string;
  handleError: VoidFunction;
}) => {
  const image = await fetch(path).catch((e) => {
    handleError();
    return e;
  });
  if (!image) return;
  const imageBlob = await image.blob();
  const imageURL = URL.createObjectURL(imageBlob);

  const link = document.createElement('a');
  link.href = imageURL;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
