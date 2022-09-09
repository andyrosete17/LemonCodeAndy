import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MemberEntity } from "../model/MemberEntity";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  private members: MemberEntity[] | null;
  constructor(private http: HttpClient) {}

  getAll(): Observable<MemberEntity[]> {
    if (this.members) {
      return of(this.members);
    }

    return this.http
      .get<MemberEntity[]>(`https://api.github.com/orgs/lemoncode/members`)
      .pipe(tap((members) => (this.members = members)));
  }

  getAll_WIthFetch(): Promise<MemberEntity[]> {
    return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
      (response) => response.json()
    );
  }
}
