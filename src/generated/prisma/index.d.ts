
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Passport
 * 
 */
export type Passport = $Result.DefaultSelection<Prisma.$PassportPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ImportHistory
 * 
 */
export type ImportHistory = $Result.DefaultSelection<Prisma.$ImportHistoryPayload>
/**
 * Model PassportImport
 * 
 */
export type PassportImport = $Result.DefaultSelection<Prisma.$PassportImportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Passports
 * const passports = await prisma.passport.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Passports
   * const passports = await prisma.passport.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.passport`: Exposes CRUD operations for the **Passport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passports
    * const passports = await prisma.passport.findMany()
    * ```
    */
  get passport(): Prisma.PassportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importHistory`: Exposes CRUD operations for the **ImportHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportHistories
    * const importHistories = await prisma.importHistory.findMany()
    * ```
    */
  get importHistory(): Prisma.ImportHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passportImport`: Exposes CRUD operations for the **PassportImport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PassportImports
    * const passportImports = await prisma.passportImport.findMany()
    * ```
    */
  get passportImport(): Prisma.PassportImportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Passport: 'Passport',
    Notification: 'Notification',
    ImportHistory: 'ImportHistory',
    PassportImport: 'PassportImport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "passport" | "notification" | "importHistory" | "passportImport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Passport: {
        payload: Prisma.$PassportPayload<ExtArgs>
        fields: Prisma.PassportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          findFirst: {
            args: Prisma.PassportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          findMany: {
            args: Prisma.PassportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          create: {
            args: Prisma.PassportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          createMany: {
            args: Prisma.PassportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          delete: {
            args: Prisma.PassportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          update: {
            args: Prisma.PassportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          deleteMany: {
            args: Prisma.PassportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>[]
          }
          upsert: {
            args: Prisma.PassportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportPayload>
          }
          aggregate: {
            args: Prisma.PassportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassport>
          }
          groupBy: {
            args: Prisma.PassportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassportCountArgs<ExtArgs>
            result: $Utils.Optional<PassportCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ImportHistory: {
        payload: Prisma.$ImportHistoryPayload<ExtArgs>
        fields: Prisma.ImportHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          findFirst: {
            args: Prisma.ImportHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          findMany: {
            args: Prisma.ImportHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>[]
          }
          create: {
            args: Prisma.ImportHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          createMany: {
            args: Prisma.ImportHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>[]
          }
          delete: {
            args: Prisma.ImportHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          update: {
            args: Prisma.ImportHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ImportHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ImportHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportHistoryPayload>
          }
          aggregate: {
            args: Prisma.ImportHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportHistory>
          }
          groupBy: {
            args: Prisma.ImportHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ImportHistoryCountAggregateOutputType> | number
          }
        }
      }
      PassportImport: {
        payload: Prisma.$PassportImportPayload<ExtArgs>
        fields: Prisma.PassportImportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassportImportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassportImportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          findFirst: {
            args: Prisma.PassportImportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassportImportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          findMany: {
            args: Prisma.PassportImportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>[]
          }
          create: {
            args: Prisma.PassportImportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          createMany: {
            args: Prisma.PassportImportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassportImportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>[]
          }
          delete: {
            args: Prisma.PassportImportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          update: {
            args: Prisma.PassportImportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          deleteMany: {
            args: Prisma.PassportImportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassportImportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassportImportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>[]
          }
          upsert: {
            args: Prisma.PassportImportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassportImportPayload>
          }
          aggregate: {
            args: Prisma.PassportImportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassportImport>
          }
          groupBy: {
            args: Prisma.PassportImportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassportImportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassportImportCountArgs<ExtArgs>
            result: $Utils.Optional<PassportImportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    passport?: PassportOmit
    notification?: NotificationOmit
    importHistory?: ImportHistoryOmit
    passportImport?: PassportImportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PassportCountOutputType
   */

  export type PassportCountOutputType = {
    notifications: number
  }

  export type PassportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | PassportCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * PassportCountOutputType without action
   */
  export type PassportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportCountOutputType
     */
    select?: PassportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassportCountOutputType without action
   */
  export type PassportCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Passport
   */

  export type AggregatePassport = {
    _count: PassportCountAggregateOutputType | null
    _avg: PassportAvgAggregateOutputType | null
    _sum: PassportSumAggregateOutputType | null
    _min: PassportMinAggregateOutputType | null
    _max: PassportMaxAggregateOutputType | null
  }

  export type PassportAvgAggregateOutputType = {
    id: number | null
  }

  export type PassportSumAggregateOutputType = {
    id: number | null
  }

  export type PassportMinAggregateOutputType = {
    id: number | null
    passportNumber: string | null
    status: string | null
    email: string | null
    phoneNumber: string | null
    receivedAt: Date | null
    withdrawnAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportMaxAggregateOutputType = {
    id: number | null
    passportNumber: string | null
    status: string | null
    email: string | null
    phoneNumber: string | null
    receivedAt: Date | null
    withdrawnAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportCountAggregateOutputType = {
    id: number
    passportNumber: number
    status: number
    email: number
    phoneNumber: number
    receivedAt: number
    withdrawnAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassportAvgAggregateInputType = {
    id?: true
  }

  export type PassportSumAggregateInputType = {
    id?: true
  }

  export type PassportMinAggregateInputType = {
    id?: true
    passportNumber?: true
    status?: true
    email?: true
    phoneNumber?: true
    receivedAt?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportMaxAggregateInputType = {
    id?: true
    passportNumber?: true
    status?: true
    email?: true
    phoneNumber?: true
    receivedAt?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportCountAggregateInputType = {
    id?: true
    passportNumber?: true
    status?: true
    email?: true
    phoneNumber?: true
    receivedAt?: true
    withdrawnAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passport to aggregate.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passports
    **/
    _count?: true | PassportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassportMaxAggregateInputType
  }

  export type GetPassportAggregateType<T extends PassportAggregateArgs> = {
        [P in keyof T & keyof AggregatePassport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassport[P]>
      : GetScalarType<T[P], AggregatePassport[P]>
  }




  export type PassportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassportWhereInput
    orderBy?: PassportOrderByWithAggregationInput | PassportOrderByWithAggregationInput[]
    by: PassportScalarFieldEnum[] | PassportScalarFieldEnum
    having?: PassportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassportCountAggregateInputType | true
    _avg?: PassportAvgAggregateInputType
    _sum?: PassportSumAggregateInputType
    _min?: PassportMinAggregateInputType
    _max?: PassportMaxAggregateInputType
  }

  export type PassportGroupByOutputType = {
    id: number
    passportNumber: string
    status: string
    email: string | null
    phoneNumber: string | null
    receivedAt: Date
    withdrawnAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PassportCountAggregateOutputType | null
    _avg: PassportAvgAggregateOutputType | null
    _sum: PassportSumAggregateOutputType | null
    _min: PassportMinAggregateOutputType | null
    _max: PassportMaxAggregateOutputType | null
  }

  type GetPassportGroupByPayload<T extends PassportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassportGroupByOutputType[P]>
            : GetScalarType<T[P], PassportGroupByOutputType[P]>
        }
      >
    >


  export type PassportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    status?: boolean
    email?: boolean
    phoneNumber?: boolean
    receivedAt?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | Passport$notificationsArgs<ExtArgs>
    _count?: boolean | PassportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    status?: boolean
    email?: boolean
    phoneNumber?: boolean
    receivedAt?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportNumber?: boolean
    status?: boolean
    email?: boolean
    phoneNumber?: boolean
    receivedAt?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passport"]>

  export type PassportSelectScalar = {
    id?: boolean
    passportNumber?: boolean
    status?: boolean
    email?: boolean
    phoneNumber?: boolean
    receivedAt?: boolean
    withdrawnAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passportNumber" | "status" | "email" | "phoneNumber" | "receivedAt" | "withdrawnAt" | "createdAt" | "updatedAt", ExtArgs["result"]["passport"]>
  export type PassportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | Passport$notificationsArgs<ExtArgs>
    _count?: boolean | PassportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PassportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PassportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passport"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passportNumber: string
      status: string
      email: string | null
      phoneNumber: string | null
      receivedAt: Date
      withdrawnAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passport"]>
    composites: {}
  }

  type PassportGetPayload<S extends boolean | null | undefined | PassportDefaultArgs> = $Result.GetResult<Prisma.$PassportPayload, S>

  type PassportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassportCountAggregateInputType | true
    }

  export interface PassportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passport'], meta: { name: 'Passport' } }
    /**
     * Find zero or one Passport that matches the filter.
     * @param {PassportFindUniqueArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassportFindUniqueArgs>(args: SelectSubset<T, PassportFindUniqueArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassportFindUniqueOrThrowArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassportFindUniqueOrThrowArgs>(args: SelectSubset<T, PassportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindFirstArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassportFindFirstArgs>(args?: SelectSubset<T, PassportFindFirstArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindFirstOrThrowArgs} args - Arguments to find a Passport
     * @example
     * // Get one Passport
     * const passport = await prisma.passport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassportFindFirstOrThrowArgs>(args?: SelectSubset<T, PassportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passports
     * const passports = await prisma.passport.findMany()
     * 
     * // Get first 10 Passports
     * const passports = await prisma.passport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passportWithIdOnly = await prisma.passport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassportFindManyArgs>(args?: SelectSubset<T, PassportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passport.
     * @param {PassportCreateArgs} args - Arguments to create a Passport.
     * @example
     * // Create one Passport
     * const Passport = await prisma.passport.create({
     *   data: {
     *     // ... data to create a Passport
     *   }
     * })
     * 
     */
    create<T extends PassportCreateArgs>(args: SelectSubset<T, PassportCreateArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passports.
     * @param {PassportCreateManyArgs} args - Arguments to create many Passports.
     * @example
     * // Create many Passports
     * const passport = await prisma.passport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassportCreateManyArgs>(args?: SelectSubset<T, PassportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passports and returns the data saved in the database.
     * @param {PassportCreateManyAndReturnArgs} args - Arguments to create many Passports.
     * @example
     * // Create many Passports
     * const passport = await prisma.passport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passports and only return the `id`
     * const passportWithIdOnly = await prisma.passport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassportCreateManyAndReturnArgs>(args?: SelectSubset<T, PassportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passport.
     * @param {PassportDeleteArgs} args - Arguments to delete one Passport.
     * @example
     * // Delete one Passport
     * const Passport = await prisma.passport.delete({
     *   where: {
     *     // ... filter to delete one Passport
     *   }
     * })
     * 
     */
    delete<T extends PassportDeleteArgs>(args: SelectSubset<T, PassportDeleteArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passport.
     * @param {PassportUpdateArgs} args - Arguments to update one Passport.
     * @example
     * // Update one Passport
     * const passport = await prisma.passport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassportUpdateArgs>(args: SelectSubset<T, PassportUpdateArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passports.
     * @param {PassportDeleteManyArgs} args - Arguments to filter Passports to delete.
     * @example
     * // Delete a few Passports
     * const { count } = await prisma.passport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassportDeleteManyArgs>(args?: SelectSubset<T, PassportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passports
     * const passport = await prisma.passport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassportUpdateManyArgs>(args: SelectSubset<T, PassportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passports and returns the data updated in the database.
     * @param {PassportUpdateManyAndReturnArgs} args - Arguments to update many Passports.
     * @example
     * // Update many Passports
     * const passport = await prisma.passport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passports and only return the `id`
     * const passportWithIdOnly = await prisma.passport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassportUpdateManyAndReturnArgs>(args: SelectSubset<T, PassportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passport.
     * @param {PassportUpsertArgs} args - Arguments to update or create a Passport.
     * @example
     * // Update or create a Passport
     * const passport = await prisma.passport.upsert({
     *   create: {
     *     // ... data to create a Passport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passport we want to update
     *   }
     * })
     */
    upsert<T extends PassportUpsertArgs>(args: SelectSubset<T, PassportUpsertArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportCountArgs} args - Arguments to filter Passports to count.
     * @example
     * // Count the number of Passports
     * const count = await prisma.passport.count({
     *   where: {
     *     // ... the filter for the Passports we want to count
     *   }
     * })
    **/
    count<T extends PassportCountArgs>(
      args?: Subset<T, PassportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassportAggregateArgs>(args: Subset<T, PassportAggregateArgs>): Prisma.PrismaPromise<GetPassportAggregateType<T>>

    /**
     * Group by Passport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassportGroupByArgs['orderBy'] }
        : { orderBy?: PassportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passport model
   */
  readonly fields: PassportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends Passport$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Passport$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passport model
   */
  interface PassportFieldRefs {
    readonly id: FieldRef<"Passport", 'Int'>
    readonly passportNumber: FieldRef<"Passport", 'String'>
    readonly status: FieldRef<"Passport", 'String'>
    readonly email: FieldRef<"Passport", 'String'>
    readonly phoneNumber: FieldRef<"Passport", 'String'>
    readonly receivedAt: FieldRef<"Passport", 'DateTime'>
    readonly withdrawnAt: FieldRef<"Passport", 'DateTime'>
    readonly createdAt: FieldRef<"Passport", 'DateTime'>
    readonly updatedAt: FieldRef<"Passport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passport findUnique
   */
  export type PassportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport findUniqueOrThrow
   */
  export type PassportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport findFirst
   */
  export type PassportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passports.
     */
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport findFirstOrThrow
   */
  export type PassportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passport to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passports.
     */
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport findMany
   */
  export type PassportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter, which Passports to fetch.
     */
    where?: PassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passports to fetch.
     */
    orderBy?: PassportOrderByWithRelationInput | PassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passports.
     */
    cursor?: PassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passports.
     */
    skip?: number
    distinct?: PassportScalarFieldEnum | PassportScalarFieldEnum[]
  }

  /**
   * Passport create
   */
  export type PassportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The data needed to create a Passport.
     */
    data: XOR<PassportCreateInput, PassportUncheckedCreateInput>
  }

  /**
   * Passport createMany
   */
  export type PassportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passports.
     */
    data: PassportCreateManyInput | PassportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passport createManyAndReturn
   */
  export type PassportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * The data used to create many Passports.
     */
    data: PassportCreateManyInput | PassportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passport update
   */
  export type PassportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The data needed to update a Passport.
     */
    data: XOR<PassportUpdateInput, PassportUncheckedUpdateInput>
    /**
     * Choose, which Passport to update.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport updateMany
   */
  export type PassportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passports.
     */
    data: XOR<PassportUpdateManyMutationInput, PassportUncheckedUpdateManyInput>
    /**
     * Filter which Passports to update
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to update.
     */
    limit?: number
  }

  /**
   * Passport updateManyAndReturn
   */
  export type PassportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * The data used to update Passports.
     */
    data: XOR<PassportUpdateManyMutationInput, PassportUncheckedUpdateManyInput>
    /**
     * Filter which Passports to update
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to update.
     */
    limit?: number
  }

  /**
   * Passport upsert
   */
  export type PassportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * The filter to search for the Passport to update in case it exists.
     */
    where: PassportWhereUniqueInput
    /**
     * In case the Passport found by the `where` argument doesn't exist, create a new Passport with this data.
     */
    create: XOR<PassportCreateInput, PassportUncheckedCreateInput>
    /**
     * In case the Passport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassportUpdateInput, PassportUncheckedUpdateInput>
  }

  /**
   * Passport delete
   */
  export type PassportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
    /**
     * Filter which Passport to delete.
     */
    where: PassportWhereUniqueInput
  }

  /**
   * Passport deleteMany
   */
  export type PassportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passports to delete
     */
    where?: PassportWhereInput
    /**
     * Limit how many Passports to delete.
     */
    limit?: number
  }

  /**
   * Passport.notifications
   */
  export type Passport$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Passport without action
   */
  export type PassportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passport
     */
    select?: PassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passport
     */
    omit?: PassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassportInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    passportId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    passportId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    passportId: number | null
    type: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    sentAt: Date | null
    error: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    passportId: number | null
    type: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    sentAt: Date | null
    error: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    passportId: number
    type: number
    status: number
    message: number
    createdAt: number
    sentAt: number
    error: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    passportId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    passportId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    passportId?: true
    type?: true
    status?: true
    message?: true
    createdAt?: true
    sentAt?: true
    error?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    passportId?: true
    type?: true
    status?: true
    message?: true
    createdAt?: true
    sentAt?: true
    error?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    passportId?: true
    type?: true
    status?: true
    message?: true
    createdAt?: true
    sentAt?: true
    error?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    passportId: number
    type: string
    status: string
    message: string
    createdAt: Date
    sentAt: Date | null
    error: string | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportId?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    sentAt?: boolean
    error?: boolean
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportId?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    sentAt?: boolean
    error?: boolean
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passportId?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    sentAt?: boolean
    error?: boolean
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    passportId?: boolean
    type?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    sentAt?: boolean
    error?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passportId" | "type" | "status" | "message" | "createdAt" | "sentAt" | "error", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passport?: boolean | PassportDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      passport: Prisma.$PassportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passportId: number
      type: string
      status: string
      message: string
      createdAt: Date
      sentAt: Date | null
      error: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passport<T extends PassportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassportDefaultArgs<ExtArgs>>): Prisma__PassportClient<$Result.GetResult<Prisma.$PassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly passportId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly status: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly error: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ImportHistory
   */

  export type AggregateImportHistory = {
    _count: ImportHistoryCountAggregateOutputType | null
    _avg: ImportHistoryAvgAggregateOutputType | null
    _sum: ImportHistorySumAggregateOutputType | null
    _min: ImportHistoryMinAggregateOutputType | null
    _max: ImportHistoryMaxAggregateOutputType | null
  }

  export type ImportHistoryAvgAggregateOutputType = {
    id: number | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type ImportHistorySumAggregateOutputType = {
    id: number | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type ImportHistoryMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    status: string | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    details: string | null
  }

  export type ImportHistoryMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    status: string | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    details: string | null
  }

  export type ImportHistoryCountAggregateOutputType = {
    id: number
    fileName: number
    status: number
    totalCount: number
    successCount: number
    failedCount: number
    createdAt: number
    details: number
    _all: number
  }


  export type ImportHistoryAvgAggregateInputType = {
    id?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
  }

  export type ImportHistorySumAggregateInputType = {
    id?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
  }

  export type ImportHistoryMinAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    details?: true
  }

  export type ImportHistoryMaxAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    details?: true
  }

  export type ImportHistoryCountAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    details?: true
    _all?: true
  }

  export type ImportHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportHistory to aggregate.
     */
    where?: ImportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportHistories to fetch.
     */
    orderBy?: ImportHistoryOrderByWithRelationInput | ImportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportHistories
    **/
    _count?: true | ImportHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImportHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImportHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportHistoryMaxAggregateInputType
  }

  export type GetImportHistoryAggregateType<T extends ImportHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateImportHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportHistory[P]>
      : GetScalarType<T[P], AggregateImportHistory[P]>
  }




  export type ImportHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportHistoryWhereInput
    orderBy?: ImportHistoryOrderByWithAggregationInput | ImportHistoryOrderByWithAggregationInput[]
    by: ImportHistoryScalarFieldEnum[] | ImportHistoryScalarFieldEnum
    having?: ImportHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportHistoryCountAggregateInputType | true
    _avg?: ImportHistoryAvgAggregateInputType
    _sum?: ImportHistorySumAggregateInputType
    _min?: ImportHistoryMinAggregateInputType
    _max?: ImportHistoryMaxAggregateInputType
  }

  export type ImportHistoryGroupByOutputType = {
    id: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt: Date
    details: string | null
    _count: ImportHistoryCountAggregateOutputType | null
    _avg: ImportHistoryAvgAggregateOutputType | null
    _sum: ImportHistorySumAggregateOutputType | null
    _min: ImportHistoryMinAggregateOutputType | null
    _max: ImportHistoryMaxAggregateOutputType | null
  }

  type GetImportHistoryGroupByPayload<T extends ImportHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ImportHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ImportHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    details?: boolean
  }, ExtArgs["result"]["importHistory"]>

  export type ImportHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    details?: boolean
  }, ExtArgs["result"]["importHistory"]>

  export type ImportHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    details?: boolean
  }, ExtArgs["result"]["importHistory"]>

  export type ImportHistorySelectScalar = {
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    details?: boolean
  }

  export type ImportHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "status" | "totalCount" | "successCount" | "failedCount" | "createdAt" | "details", ExtArgs["result"]["importHistory"]>

  export type $ImportHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      status: string
      totalCount: number
      successCount: number
      failedCount: number
      createdAt: Date
      details: string | null
    }, ExtArgs["result"]["importHistory"]>
    composites: {}
  }

  type ImportHistoryGetPayload<S extends boolean | null | undefined | ImportHistoryDefaultArgs> = $Result.GetResult<Prisma.$ImportHistoryPayload, S>

  type ImportHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportHistoryCountAggregateInputType | true
    }

  export interface ImportHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportHistory'], meta: { name: 'ImportHistory' } }
    /**
     * Find zero or one ImportHistory that matches the filter.
     * @param {ImportHistoryFindUniqueArgs} args - Arguments to find a ImportHistory
     * @example
     * // Get one ImportHistory
     * const importHistory = await prisma.importHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportHistoryFindUniqueArgs>(args: SelectSubset<T, ImportHistoryFindUniqueArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportHistoryFindUniqueOrThrowArgs} args - Arguments to find a ImportHistory
     * @example
     * // Get one ImportHistory
     * const importHistory = await prisma.importHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryFindFirstArgs} args - Arguments to find a ImportHistory
     * @example
     * // Get one ImportHistory
     * const importHistory = await prisma.importHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportHistoryFindFirstArgs>(args?: SelectSubset<T, ImportHistoryFindFirstArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryFindFirstOrThrowArgs} args - Arguments to find a ImportHistory
     * @example
     * // Get one ImportHistory
     * const importHistory = await prisma.importHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportHistories
     * const importHistories = await prisma.importHistory.findMany()
     * 
     * // Get first 10 ImportHistories
     * const importHistories = await prisma.importHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importHistoryWithIdOnly = await prisma.importHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportHistoryFindManyArgs>(args?: SelectSubset<T, ImportHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportHistory.
     * @param {ImportHistoryCreateArgs} args - Arguments to create a ImportHistory.
     * @example
     * // Create one ImportHistory
     * const ImportHistory = await prisma.importHistory.create({
     *   data: {
     *     // ... data to create a ImportHistory
     *   }
     * })
     * 
     */
    create<T extends ImportHistoryCreateArgs>(args: SelectSubset<T, ImportHistoryCreateArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportHistories.
     * @param {ImportHistoryCreateManyArgs} args - Arguments to create many ImportHistories.
     * @example
     * // Create many ImportHistories
     * const importHistory = await prisma.importHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportHistoryCreateManyArgs>(args?: SelectSubset<T, ImportHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportHistories and returns the data saved in the database.
     * @param {ImportHistoryCreateManyAndReturnArgs} args - Arguments to create many ImportHistories.
     * @example
     * // Create many ImportHistories
     * const importHistory = await prisma.importHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportHistories and only return the `id`
     * const importHistoryWithIdOnly = await prisma.importHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportHistory.
     * @param {ImportHistoryDeleteArgs} args - Arguments to delete one ImportHistory.
     * @example
     * // Delete one ImportHistory
     * const ImportHistory = await prisma.importHistory.delete({
     *   where: {
     *     // ... filter to delete one ImportHistory
     *   }
     * })
     * 
     */
    delete<T extends ImportHistoryDeleteArgs>(args: SelectSubset<T, ImportHistoryDeleteArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportHistory.
     * @param {ImportHistoryUpdateArgs} args - Arguments to update one ImportHistory.
     * @example
     * // Update one ImportHistory
     * const importHistory = await prisma.importHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportHistoryUpdateArgs>(args: SelectSubset<T, ImportHistoryUpdateArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportHistories.
     * @param {ImportHistoryDeleteManyArgs} args - Arguments to filter ImportHistories to delete.
     * @example
     * // Delete a few ImportHistories
     * const { count } = await prisma.importHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportHistoryDeleteManyArgs>(args?: SelectSubset<T, ImportHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportHistories
     * const importHistory = await prisma.importHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportHistoryUpdateManyArgs>(args: SelectSubset<T, ImportHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportHistories and returns the data updated in the database.
     * @param {ImportHistoryUpdateManyAndReturnArgs} args - Arguments to update many ImportHistories.
     * @example
     * // Update many ImportHistories
     * const importHistory = await prisma.importHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportHistories and only return the `id`
     * const importHistoryWithIdOnly = await prisma.importHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportHistory.
     * @param {ImportHistoryUpsertArgs} args - Arguments to update or create a ImportHistory.
     * @example
     * // Update or create a ImportHistory
     * const importHistory = await prisma.importHistory.upsert({
     *   create: {
     *     // ... data to create a ImportHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportHistory we want to update
     *   }
     * })
     */
    upsert<T extends ImportHistoryUpsertArgs>(args: SelectSubset<T, ImportHistoryUpsertArgs<ExtArgs>>): Prisma__ImportHistoryClient<$Result.GetResult<Prisma.$ImportHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryCountArgs} args - Arguments to filter ImportHistories to count.
     * @example
     * // Count the number of ImportHistories
     * const count = await prisma.importHistory.count({
     *   where: {
     *     // ... the filter for the ImportHistories we want to count
     *   }
     * })
    **/
    count<T extends ImportHistoryCountArgs>(
      args?: Subset<T, ImportHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImportHistoryAggregateArgs>(args: Subset<T, ImportHistoryAggregateArgs>): Prisma.PrismaPromise<GetImportHistoryAggregateType<T>>

    /**
     * Group by ImportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImportHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ImportHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImportHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportHistory model
   */
  readonly fields: ImportHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportHistory model
   */
  interface ImportHistoryFieldRefs {
    readonly id: FieldRef<"ImportHistory", 'Int'>
    readonly fileName: FieldRef<"ImportHistory", 'String'>
    readonly status: FieldRef<"ImportHistory", 'String'>
    readonly totalCount: FieldRef<"ImportHistory", 'Int'>
    readonly successCount: FieldRef<"ImportHistory", 'Int'>
    readonly failedCount: FieldRef<"ImportHistory", 'Int'>
    readonly createdAt: FieldRef<"ImportHistory", 'DateTime'>
    readonly details: FieldRef<"ImportHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImportHistory findUnique
   */
  export type ImportHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ImportHistory to fetch.
     */
    where: ImportHistoryWhereUniqueInput
  }

  /**
   * ImportHistory findUniqueOrThrow
   */
  export type ImportHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ImportHistory to fetch.
     */
    where: ImportHistoryWhereUniqueInput
  }

  /**
   * ImportHistory findFirst
   */
  export type ImportHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ImportHistory to fetch.
     */
    where?: ImportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportHistories to fetch.
     */
    orderBy?: ImportHistoryOrderByWithRelationInput | ImportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportHistories.
     */
    cursor?: ImportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportHistories.
     */
    distinct?: ImportHistoryScalarFieldEnum | ImportHistoryScalarFieldEnum[]
  }

  /**
   * ImportHistory findFirstOrThrow
   */
  export type ImportHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ImportHistory to fetch.
     */
    where?: ImportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportHistories to fetch.
     */
    orderBy?: ImportHistoryOrderByWithRelationInput | ImportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportHistories.
     */
    cursor?: ImportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportHistories.
     */
    distinct?: ImportHistoryScalarFieldEnum | ImportHistoryScalarFieldEnum[]
  }

  /**
   * ImportHistory findMany
   */
  export type ImportHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ImportHistories to fetch.
     */
    where?: ImportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportHistories to fetch.
     */
    orderBy?: ImportHistoryOrderByWithRelationInput | ImportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportHistories.
     */
    cursor?: ImportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportHistories.
     */
    skip?: number
    distinct?: ImportHistoryScalarFieldEnum | ImportHistoryScalarFieldEnum[]
  }

  /**
   * ImportHistory create
   */
  export type ImportHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ImportHistory.
     */
    data: XOR<ImportHistoryCreateInput, ImportHistoryUncheckedCreateInput>
  }

  /**
   * ImportHistory createMany
   */
  export type ImportHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportHistories.
     */
    data: ImportHistoryCreateManyInput | ImportHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportHistory createManyAndReturn
   */
  export type ImportHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ImportHistories.
     */
    data: ImportHistoryCreateManyInput | ImportHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportHistory update
   */
  export type ImportHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ImportHistory.
     */
    data: XOR<ImportHistoryUpdateInput, ImportHistoryUncheckedUpdateInput>
    /**
     * Choose, which ImportHistory to update.
     */
    where: ImportHistoryWhereUniqueInput
  }

  /**
   * ImportHistory updateMany
   */
  export type ImportHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportHistories.
     */
    data: XOR<ImportHistoryUpdateManyMutationInput, ImportHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ImportHistories to update
     */
    where?: ImportHistoryWhereInput
    /**
     * Limit how many ImportHistories to update.
     */
    limit?: number
  }

  /**
   * ImportHistory updateManyAndReturn
   */
  export type ImportHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ImportHistories.
     */
    data: XOR<ImportHistoryUpdateManyMutationInput, ImportHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ImportHistories to update
     */
    where?: ImportHistoryWhereInput
    /**
     * Limit how many ImportHistories to update.
     */
    limit?: number
  }

  /**
   * ImportHistory upsert
   */
  export type ImportHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ImportHistory to update in case it exists.
     */
    where: ImportHistoryWhereUniqueInput
    /**
     * In case the ImportHistory found by the `where` argument doesn't exist, create a new ImportHistory with this data.
     */
    create: XOR<ImportHistoryCreateInput, ImportHistoryUncheckedCreateInput>
    /**
     * In case the ImportHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportHistoryUpdateInput, ImportHistoryUncheckedUpdateInput>
  }

  /**
   * ImportHistory delete
   */
  export type ImportHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
    /**
     * Filter which ImportHistory to delete.
     */
    where: ImportHistoryWhereUniqueInput
  }

  /**
   * ImportHistory deleteMany
   */
  export type ImportHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportHistories to delete
     */
    where?: ImportHistoryWhereInput
    /**
     * Limit how many ImportHistories to delete.
     */
    limit?: number
  }

  /**
   * ImportHistory without action
   */
  export type ImportHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportHistory
     */
    select?: ImportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportHistory
     */
    omit?: ImportHistoryOmit<ExtArgs> | null
  }


  /**
   * Model PassportImport
   */

  export type AggregatePassportImport = {
    _count: PassportImportCountAggregateOutputType | null
    _avg: PassportImportAvgAggregateOutputType | null
    _sum: PassportImportSumAggregateOutputType | null
    _min: PassportImportMinAggregateOutputType | null
    _max: PassportImportMaxAggregateOutputType | null
  }

  export type PassportImportAvgAggregateOutputType = {
    id: number | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type PassportImportSumAggregateOutputType = {
    id: number | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type PassportImportMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    status: string | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportImportMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    status: string | null
    totalCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassportImportCountAggregateOutputType = {
    id: number
    fileName: number
    status: number
    totalCount: number
    successCount: number
    failedCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassportImportAvgAggregateInputType = {
    id?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
  }

  export type PassportImportSumAggregateInputType = {
    id?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
  }

  export type PassportImportMinAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportImportMaxAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassportImportCountAggregateInputType = {
    id?: true
    fileName?: true
    status?: true
    totalCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassportImportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassportImport to aggregate.
     */
    where?: PassportImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportImports to fetch.
     */
    orderBy?: PassportImportOrderByWithRelationInput | PassportImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassportImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PassportImports
    **/
    _count?: true | PassportImportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassportImportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassportImportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassportImportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassportImportMaxAggregateInputType
  }

  export type GetPassportImportAggregateType<T extends PassportImportAggregateArgs> = {
        [P in keyof T & keyof AggregatePassportImport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassportImport[P]>
      : GetScalarType<T[P], AggregatePassportImport[P]>
  }




  export type PassportImportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassportImportWhereInput
    orderBy?: PassportImportOrderByWithAggregationInput | PassportImportOrderByWithAggregationInput[]
    by: PassportImportScalarFieldEnum[] | PassportImportScalarFieldEnum
    having?: PassportImportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassportImportCountAggregateInputType | true
    _avg?: PassportImportAvgAggregateInputType
    _sum?: PassportImportSumAggregateInputType
    _min?: PassportImportMinAggregateInputType
    _max?: PassportImportMaxAggregateInputType
  }

  export type PassportImportGroupByOutputType = {
    id: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt: Date
    updatedAt: Date
    _count: PassportImportCountAggregateOutputType | null
    _avg: PassportImportAvgAggregateOutputType | null
    _sum: PassportImportSumAggregateOutputType | null
    _min: PassportImportMinAggregateOutputType | null
    _max: PassportImportMaxAggregateOutputType | null
  }

  type GetPassportImportGroupByPayload<T extends PassportImportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassportImportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassportImportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassportImportGroupByOutputType[P]>
            : GetScalarType<T[P], PassportImportGroupByOutputType[P]>
        }
      >
    >


  export type PassportImportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportImport"]>

  export type PassportImportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportImport"]>

  export type PassportImportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passportImport"]>

  export type PassportImportSelectScalar = {
    id?: boolean
    fileName?: boolean
    status?: boolean
    totalCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassportImportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "status" | "totalCount" | "successCount" | "failedCount" | "createdAt" | "updatedAt", ExtArgs["result"]["passportImport"]>

  export type $PassportImportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PassportImport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      status: string
      totalCount: number
      successCount: number
      failedCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passportImport"]>
    composites: {}
  }

  type PassportImportGetPayload<S extends boolean | null | undefined | PassportImportDefaultArgs> = $Result.GetResult<Prisma.$PassportImportPayload, S>

  type PassportImportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassportImportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassportImportCountAggregateInputType | true
    }

  export interface PassportImportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PassportImport'], meta: { name: 'PassportImport' } }
    /**
     * Find zero or one PassportImport that matches the filter.
     * @param {PassportImportFindUniqueArgs} args - Arguments to find a PassportImport
     * @example
     * // Get one PassportImport
     * const passportImport = await prisma.passportImport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassportImportFindUniqueArgs>(args: SelectSubset<T, PassportImportFindUniqueArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PassportImport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassportImportFindUniqueOrThrowArgs} args - Arguments to find a PassportImport
     * @example
     * // Get one PassportImport
     * const passportImport = await prisma.passportImport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassportImportFindUniqueOrThrowArgs>(args: SelectSubset<T, PassportImportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassportImport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportFindFirstArgs} args - Arguments to find a PassportImport
     * @example
     * // Get one PassportImport
     * const passportImport = await prisma.passportImport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassportImportFindFirstArgs>(args?: SelectSubset<T, PassportImportFindFirstArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PassportImport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportFindFirstOrThrowArgs} args - Arguments to find a PassportImport
     * @example
     * // Get one PassportImport
     * const passportImport = await prisma.passportImport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassportImportFindFirstOrThrowArgs>(args?: SelectSubset<T, PassportImportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PassportImports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PassportImports
     * const passportImports = await prisma.passportImport.findMany()
     * 
     * // Get first 10 PassportImports
     * const passportImports = await prisma.passportImport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passportImportWithIdOnly = await prisma.passportImport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassportImportFindManyArgs>(args?: SelectSubset<T, PassportImportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PassportImport.
     * @param {PassportImportCreateArgs} args - Arguments to create a PassportImport.
     * @example
     * // Create one PassportImport
     * const PassportImport = await prisma.passportImport.create({
     *   data: {
     *     // ... data to create a PassportImport
     *   }
     * })
     * 
     */
    create<T extends PassportImportCreateArgs>(args: SelectSubset<T, PassportImportCreateArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PassportImports.
     * @param {PassportImportCreateManyArgs} args - Arguments to create many PassportImports.
     * @example
     * // Create many PassportImports
     * const passportImport = await prisma.passportImport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassportImportCreateManyArgs>(args?: SelectSubset<T, PassportImportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PassportImports and returns the data saved in the database.
     * @param {PassportImportCreateManyAndReturnArgs} args - Arguments to create many PassportImports.
     * @example
     * // Create many PassportImports
     * const passportImport = await prisma.passportImport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PassportImports and only return the `id`
     * const passportImportWithIdOnly = await prisma.passportImport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassportImportCreateManyAndReturnArgs>(args?: SelectSubset<T, PassportImportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PassportImport.
     * @param {PassportImportDeleteArgs} args - Arguments to delete one PassportImport.
     * @example
     * // Delete one PassportImport
     * const PassportImport = await prisma.passportImport.delete({
     *   where: {
     *     // ... filter to delete one PassportImport
     *   }
     * })
     * 
     */
    delete<T extends PassportImportDeleteArgs>(args: SelectSubset<T, PassportImportDeleteArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PassportImport.
     * @param {PassportImportUpdateArgs} args - Arguments to update one PassportImport.
     * @example
     * // Update one PassportImport
     * const passportImport = await prisma.passportImport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassportImportUpdateArgs>(args: SelectSubset<T, PassportImportUpdateArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PassportImports.
     * @param {PassportImportDeleteManyArgs} args - Arguments to filter PassportImports to delete.
     * @example
     * // Delete a few PassportImports
     * const { count } = await prisma.passportImport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassportImportDeleteManyArgs>(args?: SelectSubset<T, PassportImportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassportImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PassportImports
     * const passportImport = await prisma.passportImport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassportImportUpdateManyArgs>(args: SelectSubset<T, PassportImportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassportImports and returns the data updated in the database.
     * @param {PassportImportUpdateManyAndReturnArgs} args - Arguments to update many PassportImports.
     * @example
     * // Update many PassportImports
     * const passportImport = await prisma.passportImport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PassportImports and only return the `id`
     * const passportImportWithIdOnly = await prisma.passportImport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassportImportUpdateManyAndReturnArgs>(args: SelectSubset<T, PassportImportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PassportImport.
     * @param {PassportImportUpsertArgs} args - Arguments to update or create a PassportImport.
     * @example
     * // Update or create a PassportImport
     * const passportImport = await prisma.passportImport.upsert({
     *   create: {
     *     // ... data to create a PassportImport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PassportImport we want to update
     *   }
     * })
     */
    upsert<T extends PassportImportUpsertArgs>(args: SelectSubset<T, PassportImportUpsertArgs<ExtArgs>>): Prisma__PassportImportClient<$Result.GetResult<Prisma.$PassportImportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PassportImports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportCountArgs} args - Arguments to filter PassportImports to count.
     * @example
     * // Count the number of PassportImports
     * const count = await prisma.passportImport.count({
     *   where: {
     *     // ... the filter for the PassportImports we want to count
     *   }
     * })
    **/
    count<T extends PassportImportCountArgs>(
      args?: Subset<T, PassportImportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassportImportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PassportImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassportImportAggregateArgs>(args: Subset<T, PassportImportAggregateArgs>): Prisma.PrismaPromise<GetPassportImportAggregateType<T>>

    /**
     * Group by PassportImport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassportImportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassportImportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassportImportGroupByArgs['orderBy'] }
        : { orderBy?: PassportImportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassportImportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassportImportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PassportImport model
   */
  readonly fields: PassportImportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PassportImport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassportImportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PassportImport model
   */
  interface PassportImportFieldRefs {
    readonly id: FieldRef<"PassportImport", 'Int'>
    readonly fileName: FieldRef<"PassportImport", 'String'>
    readonly status: FieldRef<"PassportImport", 'String'>
    readonly totalCount: FieldRef<"PassportImport", 'Int'>
    readonly successCount: FieldRef<"PassportImport", 'Int'>
    readonly failedCount: FieldRef<"PassportImport", 'Int'>
    readonly createdAt: FieldRef<"PassportImport", 'DateTime'>
    readonly updatedAt: FieldRef<"PassportImport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PassportImport findUnique
   */
  export type PassportImportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter, which PassportImport to fetch.
     */
    where: PassportImportWhereUniqueInput
  }

  /**
   * PassportImport findUniqueOrThrow
   */
  export type PassportImportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter, which PassportImport to fetch.
     */
    where: PassportImportWhereUniqueInput
  }

  /**
   * PassportImport findFirst
   */
  export type PassportImportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter, which PassportImport to fetch.
     */
    where?: PassportImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportImports to fetch.
     */
    orderBy?: PassportImportOrderByWithRelationInput | PassportImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassportImports.
     */
    cursor?: PassportImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassportImports.
     */
    distinct?: PassportImportScalarFieldEnum | PassportImportScalarFieldEnum[]
  }

  /**
   * PassportImport findFirstOrThrow
   */
  export type PassportImportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter, which PassportImport to fetch.
     */
    where?: PassportImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportImports to fetch.
     */
    orderBy?: PassportImportOrderByWithRelationInput | PassportImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassportImports.
     */
    cursor?: PassportImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportImports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassportImports.
     */
    distinct?: PassportImportScalarFieldEnum | PassportImportScalarFieldEnum[]
  }

  /**
   * PassportImport findMany
   */
  export type PassportImportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter, which PassportImports to fetch.
     */
    where?: PassportImportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassportImports to fetch.
     */
    orderBy?: PassportImportOrderByWithRelationInput | PassportImportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PassportImports.
     */
    cursor?: PassportImportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassportImports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassportImports.
     */
    skip?: number
    distinct?: PassportImportScalarFieldEnum | PassportImportScalarFieldEnum[]
  }

  /**
   * PassportImport create
   */
  export type PassportImportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * The data needed to create a PassportImport.
     */
    data: XOR<PassportImportCreateInput, PassportImportUncheckedCreateInput>
  }

  /**
   * PassportImport createMany
   */
  export type PassportImportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PassportImports.
     */
    data: PassportImportCreateManyInput | PassportImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassportImport createManyAndReturn
   */
  export type PassportImportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * The data used to create many PassportImports.
     */
    data: PassportImportCreateManyInput | PassportImportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassportImport update
   */
  export type PassportImportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * The data needed to update a PassportImport.
     */
    data: XOR<PassportImportUpdateInput, PassportImportUncheckedUpdateInput>
    /**
     * Choose, which PassportImport to update.
     */
    where: PassportImportWhereUniqueInput
  }

  /**
   * PassportImport updateMany
   */
  export type PassportImportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PassportImports.
     */
    data: XOR<PassportImportUpdateManyMutationInput, PassportImportUncheckedUpdateManyInput>
    /**
     * Filter which PassportImports to update
     */
    where?: PassportImportWhereInput
    /**
     * Limit how many PassportImports to update.
     */
    limit?: number
  }

  /**
   * PassportImport updateManyAndReturn
   */
  export type PassportImportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * The data used to update PassportImports.
     */
    data: XOR<PassportImportUpdateManyMutationInput, PassportImportUncheckedUpdateManyInput>
    /**
     * Filter which PassportImports to update
     */
    where?: PassportImportWhereInput
    /**
     * Limit how many PassportImports to update.
     */
    limit?: number
  }

  /**
   * PassportImport upsert
   */
  export type PassportImportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * The filter to search for the PassportImport to update in case it exists.
     */
    where: PassportImportWhereUniqueInput
    /**
     * In case the PassportImport found by the `where` argument doesn't exist, create a new PassportImport with this data.
     */
    create: XOR<PassportImportCreateInput, PassportImportUncheckedCreateInput>
    /**
     * In case the PassportImport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassportImportUpdateInput, PassportImportUncheckedUpdateInput>
  }

  /**
   * PassportImport delete
   */
  export type PassportImportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
    /**
     * Filter which PassportImport to delete.
     */
    where: PassportImportWhereUniqueInput
  }

  /**
   * PassportImport deleteMany
   */
  export type PassportImportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassportImports to delete
     */
    where?: PassportImportWhereInput
    /**
     * Limit how many PassportImports to delete.
     */
    limit?: number
  }

  /**
   * PassportImport without action
   */
  export type PassportImportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassportImport
     */
    select?: PassportImportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PassportImport
     */
    omit?: PassportImportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PassportScalarFieldEnum: {
    id: 'id',
    passportNumber: 'passportNumber',
    status: 'status',
    email: 'email',
    phoneNumber: 'phoneNumber',
    receivedAt: 'receivedAt',
    withdrawnAt: 'withdrawnAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassportScalarFieldEnum = (typeof PassportScalarFieldEnum)[keyof typeof PassportScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    passportId: 'passportId',
    type: 'type',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    sentAt: 'sentAt',
    error: 'error'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ImportHistoryScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    status: 'status',
    totalCount: 'totalCount',
    successCount: 'successCount',
    failedCount: 'failedCount',
    createdAt: 'createdAt',
    details: 'details'
  };

  export type ImportHistoryScalarFieldEnum = (typeof ImportHistoryScalarFieldEnum)[keyof typeof ImportHistoryScalarFieldEnum]


  export const PassportImportScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    status: 'status',
    totalCount: 'totalCount',
    successCount: 'successCount',
    failedCount: 'failedCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassportImportScalarFieldEnum = (typeof PassportImportScalarFieldEnum)[keyof typeof PassportImportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PassportWhereInput = {
    AND?: PassportWhereInput | PassportWhereInput[]
    OR?: PassportWhereInput[]
    NOT?: PassportWhereInput | PassportWhereInput[]
    id?: IntFilter<"Passport"> | number
    passportNumber?: StringFilter<"Passport"> | string
    status?: StringFilter<"Passport"> | string
    email?: StringNullableFilter<"Passport"> | string | null
    phoneNumber?: StringNullableFilter<"Passport"> | string | null
    receivedAt?: DateTimeFilter<"Passport"> | Date | string
    withdrawnAt?: DateTimeNullableFilter<"Passport"> | Date | string | null
    createdAt?: DateTimeFilter<"Passport"> | Date | string
    updatedAt?: DateTimeFilter<"Passport"> | Date | string
    notifications?: NotificationListRelationFilter
  }

  export type PassportOrderByWithRelationInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    status?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    receivedAt?: SortOrder
    withdrawnAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type PassportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    passportNumber?: string
    AND?: PassportWhereInput | PassportWhereInput[]
    OR?: PassportWhereInput[]
    NOT?: PassportWhereInput | PassportWhereInput[]
    status?: StringFilter<"Passport"> | string
    email?: StringNullableFilter<"Passport"> | string | null
    phoneNumber?: StringNullableFilter<"Passport"> | string | null
    receivedAt?: DateTimeFilter<"Passport"> | Date | string
    withdrawnAt?: DateTimeNullableFilter<"Passport"> | Date | string | null
    createdAt?: DateTimeFilter<"Passport"> | Date | string
    updatedAt?: DateTimeFilter<"Passport"> | Date | string
    notifications?: NotificationListRelationFilter
  }, "id" | "passportNumber">

  export type PassportOrderByWithAggregationInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    status?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    receivedAt?: SortOrder
    withdrawnAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassportCountOrderByAggregateInput
    _avg?: PassportAvgOrderByAggregateInput
    _max?: PassportMaxOrderByAggregateInput
    _min?: PassportMinOrderByAggregateInput
    _sum?: PassportSumOrderByAggregateInput
  }

  export type PassportScalarWhereWithAggregatesInput = {
    AND?: PassportScalarWhereWithAggregatesInput | PassportScalarWhereWithAggregatesInput[]
    OR?: PassportScalarWhereWithAggregatesInput[]
    NOT?: PassportScalarWhereWithAggregatesInput | PassportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Passport"> | number
    passportNumber?: StringWithAggregatesFilter<"Passport"> | string
    status?: StringWithAggregatesFilter<"Passport"> | string
    email?: StringNullableWithAggregatesFilter<"Passport"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Passport"> | string | null
    receivedAt?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
    withdrawnAt?: DateTimeNullableWithAggregatesFilter<"Passport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passport"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    passportId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    error?: StringNullableFilter<"Notification"> | string | null
    passport?: XOR<PassportScalarRelationFilter, PassportWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    passportId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    passport?: PassportOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    passportId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    error?: StringNullableFilter<"Notification"> | string | null
    passport?: XOR<PassportScalarRelationFilter, PassportWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    passportId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    passportId?: IntWithAggregatesFilter<"Notification"> | number
    type?: StringWithAggregatesFilter<"Notification"> | string
    status?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    error?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type ImportHistoryWhereInput = {
    AND?: ImportHistoryWhereInput | ImportHistoryWhereInput[]
    OR?: ImportHistoryWhereInput[]
    NOT?: ImportHistoryWhereInput | ImportHistoryWhereInput[]
    id?: IntFilter<"ImportHistory"> | number
    fileName?: StringFilter<"ImportHistory"> | string
    status?: StringFilter<"ImportHistory"> | string
    totalCount?: IntFilter<"ImportHistory"> | number
    successCount?: IntFilter<"ImportHistory"> | number
    failedCount?: IntFilter<"ImportHistory"> | number
    createdAt?: DateTimeFilter<"ImportHistory"> | Date | string
    details?: StringNullableFilter<"ImportHistory"> | string | null
  }

  export type ImportHistoryOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    details?: SortOrderInput | SortOrder
  }

  export type ImportHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImportHistoryWhereInput | ImportHistoryWhereInput[]
    OR?: ImportHistoryWhereInput[]
    NOT?: ImportHistoryWhereInput | ImportHistoryWhereInput[]
    fileName?: StringFilter<"ImportHistory"> | string
    status?: StringFilter<"ImportHistory"> | string
    totalCount?: IntFilter<"ImportHistory"> | number
    successCount?: IntFilter<"ImportHistory"> | number
    failedCount?: IntFilter<"ImportHistory"> | number
    createdAt?: DateTimeFilter<"ImportHistory"> | Date | string
    details?: StringNullableFilter<"ImportHistory"> | string | null
  }, "id">

  export type ImportHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: ImportHistoryCountOrderByAggregateInput
    _avg?: ImportHistoryAvgOrderByAggregateInput
    _max?: ImportHistoryMaxOrderByAggregateInput
    _min?: ImportHistoryMinOrderByAggregateInput
    _sum?: ImportHistorySumOrderByAggregateInput
  }

  export type ImportHistoryScalarWhereWithAggregatesInput = {
    AND?: ImportHistoryScalarWhereWithAggregatesInput | ImportHistoryScalarWhereWithAggregatesInput[]
    OR?: ImportHistoryScalarWhereWithAggregatesInput[]
    NOT?: ImportHistoryScalarWhereWithAggregatesInput | ImportHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImportHistory"> | number
    fileName?: StringWithAggregatesFilter<"ImportHistory"> | string
    status?: StringWithAggregatesFilter<"ImportHistory"> | string
    totalCount?: IntWithAggregatesFilter<"ImportHistory"> | number
    successCount?: IntWithAggregatesFilter<"ImportHistory"> | number
    failedCount?: IntWithAggregatesFilter<"ImportHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ImportHistory"> | Date | string
    details?: StringNullableWithAggregatesFilter<"ImportHistory"> | string | null
  }

  export type PassportImportWhereInput = {
    AND?: PassportImportWhereInput | PassportImportWhereInput[]
    OR?: PassportImportWhereInput[]
    NOT?: PassportImportWhereInput | PassportImportWhereInput[]
    id?: IntFilter<"PassportImport"> | number
    fileName?: StringFilter<"PassportImport"> | string
    status?: StringFilter<"PassportImport"> | string
    totalCount?: IntFilter<"PassportImport"> | number
    successCount?: IntFilter<"PassportImport"> | number
    failedCount?: IntFilter<"PassportImport"> | number
    createdAt?: DateTimeFilter<"PassportImport"> | Date | string
    updatedAt?: DateTimeFilter<"PassportImport"> | Date | string
  }

  export type PassportImportOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportImportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PassportImportWhereInput | PassportImportWhereInput[]
    OR?: PassportImportWhereInput[]
    NOT?: PassportImportWhereInput | PassportImportWhereInput[]
    fileName?: StringFilter<"PassportImport"> | string
    status?: StringFilter<"PassportImport"> | string
    totalCount?: IntFilter<"PassportImport"> | number
    successCount?: IntFilter<"PassportImport"> | number
    failedCount?: IntFilter<"PassportImport"> | number
    createdAt?: DateTimeFilter<"PassportImport"> | Date | string
    updatedAt?: DateTimeFilter<"PassportImport"> | Date | string
  }, "id">

  export type PassportImportOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassportImportCountOrderByAggregateInput
    _avg?: PassportImportAvgOrderByAggregateInput
    _max?: PassportImportMaxOrderByAggregateInput
    _min?: PassportImportMinOrderByAggregateInput
    _sum?: PassportImportSumOrderByAggregateInput
  }

  export type PassportImportScalarWhereWithAggregatesInput = {
    AND?: PassportImportScalarWhereWithAggregatesInput | PassportImportScalarWhereWithAggregatesInput[]
    OR?: PassportImportScalarWhereWithAggregatesInput[]
    NOT?: PassportImportScalarWhereWithAggregatesInput | PassportImportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PassportImport"> | number
    fileName?: StringWithAggregatesFilter<"PassportImport"> | string
    status?: StringWithAggregatesFilter<"PassportImport"> | string
    totalCount?: IntWithAggregatesFilter<"PassportImport"> | number
    successCount?: IntWithAggregatesFilter<"PassportImport"> | number
    failedCount?: IntWithAggregatesFilter<"PassportImport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PassportImport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PassportImport"> | Date | string
  }

  export type PassportCreateInput = {
    passportNumber: string
    status?: string
    email?: string | null
    phoneNumber?: string | null
    receivedAt?: Date | string
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutPassportInput
  }

  export type PassportUncheckedCreateInput = {
    id?: number
    passportNumber: string
    status?: string
    email?: string | null
    phoneNumber?: string | null
    receivedAt?: Date | string
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutPassportInput
  }

  export type PassportUpdateInput = {
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutPassportNestedInput
  }

  export type PassportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutPassportNestedInput
  }

  export type PassportCreateManyInput = {
    id?: number
    passportNumber: string
    status?: string
    email?: string | null
    phoneNumber?: string | null
    receivedAt?: Date | string
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportUpdateManyMutationInput = {
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
    passport: PassportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    passportId: number
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: PassportUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    passportId: number
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportHistoryCreateInput = {
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    details?: string | null
  }

  export type ImportHistoryUncheckedCreateInput = {
    id?: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    details?: string | null
  }

  export type ImportHistoryUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportHistoryCreateManyInput = {
    id?: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    details?: string | null
  }

  export type ImportHistoryUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImportHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PassportImportCreateInput = {
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportImportUncheckedCreateInput = {
    id?: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportImportUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportImportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportImportCreateManyInput = {
    id?: number
    fileName: string
    status: string
    totalCount: number
    successCount: number
    failedCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportImportUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportImportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PassportCountOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    receivedAt?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PassportMaxOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    receivedAt?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportMinOrderByAggregateInput = {
    id?: SortOrder
    passportNumber?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    receivedAt?: SortOrder
    withdrawnAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PassportScalarRelationFilter = {
    is?: PassportWhereInput
    isNot?: PassportWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    passportId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    passportId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    passportId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    passportId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sentAt?: SortOrder
    error?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    passportId?: SortOrder
  }

  export type ImportHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    details?: SortOrder
  }

  export type ImportHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type ImportHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    details?: SortOrder
  }

  export type ImportHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    details?: SortOrder
  }

  export type ImportHistorySumOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type PassportImportCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportImportAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type PassportImportMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportImportMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassportImportSumOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutPassportInput = {
    create?: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput> | NotificationCreateWithoutPassportInput[] | NotificationUncheckedCreateWithoutPassportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPassportInput | NotificationCreateOrConnectWithoutPassportInput[]
    createMany?: NotificationCreateManyPassportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPassportInput = {
    create?: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput> | NotificationCreateWithoutPassportInput[] | NotificationUncheckedCreateWithoutPassportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPassportInput | NotificationCreateOrConnectWithoutPassportInput[]
    createMany?: NotificationCreateManyPassportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NotificationUpdateManyWithoutPassportNestedInput = {
    create?: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput> | NotificationCreateWithoutPassportInput[] | NotificationUncheckedCreateWithoutPassportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPassportInput | NotificationCreateOrConnectWithoutPassportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPassportInput | NotificationUpsertWithWhereUniqueWithoutPassportInput[]
    createMany?: NotificationCreateManyPassportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPassportInput | NotificationUpdateWithWhereUniqueWithoutPassportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPassportInput | NotificationUpdateManyWithWhereWithoutPassportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationUncheckedUpdateManyWithoutPassportNestedInput = {
    create?: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput> | NotificationCreateWithoutPassportInput[] | NotificationUncheckedCreateWithoutPassportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPassportInput | NotificationCreateOrConnectWithoutPassportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPassportInput | NotificationUpsertWithWhereUniqueWithoutPassportInput[]
    createMany?: NotificationCreateManyPassportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPassportInput | NotificationUpdateWithWhereUniqueWithoutPassportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPassportInput | NotificationUpdateManyWithWhereWithoutPassportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PassportCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PassportCreateWithoutNotificationsInput, PassportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PassportCreateOrConnectWithoutNotificationsInput
    connect?: PassportWhereUniqueInput
  }

  export type PassportUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<PassportCreateWithoutNotificationsInput, PassportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PassportCreateOrConnectWithoutNotificationsInput
    upsert?: PassportUpsertWithoutNotificationsInput
    connect?: PassportWhereUniqueInput
    update?: XOR<XOR<PassportUpdateToOneWithWhereWithoutNotificationsInput, PassportUpdateWithoutNotificationsInput>, PassportUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutPassportInput = {
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
  }

  export type NotificationUncheckedCreateWithoutPassportInput = {
    id?: number
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
  }

  export type NotificationCreateOrConnectWithoutPassportInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput>
  }

  export type NotificationCreateManyPassportInputEnvelope = {
    data: NotificationCreateManyPassportInput | NotificationCreateManyPassportInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutPassportInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPassportInput, NotificationUncheckedUpdateWithoutPassportInput>
    create: XOR<NotificationCreateWithoutPassportInput, NotificationUncheckedCreateWithoutPassportInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPassportInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPassportInput, NotificationUncheckedUpdateWithoutPassportInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPassportInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPassportInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    passportId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    error?: StringNullableFilter<"Notification"> | string | null
  }

  export type PassportCreateWithoutNotificationsInput = {
    passportNumber: string
    status?: string
    email?: string | null
    phoneNumber?: string | null
    receivedAt?: Date | string
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportUncheckedCreateWithoutNotificationsInput = {
    id?: number
    passportNumber: string
    status?: string
    email?: string | null
    phoneNumber?: string | null
    receivedAt?: Date | string
    withdrawnAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassportCreateOrConnectWithoutNotificationsInput = {
    where: PassportWhereUniqueInput
    create: XOR<PassportCreateWithoutNotificationsInput, PassportUncheckedCreateWithoutNotificationsInput>
  }

  export type PassportUpsertWithoutNotificationsInput = {
    update: XOR<PassportUpdateWithoutNotificationsInput, PassportUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PassportCreateWithoutNotificationsInput, PassportUncheckedCreateWithoutNotificationsInput>
    where?: PassportWhereInput
  }

  export type PassportUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PassportWhereInput
    data: XOR<PassportUpdateWithoutNotificationsInput, PassportUncheckedUpdateWithoutNotificationsInput>
  }

  export type PassportUpdateWithoutNotificationsInput = {
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassportUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    passportNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawnAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyPassportInput = {
    id?: number
    type: string
    status: string
    message: string
    createdAt?: Date | string
    sentAt?: Date | string | null
    error?: string | null
  }

  export type NotificationUpdateWithoutPassportInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateWithoutPassportInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutPassportInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}