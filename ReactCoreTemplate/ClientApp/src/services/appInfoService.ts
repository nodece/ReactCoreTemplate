import { ReduxCreator } from '@banbrick/redux-creator';


export class AppInfoState {
  logoUrl: string;
  isClient: boolean;

  constructor(isClient = true) {
    this.logoUrl = '/media/logo.png';
    this.isClient = isClient;
  }
}

export const appInfoActions = new ReduxCreator('appInfo', new AppInfoState())
  .addReducer<AppInfoState>((state, appInfo) => ({ ...state, appInfo }), 'setAppInfo')
  .build();