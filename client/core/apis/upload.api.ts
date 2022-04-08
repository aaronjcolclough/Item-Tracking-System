import {
  Injectable,
  Optional
} from '@angular/core';

import {
  BehaviorSubject,
  Observable
} from 'rxjs';

import {
  UserImage,
  WebApi
} from '../models';

import {
  SnackerService,
  SyncService
} from '../services';

import { HttpClient } from '@angular/common/http';
import { ServerConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UploadApi {
  api: WebApi;
  defaultUserImage$: Observable<string>;

  constructor(
    private http: HttpClient,
    private snacker: SnackerService,
    private sync: SyncService,
    @Optional() private config: ServerConfig
  ) {
    this.api = new WebApi(http, config, snacker, 'upload');
    this.defaultUserImage$ = this.api.getUrl('getDefaultUserImage');
  }

  //#region UserImage

  private userImage = new BehaviorSubject<UserImage>(null);
  userImage$ = this.userImage.asObservable();

  getUserImage = (userId: number) =>
    this.api.assign(
      `getUserImage/${userId}`,
      this.userImage
    );

  uploadUserImage = (userId: number, form: FormData) =>
    this.api.resolve(
      `uploadUserImage/${userId}`, form,
      () => this.snacker.sendSuccessMessage(`User image successfully saved`)
    );

  removeUserImage = (userId: number) =>
    this.api.action(
      `removeUserImage/${userId}`,
      () => this.snacker.sendSuccessMessage('User image successfully removed')
    );

  //#endregion
}
