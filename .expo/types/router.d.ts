/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/(tabs)\Dashboard` | `/(tabs)\Profile` | `/(tabs)\Settings` | `/(tabs)\profile` | `/(tabs)\settings` | `/Login` | `/Register` | `/_sitemap` | `/explore` | `/login` | `/register`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
