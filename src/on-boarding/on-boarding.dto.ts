import { IDocument } from "src/document/document.dto";
import { IPartner } from "src/partner/partner.dto";
import { IPersonal } from "src/personal/personal.dto";

export interface IOnboarding {
  id?: string;
  type?: any;
  personal?: IPersonal;
  partner?: IPartner;
  document?: IDocument
}