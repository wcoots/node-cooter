export namespace IsNaughty {
  /**
   *  @name IsNaughty.Response
   *  @param naughty boolean value to determine whether the input is naughty
   *  @param naughtiness numeric value to determine the level of naughtiness
   */
  export interface Response {
    naughty: boolean;
    naughtiness: number;
  }
}
