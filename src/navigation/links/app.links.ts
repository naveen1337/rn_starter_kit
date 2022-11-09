import {CommonActions} from '@react-navigation/native';

export const resetTobottomTab = (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'bottomTab',
        },
      ],
    }),
  );
};

export const resetToAuth = (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'auth_stack',
        },
      ],
    }),
  );
};

export const resetToLogin = (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'login',
        },
      ],
    }),
  );
};

export function toPasswordsetUpScreen(navigation: any, payload: any) {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'newpassword',
      params: {user: payload},
    }),
  );
}
