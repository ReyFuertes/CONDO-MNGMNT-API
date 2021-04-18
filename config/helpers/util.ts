import { HttpException, HttpStatus } from "@nestjs/common";
import { extname } from "path";

export const getFullname = (entity: any) => {
  return `${entity?.firstname} ${entity?.middlename} ${entity?.lastname}`;
}

export function filter (req, file, cb) {
  let ext = extname(file.originalname);
  // if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
  //   return cb(new HttpException('Only images are allowed!', HttpStatus.BAD_REQUEST), null);
  // }
  cb(null, true);
}