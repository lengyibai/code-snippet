//获取文件后缀名
export function $getFileSuf(str) {
  return str.replace(/.+\./, "").toLowerCase();
}

//字节格式化
export function $fmtByte(bytes) {
  if (bytes == 0) return [0, "B", "0 B"];
  let k = 1024,
    size = 0,
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  size = (bytes / k ** i).toFixed(2) ? (bytes / k ** i).toFixed(2) : 0;
  return [parseFloat(size), sizes[i], `${size} ${sizes[i]}`];
}

/* 获取文件类型 */
export function $urlFileType(url, type) {
  const obj = {
    image: ["jpeg", "jpg", "png", "webp", "bmp", "gif", "svg"],
    video: ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp"],
  };
  if (type instanceof Array) {
    return type.includes(url.replace(/.+\./, "").toLowerCase());
  } else {
    return obj[type].includes(url.replace(/.+\./, "").toLowerCase());
  }
}
