import { IDocument } from "src/document/document.dto";
import { ISpouse } from "src/spouse/spouse.dto";
import { IPersonal } from "src/personal/personal.dto";

export interface IOnboadingResponseDto {
  data: IOnboarding[], count: number
}
export interface IOnboarding {
  id?: string;
  type?: any;
  personal?: IPersonal;
  spouse?: ISpouse;
  documents?: IDocument[]
}