export namespace IsNaughty {
  /**
   *  @name IsNaughty.Response
   *  @param input the input value
   *  @param naughty boolean value to determine whether the input is naughty
   *  @param naughtiness numeric value to determine the level of naughtiness
   */
  export interface Response {
    input: string;
    naughty: boolean;
    naughtiness: number;
  }
}
