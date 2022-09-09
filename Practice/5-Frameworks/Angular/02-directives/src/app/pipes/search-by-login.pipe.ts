import { Pipe, PipeTransform } from "@angular/core";
import { MemberEntity } from "../model/MemberEntity";

@Pipe({
  name: "searchByLogin",
})
export class SearchByLoginPipe implements PipeTransform {
  transform(members: MemberEntity[], value: string): MemberEntity[] {
    console.log("ejecución de la pipe");
    return members.filter((member) =>
      member.login.toLowerCase().includes(value.toLowerCase())
    );
  }
}
