
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  address: string
  name: string | null
  dob: Date | null
  nonce: string
  type: UserType
}

/**
 * Model Doctor
 * 
 */
export type Doctor = {
  address: string
  verified: boolean
  document: string
}

/**
 * Model DrugStore
 * 
 */
export type DrugStore = {
  address: string
  verified: boolean
  document: string
}

/**
 * Model Patient
 * 
 */
export type Patient = {
  address: string
  verified: boolean
}

/**
 * Model Validator
 * 
 */
export type Validator = {
  address: string
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  address: string
}

/**
 * Model Medicine
 * 
 */
export type Medicine = {
  medicineId: number
  name: string
  description: string | null
}

/**
 * Model PrescriptionMedicine
 * 
 */
export type PrescriptionMedicine = {
  medicineId: number
  prescriptionId: number
  doses: number
  description: string
  days: string
}

/**
 * Model Prescription
 * 
 */
export type Prescription = {
  prescriptionId: number
  doctorAddress: string
  patientAddress: string
  description: string
  generatedDoc: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserType: {
  unregistered: 'unregistered',
  patient: 'patient',
  doctor: 'doctor',
  drugStore: 'drugStore',
  validator: 'validator'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<GlobalReject>;

  /**
   * `prisma.drugStore`: Exposes CRUD operations for the **DrugStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrugStores
    * const drugStores = await prisma.drugStore.findMany()
    * ```
    */
  get drugStore(): Prisma.DrugStoreDelegate<GlobalReject>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<GlobalReject>;

  /**
   * `prisma.validator`: Exposes CRUD operations for the **Validator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Validators
    * const validators = await prisma.validator.findMany()
    * ```
    */
  get validator(): Prisma.ValidatorDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<GlobalReject>;

  /**
   * `prisma.prescriptionMedicine`: Exposes CRUD operations for the **PrescriptionMedicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionMedicines
    * const prescriptionMedicines = await prisma.prescriptionMedicine.findMany()
    * ```
    */
  get prescriptionMedicine(): Prisma.PrescriptionMedicineDelegate<GlobalReject>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.9.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Doctor: 'Doctor',
    DrugStore: 'DrugStore',
    Patient: 'Patient',
    Validator: 'Validator',
    Admin: 'Admin',
    Medicine: 'Medicine',
    PrescriptionMedicine: 'PrescriptionMedicine',
    Prescription: 'Prescription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    address: string | null
    name: string | null
    dob: Date | null
    nonce: string | null
    type: UserType | null
  }

  export type UserMaxAggregateOutputType = {
    address: string | null
    name: string | null
    dob: Date | null
    nonce: string | null
    type: UserType | null
  }

  export type UserCountAggregateOutputType = {
    address: number
    name: number
    dob: number
    nonce: number
    type: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    address?: true
    name?: true
    dob?: true
    nonce?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    address?: true
    name?: true
    dob?: true
    nonce?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    address?: true
    name?: true
    dob?: true
    nonce?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    address: string
    name: string | null
    dob: Date | null
    nonce: string
    type: UserType
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    address?: boolean
    name?: boolean
    dob?: boolean
    nonce?: boolean
    type?: boolean
    doctor?: boolean | DoctorArgs
    patient?: boolean | PatientArgs
    drugStore?: boolean | DrugStoreArgs
    validator?: boolean | ValidatorArgs
    admin?: boolean | AdminArgs
  }


  export type UserInclude = {
    doctor?: boolean | DoctorArgs
    patient?: boolean | PatientArgs
    drugStore?: boolean | DrugStoreArgs
    validator?: boolean | ValidatorArgs
    admin?: boolean | AdminArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'doctor' ? DoctorGetPayload<S['include'][P]> | null :
        P extends 'patient' ? PatientGetPayload<S['include'][P]> | null :
        P extends 'drugStore' ? DrugStoreGetPayload<S['include'][P]> | null :
        P extends 'validator' ? ValidatorGetPayload<S['include'][P]> | null :
        P extends 'admin' ? AdminGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'doctor' ? DoctorGetPayload<S['select'][P]> | null :
        P extends 'patient' ? PatientGetPayload<S['select'][P]> | null :
        P extends 'drugStore' ? DrugStoreGetPayload<S['select'][P]> | null :
        P extends 'validator' ? ValidatorGetPayload<S['select'][P]> | null :
        P extends 'admin' ? AdminGetPayload<S['select'][P]> | null :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const userWithAddressOnly = await prisma.user.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    doctor<T extends DoctorArgs= {}>(args?: Subset<T, DoctorArgs>): Prisma__DoctorClient<DoctorGetPayload<T> | Null>;

    patient<T extends PatientArgs= {}>(args?: Subset<T, PatientArgs>): Prisma__PatientClient<PatientGetPayload<T> | Null>;

    drugStore<T extends DrugStoreArgs= {}>(args?: Subset<T, DrugStoreArgs>): Prisma__DrugStoreClient<DrugStoreGetPayload<T> | Null>;

    validator<T extends ValidatorArgs= {}>(args?: Subset<T, ValidatorArgs>): Prisma__ValidatorClient<ValidatorGetPayload<T> | Null>;

    admin<T extends AdminArgs= {}>(args?: Subset<T, AdminArgs>): Prisma__AdminClient<AdminGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Doctor
   */


  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    address: string | null
    verified: boolean | null
    document: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    address: string | null
    verified: boolean | null
    document: string | null
  }

  export type DoctorCountAggregateOutputType = {
    address: number
    verified: number
    document: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    address?: true
    verified?: true
    document?: true
  }

  export type DoctorMaxAggregateInputType = {
    address?: true
    verified?: true
    document?: true
  }

  export type DoctorCountAggregateInputType = {
    address?: true
    verified?: true
    document?: true
    _all?: true
  }

  export type DoctorAggregateArgs = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs = {
    where?: DoctorWhereInput
    orderBy?: Enumerable<DoctorOrderByWithAggregationInput>
    by: DoctorScalarFieldEnum[]
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }


  export type DoctorGroupByOutputType = {
    address: string
    verified: boolean
    document: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect = {
    address?: boolean
    verified?: boolean
    document?: boolean
    user?: boolean | UserArgs
  }


  export type DoctorInclude = {
    user?: boolean | UserArgs
  }

  export type DoctorGetPayload<S extends boolean | null | undefined | DoctorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Doctor :
    S extends undefined ? never :
    S extends { include: any } & (DoctorArgs | DoctorFindManyArgs)
    ? Doctor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DoctorArgs | DoctorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Doctor ? Doctor[P] : never
  } 
      : Doctor


  type DoctorCountArgs = 
    Omit<DoctorFindManyArgs, 'select' | 'include'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DoctorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DoctorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindUniqueOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DoctorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DoctorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Doctor'> extends True ? Prisma__DoctorClient<DoctorGetPayload<T>> : Prisma__DoctorClient<DoctorGetPayload<T> | null, null>

    /**
     * Find the first Doctor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DoctorFindFirstOrThrowArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const doctorWithAddressOnly = await prisma.doctor.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends DoctorFindManyArgs>(
      args?: SelectSubset<T, DoctorFindManyArgs>
    ): PrismaPromise<Array<DoctorGetPayload<T>>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
    **/
    create<T extends DoctorCreateArgs>(
      args: SelectSubset<T, DoctorCreateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Create many Doctors.
     *     @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DoctorCreateManyArgs>(
      args?: SelectSubset<T, DoctorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
    **/
    delete<T extends DoctorDeleteArgs>(
      args: SelectSubset<T, DoctorDeleteArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DoctorUpdateArgs>(
      args: SelectSubset<T, DoctorUpdateArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DoctorDeleteManyArgs>(
      args?: SelectSubset<T, DoctorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DoctorUpdateManyArgs>(
      args: SelectSubset<T, DoctorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
    **/
    upsert<T extends DoctorUpsertArgs>(
      args: SelectSubset<T, DoctorUpsertArgs>
    ): Prisma__DoctorClient<DoctorGetPayload<T>>

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DoctorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Doctor base type for findUnique actions
   */
  export type DoctorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUnique
   */
  export interface DoctorFindUniqueArgs extends DoctorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor base type for findFirst actions
   */
  export type DoctorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }

  /**
   * Doctor findFirst
   */
  export interface DoctorFindFirstArgs extends DoctorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: Enumerable<DoctorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: Enumerable<DoctorScalarFieldEnum>
  }


  /**
   * Doctor create
   */
  export type DoctorCreateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }


  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs = {
    /**
     * The data used to create many Doctors.
     */
    data: Enumerable<DoctorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Doctor update
   */
  export type DoctorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }


  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }


  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
  }


  /**
   * Doctor without action
   */
  export type DoctorArgs = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DoctorInclude | null
  }



  /**
   * Model DrugStore
   */


  export type AggregateDrugStore = {
    _count: DrugStoreCountAggregateOutputType | null
    _min: DrugStoreMinAggregateOutputType | null
    _max: DrugStoreMaxAggregateOutputType | null
  }

  export type DrugStoreMinAggregateOutputType = {
    address: string | null
    verified: boolean | null
    document: string | null
  }

  export type DrugStoreMaxAggregateOutputType = {
    address: string | null
    verified: boolean | null
    document: string | null
  }

  export type DrugStoreCountAggregateOutputType = {
    address: number
    verified: number
    document: number
    _all: number
  }


  export type DrugStoreMinAggregateInputType = {
    address?: true
    verified?: true
    document?: true
  }

  export type DrugStoreMaxAggregateInputType = {
    address?: true
    verified?: true
    document?: true
  }

  export type DrugStoreCountAggregateInputType = {
    address?: true
    verified?: true
    document?: true
    _all?: true
  }

  export type DrugStoreAggregateArgs = {
    /**
     * Filter which DrugStore to aggregate.
     */
    where?: DrugStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrugStores to fetch.
     */
    orderBy?: Enumerable<DrugStoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrugStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrugStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrugStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrugStores
    **/
    _count?: true | DrugStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrugStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrugStoreMaxAggregateInputType
  }

  export type GetDrugStoreAggregateType<T extends DrugStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateDrugStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrugStore[P]>
      : GetScalarType<T[P], AggregateDrugStore[P]>
  }




  export type DrugStoreGroupByArgs = {
    where?: DrugStoreWhereInput
    orderBy?: Enumerable<DrugStoreOrderByWithAggregationInput>
    by: DrugStoreScalarFieldEnum[]
    having?: DrugStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrugStoreCountAggregateInputType | true
    _min?: DrugStoreMinAggregateInputType
    _max?: DrugStoreMaxAggregateInputType
  }


  export type DrugStoreGroupByOutputType = {
    address: string
    verified: boolean
    document: string
    _count: DrugStoreCountAggregateOutputType | null
    _min: DrugStoreMinAggregateOutputType | null
    _max: DrugStoreMaxAggregateOutputType | null
  }

  type GetDrugStoreGroupByPayload<T extends DrugStoreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DrugStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrugStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrugStoreGroupByOutputType[P]>
            : GetScalarType<T[P], DrugStoreGroupByOutputType[P]>
        }
      >
    >


  export type DrugStoreSelect = {
    address?: boolean
    verified?: boolean
    document?: boolean
    user?: boolean | UserArgs
  }


  export type DrugStoreInclude = {
    user?: boolean | UserArgs
  }

  export type DrugStoreGetPayload<S extends boolean | null | undefined | DrugStoreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DrugStore :
    S extends undefined ? never :
    S extends { include: any } & (DrugStoreArgs | DrugStoreFindManyArgs)
    ? DrugStore  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DrugStoreArgs | DrugStoreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof DrugStore ? DrugStore[P] : never
  } 
      : DrugStore


  type DrugStoreCountArgs = 
    Omit<DrugStoreFindManyArgs, 'select' | 'include'> & {
      select?: DrugStoreCountAggregateInputType | true
    }

  export interface DrugStoreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DrugStore that matches the filter.
     * @param {DrugStoreFindUniqueArgs} args - Arguments to find a DrugStore
     * @example
     * // Get one DrugStore
     * const drugStore = await prisma.drugStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DrugStoreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DrugStoreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DrugStore'> extends True ? Prisma__DrugStoreClient<DrugStoreGetPayload<T>> : Prisma__DrugStoreClient<DrugStoreGetPayload<T> | null, null>

    /**
     * Find one DrugStore that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DrugStoreFindUniqueOrThrowArgs} args - Arguments to find a DrugStore
     * @example
     * // Get one DrugStore
     * const drugStore = await prisma.drugStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DrugStoreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DrugStoreFindUniqueOrThrowArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Find the first DrugStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreFindFirstArgs} args - Arguments to find a DrugStore
     * @example
     * // Get one DrugStore
     * const drugStore = await prisma.drugStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DrugStoreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DrugStoreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DrugStore'> extends True ? Prisma__DrugStoreClient<DrugStoreGetPayload<T>> : Prisma__DrugStoreClient<DrugStoreGetPayload<T> | null, null>

    /**
     * Find the first DrugStore that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreFindFirstOrThrowArgs} args - Arguments to find a DrugStore
     * @example
     * // Get one DrugStore
     * const drugStore = await prisma.drugStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DrugStoreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DrugStoreFindFirstOrThrowArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Find zero or more DrugStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrugStores
     * const drugStores = await prisma.drugStore.findMany()
     * 
     * // Get first 10 DrugStores
     * const drugStores = await prisma.drugStore.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const drugStoreWithAddressOnly = await prisma.drugStore.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends DrugStoreFindManyArgs>(
      args?: SelectSubset<T, DrugStoreFindManyArgs>
    ): PrismaPromise<Array<DrugStoreGetPayload<T>>>

    /**
     * Create a DrugStore.
     * @param {DrugStoreCreateArgs} args - Arguments to create a DrugStore.
     * @example
     * // Create one DrugStore
     * const DrugStore = await prisma.drugStore.create({
     *   data: {
     *     // ... data to create a DrugStore
     *   }
     * })
     * 
    **/
    create<T extends DrugStoreCreateArgs>(
      args: SelectSubset<T, DrugStoreCreateArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Create many DrugStores.
     *     @param {DrugStoreCreateManyArgs} args - Arguments to create many DrugStores.
     *     @example
     *     // Create many DrugStores
     *     const drugStore = await prisma.drugStore.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DrugStoreCreateManyArgs>(
      args?: SelectSubset<T, DrugStoreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DrugStore.
     * @param {DrugStoreDeleteArgs} args - Arguments to delete one DrugStore.
     * @example
     * // Delete one DrugStore
     * const DrugStore = await prisma.drugStore.delete({
     *   where: {
     *     // ... filter to delete one DrugStore
     *   }
     * })
     * 
    **/
    delete<T extends DrugStoreDeleteArgs>(
      args: SelectSubset<T, DrugStoreDeleteArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Update one DrugStore.
     * @param {DrugStoreUpdateArgs} args - Arguments to update one DrugStore.
     * @example
     * // Update one DrugStore
     * const drugStore = await prisma.drugStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DrugStoreUpdateArgs>(
      args: SelectSubset<T, DrugStoreUpdateArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Delete zero or more DrugStores.
     * @param {DrugStoreDeleteManyArgs} args - Arguments to filter DrugStores to delete.
     * @example
     * // Delete a few DrugStores
     * const { count } = await prisma.drugStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DrugStoreDeleteManyArgs>(
      args?: SelectSubset<T, DrugStoreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrugStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrugStores
     * const drugStore = await prisma.drugStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DrugStoreUpdateManyArgs>(
      args: SelectSubset<T, DrugStoreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DrugStore.
     * @param {DrugStoreUpsertArgs} args - Arguments to update or create a DrugStore.
     * @example
     * // Update or create a DrugStore
     * const drugStore = await prisma.drugStore.upsert({
     *   create: {
     *     // ... data to create a DrugStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrugStore we want to update
     *   }
     * })
    **/
    upsert<T extends DrugStoreUpsertArgs>(
      args: SelectSubset<T, DrugStoreUpsertArgs>
    ): Prisma__DrugStoreClient<DrugStoreGetPayload<T>>

    /**
     * Count the number of DrugStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreCountArgs} args - Arguments to filter DrugStores to count.
     * @example
     * // Count the number of DrugStores
     * const count = await prisma.drugStore.count({
     *   where: {
     *     // ... the filter for the DrugStores we want to count
     *   }
     * })
    **/
    count<T extends DrugStoreCountArgs>(
      args?: Subset<T, DrugStoreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrugStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrugStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrugStoreAggregateArgs>(args: Subset<T, DrugStoreAggregateArgs>): PrismaPromise<GetDrugStoreAggregateType<T>>

    /**
     * Group by DrugStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugStoreGroupByArgs} args - Group by arguments.
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
      T extends DrugStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrugStoreGroupByArgs['orderBy'] }
        : { orderBy?: DrugStoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DrugStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrugStoreGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DrugStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DrugStoreClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DrugStore base type for findUnique actions
   */
  export type DrugStoreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter, which DrugStore to fetch.
     */
    where: DrugStoreWhereUniqueInput
  }

  /**
   * DrugStore findUnique
   */
  export interface DrugStoreFindUniqueArgs extends DrugStoreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DrugStore findUniqueOrThrow
   */
  export type DrugStoreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter, which DrugStore to fetch.
     */
    where: DrugStoreWhereUniqueInput
  }


  /**
   * DrugStore base type for findFirst actions
   */
  export type DrugStoreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter, which DrugStore to fetch.
     */
    where?: DrugStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrugStores to fetch.
     */
    orderBy?: Enumerable<DrugStoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrugStores.
     */
    cursor?: DrugStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrugStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrugStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrugStores.
     */
    distinct?: Enumerable<DrugStoreScalarFieldEnum>
  }

  /**
   * DrugStore findFirst
   */
  export interface DrugStoreFindFirstArgs extends DrugStoreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DrugStore findFirstOrThrow
   */
  export type DrugStoreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter, which DrugStore to fetch.
     */
    where?: DrugStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrugStores to fetch.
     */
    orderBy?: Enumerable<DrugStoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrugStores.
     */
    cursor?: DrugStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrugStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrugStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrugStores.
     */
    distinct?: Enumerable<DrugStoreScalarFieldEnum>
  }


  /**
   * DrugStore findMany
   */
  export type DrugStoreFindManyArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter, which DrugStores to fetch.
     */
    where?: DrugStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrugStores to fetch.
     */
    orderBy?: Enumerable<DrugStoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrugStores.
     */
    cursor?: DrugStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrugStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrugStores.
     */
    skip?: number
    distinct?: Enumerable<DrugStoreScalarFieldEnum>
  }


  /**
   * DrugStore create
   */
  export type DrugStoreCreateArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * The data needed to create a DrugStore.
     */
    data: XOR<DrugStoreCreateInput, DrugStoreUncheckedCreateInput>
  }


  /**
   * DrugStore createMany
   */
  export type DrugStoreCreateManyArgs = {
    /**
     * The data used to create many DrugStores.
     */
    data: Enumerable<DrugStoreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DrugStore update
   */
  export type DrugStoreUpdateArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * The data needed to update a DrugStore.
     */
    data: XOR<DrugStoreUpdateInput, DrugStoreUncheckedUpdateInput>
    /**
     * Choose, which DrugStore to update.
     */
    where: DrugStoreWhereUniqueInput
  }


  /**
   * DrugStore updateMany
   */
  export type DrugStoreUpdateManyArgs = {
    /**
     * The data used to update DrugStores.
     */
    data: XOR<DrugStoreUpdateManyMutationInput, DrugStoreUncheckedUpdateManyInput>
    /**
     * Filter which DrugStores to update
     */
    where?: DrugStoreWhereInput
  }


  /**
   * DrugStore upsert
   */
  export type DrugStoreUpsertArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * The filter to search for the DrugStore to update in case it exists.
     */
    where: DrugStoreWhereUniqueInput
    /**
     * In case the DrugStore found by the `where` argument doesn't exist, create a new DrugStore with this data.
     */
    create: XOR<DrugStoreCreateInput, DrugStoreUncheckedCreateInput>
    /**
     * In case the DrugStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrugStoreUpdateInput, DrugStoreUncheckedUpdateInput>
  }


  /**
   * DrugStore delete
   */
  export type DrugStoreDeleteArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
    /**
     * Filter which DrugStore to delete.
     */
    where: DrugStoreWhereUniqueInput
  }


  /**
   * DrugStore deleteMany
   */
  export type DrugStoreDeleteManyArgs = {
    /**
     * Filter which DrugStores to delete
     */
    where?: DrugStoreWhereInput
  }


  /**
   * DrugStore without action
   */
  export type DrugStoreArgs = {
    /**
     * Select specific fields to fetch from the DrugStore
     */
    select?: DrugStoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DrugStoreInclude | null
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    address: string | null
    verified: boolean | null
  }

  export type PatientMaxAggregateOutputType = {
    address: string | null
    verified: boolean | null
  }

  export type PatientCountAggregateOutputType = {
    address: number
    verified: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    address?: true
    verified?: true
  }

  export type PatientMaxAggregateInputType = {
    address?: true
    verified?: true
  }

  export type PatientCountAggregateInputType = {
    address?: true
    verified?: true
    _all?: true
  }

  export type PatientAggregateArgs = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs = {
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithAggregationInput>
    by: PatientScalarFieldEnum[]
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }


  export type PatientGroupByOutputType = {
    address: string
    verified: boolean
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect = {
    address?: boolean
    verified?: boolean
    user?: boolean | UserArgs
  }


  export type PatientInclude = {
    user?: boolean | UserArgs
  }

  export type PatientGetPayload<S extends boolean | null | undefined | PatientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Patient :
    S extends undefined ? never :
    S extends { include: any } & (PatientArgs | PatientFindManyArgs)
    ? Patient  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PatientArgs | PatientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Patient ? Patient[P] : never
  } 
      : Patient


  type PatientCountArgs = 
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T>> : Prisma__PatientClient<PatientGetPayload<T> | null, null>

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T>> : Prisma__PatientClient<PatientGetPayload<T> | null, null>

    /**
     * Find the first Patient that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const patientWithAddressOnly = await prisma.patient.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs>(
      args?: SelectSubset<T, PatientFindManyArgs>
    ): PrismaPromise<Array<PatientGetPayload<T>>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs>(
      args: SelectSubset<T, PatientCreateArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs>(
      args?: SelectSubset<T, PatientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs>(
      args: SelectSubset<T, PatientDeleteArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs>(
      args: SelectSubset<T, PatientUpdateArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs>(
      args?: SelectSubset<T, PatientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs>(
      args: SelectSubset<T, PatientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs>(
      args: SelectSubset<T, PatientUpsertArgs>
    ): Prisma__PatientClient<PatientGetPayload<T>>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Patient base type for findUnique actions
   */
  export type PatientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUnique
   */
  export interface PatientFindUniqueArgs extends PatientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient base type for findFirst actions
   */
  export type PatientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: Enumerable<PatientScalarFieldEnum>
  }

  /**
   * Patient findFirst
   */
  export interface PatientFindFirstArgs extends PatientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs = {
    /**
     * The data used to create many Patients.
     */
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PatientInclude | null
  }



  /**
   * Model Validator
   */


  export type AggregateValidator = {
    _count: ValidatorCountAggregateOutputType | null
    _min: ValidatorMinAggregateOutputType | null
    _max: ValidatorMaxAggregateOutputType | null
  }

  export type ValidatorMinAggregateOutputType = {
    address: string | null
  }

  export type ValidatorMaxAggregateOutputType = {
    address: string | null
  }

  export type ValidatorCountAggregateOutputType = {
    address: number
    _all: number
  }


  export type ValidatorMinAggregateInputType = {
    address?: true
  }

  export type ValidatorMaxAggregateInputType = {
    address?: true
  }

  export type ValidatorCountAggregateInputType = {
    address?: true
    _all?: true
  }

  export type ValidatorAggregateArgs = {
    /**
     * Filter which Validator to aggregate.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: Enumerable<ValidatorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Validators
    **/
    _count?: true | ValidatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidatorMaxAggregateInputType
  }

  export type GetValidatorAggregateType<T extends ValidatorAggregateArgs> = {
        [P in keyof T & keyof AggregateValidator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidator[P]>
      : GetScalarType<T[P], AggregateValidator[P]>
  }




  export type ValidatorGroupByArgs = {
    where?: ValidatorWhereInput
    orderBy?: Enumerable<ValidatorOrderByWithAggregationInput>
    by: ValidatorScalarFieldEnum[]
    having?: ValidatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidatorCountAggregateInputType | true
    _min?: ValidatorMinAggregateInputType
    _max?: ValidatorMaxAggregateInputType
  }


  export type ValidatorGroupByOutputType = {
    address: string
    _count: ValidatorCountAggregateOutputType | null
    _min: ValidatorMinAggregateOutputType | null
    _max: ValidatorMaxAggregateOutputType | null
  }

  type GetValidatorGroupByPayload<T extends ValidatorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ValidatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidatorGroupByOutputType[P]>
            : GetScalarType<T[P], ValidatorGroupByOutputType[P]>
        }
      >
    >


  export type ValidatorSelect = {
    address?: boolean
    user?: boolean | UserArgs
  }


  export type ValidatorInclude = {
    user?: boolean | UserArgs
  }

  export type ValidatorGetPayload<S extends boolean | null | undefined | ValidatorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Validator :
    S extends undefined ? never :
    S extends { include: any } & (ValidatorArgs | ValidatorFindManyArgs)
    ? Validator  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ValidatorArgs | ValidatorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Validator ? Validator[P] : never
  } 
      : Validator


  type ValidatorCountArgs = 
    Omit<ValidatorFindManyArgs, 'select' | 'include'> & {
      select?: ValidatorCountAggregateInputType | true
    }

  export interface ValidatorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Validator that matches the filter.
     * @param {ValidatorFindUniqueArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ValidatorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ValidatorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Validator'> extends True ? Prisma__ValidatorClient<ValidatorGetPayload<T>> : Prisma__ValidatorClient<ValidatorGetPayload<T> | null, null>

    /**
     * Find one Validator that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ValidatorFindUniqueOrThrowArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ValidatorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ValidatorFindUniqueOrThrowArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Find the first Validator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindFirstArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ValidatorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ValidatorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Validator'> extends True ? Prisma__ValidatorClient<ValidatorGetPayload<T>> : Prisma__ValidatorClient<ValidatorGetPayload<T> | null, null>

    /**
     * Find the first Validator that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindFirstOrThrowArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ValidatorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ValidatorFindFirstOrThrowArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Find zero or more Validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Validators
     * const validators = await prisma.validator.findMany()
     * 
     * // Get first 10 Validators
     * const validators = await prisma.validator.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const validatorWithAddressOnly = await prisma.validator.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends ValidatorFindManyArgs>(
      args?: SelectSubset<T, ValidatorFindManyArgs>
    ): PrismaPromise<Array<ValidatorGetPayload<T>>>

    /**
     * Create a Validator.
     * @param {ValidatorCreateArgs} args - Arguments to create a Validator.
     * @example
     * // Create one Validator
     * const Validator = await prisma.validator.create({
     *   data: {
     *     // ... data to create a Validator
     *   }
     * })
     * 
    **/
    create<T extends ValidatorCreateArgs>(
      args: SelectSubset<T, ValidatorCreateArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Create many Validators.
     *     @param {ValidatorCreateManyArgs} args - Arguments to create many Validators.
     *     @example
     *     // Create many Validators
     *     const validator = await prisma.validator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ValidatorCreateManyArgs>(
      args?: SelectSubset<T, ValidatorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Validator.
     * @param {ValidatorDeleteArgs} args - Arguments to delete one Validator.
     * @example
     * // Delete one Validator
     * const Validator = await prisma.validator.delete({
     *   where: {
     *     // ... filter to delete one Validator
     *   }
     * })
     * 
    **/
    delete<T extends ValidatorDeleteArgs>(
      args: SelectSubset<T, ValidatorDeleteArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Update one Validator.
     * @param {ValidatorUpdateArgs} args - Arguments to update one Validator.
     * @example
     * // Update one Validator
     * const validator = await prisma.validator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ValidatorUpdateArgs>(
      args: SelectSubset<T, ValidatorUpdateArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Delete zero or more Validators.
     * @param {ValidatorDeleteManyArgs} args - Arguments to filter Validators to delete.
     * @example
     * // Delete a few Validators
     * const { count } = await prisma.validator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ValidatorDeleteManyArgs>(
      args?: SelectSubset<T, ValidatorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Validators
     * const validator = await prisma.validator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ValidatorUpdateManyArgs>(
      args: SelectSubset<T, ValidatorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Validator.
     * @param {ValidatorUpsertArgs} args - Arguments to update or create a Validator.
     * @example
     * // Update or create a Validator
     * const validator = await prisma.validator.upsert({
     *   create: {
     *     // ... data to create a Validator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Validator we want to update
     *   }
     * })
    **/
    upsert<T extends ValidatorUpsertArgs>(
      args: SelectSubset<T, ValidatorUpsertArgs>
    ): Prisma__ValidatorClient<ValidatorGetPayload<T>>

    /**
     * Count the number of Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorCountArgs} args - Arguments to filter Validators to count.
     * @example
     * // Count the number of Validators
     * const count = await prisma.validator.count({
     *   where: {
     *     // ... the filter for the Validators we want to count
     *   }
     * })
    **/
    count<T extends ValidatorCountArgs>(
      args?: Subset<T, ValidatorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValidatorAggregateArgs>(args: Subset<T, ValidatorAggregateArgs>): PrismaPromise<GetValidatorAggregateType<T>>

    /**
     * Group by Validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorGroupByArgs} args - Group by arguments.
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
      T extends ValidatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValidatorGroupByArgs['orderBy'] }
        : { orderBy?: ValidatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ValidatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidatorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Validator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ValidatorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Validator base type for findUnique actions
   */
  export type ValidatorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter, which Validator to fetch.
     */
    where: ValidatorWhereUniqueInput
  }

  /**
   * Validator findUnique
   */
  export interface ValidatorFindUniqueArgs extends ValidatorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Validator findUniqueOrThrow
   */
  export type ValidatorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter, which Validator to fetch.
     */
    where: ValidatorWhereUniqueInput
  }


  /**
   * Validator base type for findFirst actions
   */
  export type ValidatorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter, which Validator to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: Enumerable<ValidatorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: Enumerable<ValidatorScalarFieldEnum>
  }

  /**
   * Validator findFirst
   */
  export interface ValidatorFindFirstArgs extends ValidatorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Validator findFirstOrThrow
   */
  export type ValidatorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter, which Validator to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: Enumerable<ValidatorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: Enumerable<ValidatorScalarFieldEnum>
  }


  /**
   * Validator findMany
   */
  export type ValidatorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter, which Validators to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: Enumerable<ValidatorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    distinct?: Enumerable<ValidatorScalarFieldEnum>
  }


  /**
   * Validator create
   */
  export type ValidatorCreateArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * The data needed to create a Validator.
     */
    data: XOR<ValidatorCreateInput, ValidatorUncheckedCreateInput>
  }


  /**
   * Validator createMany
   */
  export type ValidatorCreateManyArgs = {
    /**
     * The data used to create many Validators.
     */
    data: Enumerable<ValidatorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Validator update
   */
  export type ValidatorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * The data needed to update a Validator.
     */
    data: XOR<ValidatorUpdateInput, ValidatorUncheckedUpdateInput>
    /**
     * Choose, which Validator to update.
     */
    where: ValidatorWhereUniqueInput
  }


  /**
   * Validator updateMany
   */
  export type ValidatorUpdateManyArgs = {
    /**
     * The data used to update Validators.
     */
    data: XOR<ValidatorUpdateManyMutationInput, ValidatorUncheckedUpdateManyInput>
    /**
     * Filter which Validators to update
     */
    where?: ValidatorWhereInput
  }


  /**
   * Validator upsert
   */
  export type ValidatorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * The filter to search for the Validator to update in case it exists.
     */
    where: ValidatorWhereUniqueInput
    /**
     * In case the Validator found by the `where` argument doesn't exist, create a new Validator with this data.
     */
    create: XOR<ValidatorCreateInput, ValidatorUncheckedCreateInput>
    /**
     * In case the Validator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValidatorUpdateInput, ValidatorUncheckedUpdateInput>
  }


  /**
   * Validator delete
   */
  export type ValidatorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
    /**
     * Filter which Validator to delete.
     */
    where: ValidatorWhereUniqueInput
  }


  /**
   * Validator deleteMany
   */
  export type ValidatorDeleteManyArgs = {
    /**
     * Filter which Validators to delete
     */
    where?: ValidatorWhereInput
  }


  /**
   * Validator without action
   */
  export type ValidatorArgs = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ValidatorInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    address: string | null
  }

  export type AdminMaxAggregateOutputType = {
    address: string | null
  }

  export type AdminCountAggregateOutputType = {
    address: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    address?: true
  }

  export type AdminMaxAggregateInputType = {
    address?: true
  }

  export type AdminCountAggregateInputType = {
    address?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    address: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    address?: boolean
    user?: boolean | UserArgs
  }


  export type AdminInclude = {
    user?: boolean | UserArgs
  }

  export type AdminGetPayload<S extends boolean | null | undefined | AdminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Admin :
    S extends undefined ? never :
    S extends { include: any } & (AdminArgs | AdminFindManyArgs)
    ? Admin  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdminArgs | AdminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Admin ? Admin[P] : never
  } 
      : Admin


  type AdminCountArgs = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? Prisma__AdminClient<AdminGetPayload<T>> : Prisma__AdminClient<AdminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const adminWithAddressOnly = await prisma.admin.findMany({ select: { address: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): PrismaPromise<Array<AdminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): Prisma__AdminClient<AdminGetPayload<T>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     */
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude | null
  }



  /**
   * Model Medicine
   */


  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    medicineId: number | null
  }

  export type MedicineSumAggregateOutputType = {
    medicineId: number | null
  }

  export type MedicineMinAggregateOutputType = {
    medicineId: number | null
    name: string | null
    description: string | null
  }

  export type MedicineMaxAggregateOutputType = {
    medicineId: number | null
    name: string | null
    description: string | null
  }

  export type MedicineCountAggregateOutputType = {
    medicineId: number
    name: number
    description: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    medicineId?: true
  }

  export type MedicineSumAggregateInputType = {
    medicineId?: true
  }

  export type MedicineMinAggregateInputType = {
    medicineId?: true
    name?: true
    description?: true
  }

  export type MedicineMaxAggregateInputType = {
    medicineId?: true
    name?: true
    description?: true
  }

  export type MedicineCountAggregateInputType = {
    medicineId?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MedicineAggregateArgs = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs = {
    where?: MedicineWhereInput
    orderBy?: Enumerable<MedicineOrderByWithAggregationInput>
    by: MedicineScalarFieldEnum[]
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }


  export type MedicineGroupByOutputType = {
    medicineId: number
    name: string
    description: string | null
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect = {
    medicineId?: boolean
    name?: boolean
    description?: boolean
  }


  export type MedicineGetPayload<S extends boolean | null | undefined | MedicineArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Medicine :
    S extends undefined ? never :
    S extends { include: any } & (MedicineArgs | MedicineFindManyArgs)
    ? Medicine 
    : S extends { select: any } & (MedicineArgs | MedicineFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Medicine ? Medicine[P] : never
  } 
      : Medicine


  type MedicineCountArgs = 
    Omit<MedicineFindManyArgs, 'select' | 'include'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MedicineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MedicineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Medicine'> extends True ? Prisma__MedicineClient<MedicineGetPayload<T>> : Prisma__MedicineClient<MedicineGetPayload<T> | null, null>

    /**
     * Find one Medicine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MedicineFindUniqueOrThrowArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MedicineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MedicineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Medicine'> extends True ? Prisma__MedicineClient<MedicineGetPayload<T>> : Prisma__MedicineClient<MedicineGetPayload<T> | null, null>

    /**
     * Find the first Medicine that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MedicineFindFirstOrThrowArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `medicineId`
     * const medicineWithMedicineIdOnly = await prisma.medicine.findMany({ select: { medicineId: true } })
     * 
    **/
    findMany<T extends MedicineFindManyArgs>(
      args?: SelectSubset<T, MedicineFindManyArgs>
    ): PrismaPromise<Array<MedicineGetPayload<T>>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
    **/
    create<T extends MedicineCreateArgs>(
      args: SelectSubset<T, MedicineCreateArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Create many Medicines.
     *     @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     *     @example
     *     // Create many Medicines
     *     const medicine = await prisma.medicine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MedicineCreateManyArgs>(
      args?: SelectSubset<T, MedicineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
    **/
    delete<T extends MedicineDeleteArgs>(
      args: SelectSubset<T, MedicineDeleteArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MedicineUpdateArgs>(
      args: SelectSubset<T, MedicineUpdateArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MedicineDeleteManyArgs>(
      args?: SelectSubset<T, MedicineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MedicineUpdateManyArgs>(
      args: SelectSubset<T, MedicineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
    **/
    upsert<T extends MedicineUpsertArgs>(
      args: SelectSubset<T, MedicineUpsertArgs>
    ): Prisma__MedicineClient<MedicineGetPayload<T>>

    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MedicineClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Medicine base type for findUnique actions
   */
  export type MedicineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUnique
   */
  export interface MedicineFindUniqueArgs extends MedicineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine base type for findFirst actions
   */
  export type MedicineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }

  /**
   * Medicine findFirst
   */
  export interface MedicineFindFirstArgs extends MedicineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }


  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Enumerable<MedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: Enumerable<MedicineScalarFieldEnum>
  }


  /**
   * Medicine create
   */
  export type MedicineCreateArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }


  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs = {
    /**
     * The data used to create many Medicines.
     */
    data: Enumerable<MedicineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Medicine update
   */
  export type MedicineUpdateArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }


  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }


  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }


  /**
   * Medicine without action
   */
  export type MedicineArgs = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect | null
  }



  /**
   * Model PrescriptionMedicine
   */


  export type AggregatePrescriptionMedicine = {
    _count: PrescriptionMedicineCountAggregateOutputType | null
    _avg: PrescriptionMedicineAvgAggregateOutputType | null
    _sum: PrescriptionMedicineSumAggregateOutputType | null
    _min: PrescriptionMedicineMinAggregateOutputType | null
    _max: PrescriptionMedicineMaxAggregateOutputType | null
  }

  export type PrescriptionMedicineAvgAggregateOutputType = {
    medicineId: number | null
    prescriptionId: number | null
    doses: number | null
  }

  export type PrescriptionMedicineSumAggregateOutputType = {
    medicineId: number | null
    prescriptionId: number | null
    doses: number | null
  }

  export type PrescriptionMedicineMinAggregateOutputType = {
    medicineId: number | null
    prescriptionId: number | null
    doses: number | null
    description: string | null
    days: string | null
  }

  export type PrescriptionMedicineMaxAggregateOutputType = {
    medicineId: number | null
    prescriptionId: number | null
    doses: number | null
    description: string | null
    days: string | null
  }

  export type PrescriptionMedicineCountAggregateOutputType = {
    medicineId: number
    prescriptionId: number
    doses: number
    description: number
    days: number
    _all: number
  }


  export type PrescriptionMedicineAvgAggregateInputType = {
    medicineId?: true
    prescriptionId?: true
    doses?: true
  }

  export type PrescriptionMedicineSumAggregateInputType = {
    medicineId?: true
    prescriptionId?: true
    doses?: true
  }

  export type PrescriptionMedicineMinAggregateInputType = {
    medicineId?: true
    prescriptionId?: true
    doses?: true
    description?: true
    days?: true
  }

  export type PrescriptionMedicineMaxAggregateInputType = {
    medicineId?: true
    prescriptionId?: true
    doses?: true
    description?: true
    days?: true
  }

  export type PrescriptionMedicineCountAggregateInputType = {
    medicineId?: true
    prescriptionId?: true
    doses?: true
    description?: true
    days?: true
    _all?: true
  }

  export type PrescriptionMedicineAggregateArgs = {
    /**
     * Filter which PrescriptionMedicine to aggregate.
     */
    where?: PrescriptionMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedicines to fetch.
     */
    orderBy?: Enumerable<PrescriptionMedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionMedicines
    **/
    _count?: true | PrescriptionMedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionMedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionMedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMedicineMaxAggregateInputType
  }

  export type GetPrescriptionMedicineAggregateType<T extends PrescriptionMedicineAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionMedicine[P]>
      : GetScalarType<T[P], AggregatePrescriptionMedicine[P]>
  }




  export type PrescriptionMedicineGroupByArgs = {
    where?: PrescriptionMedicineWhereInput
    orderBy?: Enumerable<PrescriptionMedicineOrderByWithAggregationInput>
    by: PrescriptionMedicineScalarFieldEnum[]
    having?: PrescriptionMedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionMedicineCountAggregateInputType | true
    _avg?: PrescriptionMedicineAvgAggregateInputType
    _sum?: PrescriptionMedicineSumAggregateInputType
    _min?: PrescriptionMedicineMinAggregateInputType
    _max?: PrescriptionMedicineMaxAggregateInputType
  }


  export type PrescriptionMedicineGroupByOutputType = {
    medicineId: number
    prescriptionId: number
    doses: number
    description: string
    days: string
    _count: PrescriptionMedicineCountAggregateOutputType | null
    _avg: PrescriptionMedicineAvgAggregateOutputType | null
    _sum: PrescriptionMedicineSumAggregateOutputType | null
    _min: PrescriptionMedicineMinAggregateOutputType | null
    _max: PrescriptionMedicineMaxAggregateOutputType | null
  }

  type GetPrescriptionMedicineGroupByPayload<T extends PrescriptionMedicineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PrescriptionMedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionMedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionMedicineGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionMedicineGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionMedicineSelect = {
    medicineId?: boolean
    prescriptionId?: boolean
    doses?: boolean
    description?: boolean
    days?: boolean
  }


  export type PrescriptionMedicineGetPayload<S extends boolean | null | undefined | PrescriptionMedicineArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PrescriptionMedicine :
    S extends undefined ? never :
    S extends { include: any } & (PrescriptionMedicineArgs | PrescriptionMedicineFindManyArgs)
    ? PrescriptionMedicine 
    : S extends { select: any } & (PrescriptionMedicineArgs | PrescriptionMedicineFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PrescriptionMedicine ? PrescriptionMedicine[P] : never
  } 
      : PrescriptionMedicine


  type PrescriptionMedicineCountArgs = 
    Omit<PrescriptionMedicineFindManyArgs, 'select' | 'include'> & {
      select?: PrescriptionMedicineCountAggregateInputType | true
    }

  export interface PrescriptionMedicineDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PrescriptionMedicine that matches the filter.
     * @param {PrescriptionMedicineFindUniqueArgs} args - Arguments to find a PrescriptionMedicine
     * @example
     * // Get one PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrescriptionMedicineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrescriptionMedicineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PrescriptionMedicine'> extends True ? Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>> : Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T> | null, null>

    /**
     * Find one PrescriptionMedicine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrescriptionMedicineFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionMedicine
     * @example
     * // Get one PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrescriptionMedicineFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PrescriptionMedicineFindUniqueOrThrowArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Find the first PrescriptionMedicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineFindFirstArgs} args - Arguments to find a PrescriptionMedicine
     * @example
     * // Get one PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrescriptionMedicineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrescriptionMedicineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PrescriptionMedicine'> extends True ? Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>> : Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T> | null, null>

    /**
     * Find the first PrescriptionMedicine that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineFindFirstOrThrowArgs} args - Arguments to find a PrescriptionMedicine
     * @example
     * // Get one PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrescriptionMedicineFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PrescriptionMedicineFindFirstOrThrowArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Find zero or more PrescriptionMedicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionMedicines
     * const prescriptionMedicines = await prisma.prescriptionMedicine.findMany()
     * 
     * // Get first 10 PrescriptionMedicines
     * const prescriptionMedicines = await prisma.prescriptionMedicine.findMany({ take: 10 })
     * 
     * // Only select the `medicineId`
     * const prescriptionMedicineWithMedicineIdOnly = await prisma.prescriptionMedicine.findMany({ select: { medicineId: true } })
     * 
    **/
    findMany<T extends PrescriptionMedicineFindManyArgs>(
      args?: SelectSubset<T, PrescriptionMedicineFindManyArgs>
    ): PrismaPromise<Array<PrescriptionMedicineGetPayload<T>>>

    /**
     * Create a PrescriptionMedicine.
     * @param {PrescriptionMedicineCreateArgs} args - Arguments to create a PrescriptionMedicine.
     * @example
     * // Create one PrescriptionMedicine
     * const PrescriptionMedicine = await prisma.prescriptionMedicine.create({
     *   data: {
     *     // ... data to create a PrescriptionMedicine
     *   }
     * })
     * 
    **/
    create<T extends PrescriptionMedicineCreateArgs>(
      args: SelectSubset<T, PrescriptionMedicineCreateArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Create many PrescriptionMedicines.
     *     @param {PrescriptionMedicineCreateManyArgs} args - Arguments to create many PrescriptionMedicines.
     *     @example
     *     // Create many PrescriptionMedicines
     *     const prescriptionMedicine = await prisma.prescriptionMedicine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrescriptionMedicineCreateManyArgs>(
      args?: SelectSubset<T, PrescriptionMedicineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PrescriptionMedicine.
     * @param {PrescriptionMedicineDeleteArgs} args - Arguments to delete one PrescriptionMedicine.
     * @example
     * // Delete one PrescriptionMedicine
     * const PrescriptionMedicine = await prisma.prescriptionMedicine.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionMedicine
     *   }
     * })
     * 
    **/
    delete<T extends PrescriptionMedicineDeleteArgs>(
      args: SelectSubset<T, PrescriptionMedicineDeleteArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Update one PrescriptionMedicine.
     * @param {PrescriptionMedicineUpdateArgs} args - Arguments to update one PrescriptionMedicine.
     * @example
     * // Update one PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrescriptionMedicineUpdateArgs>(
      args: SelectSubset<T, PrescriptionMedicineUpdateArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Delete zero or more PrescriptionMedicines.
     * @param {PrescriptionMedicineDeleteManyArgs} args - Arguments to filter PrescriptionMedicines to delete.
     * @example
     * // Delete a few PrescriptionMedicines
     * const { count } = await prisma.prescriptionMedicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrescriptionMedicineDeleteManyArgs>(
      args?: SelectSubset<T, PrescriptionMedicineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionMedicines
     * const prescriptionMedicine = await prisma.prescriptionMedicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrescriptionMedicineUpdateManyArgs>(
      args: SelectSubset<T, PrescriptionMedicineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PrescriptionMedicine.
     * @param {PrescriptionMedicineUpsertArgs} args - Arguments to update or create a PrescriptionMedicine.
     * @example
     * // Update or create a PrescriptionMedicine
     * const prescriptionMedicine = await prisma.prescriptionMedicine.upsert({
     *   create: {
     *     // ... data to create a PrescriptionMedicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionMedicine we want to update
     *   }
     * })
    **/
    upsert<T extends PrescriptionMedicineUpsertArgs>(
      args: SelectSubset<T, PrescriptionMedicineUpsertArgs>
    ): Prisma__PrescriptionMedicineClient<PrescriptionMedicineGetPayload<T>>

    /**
     * Count the number of PrescriptionMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineCountArgs} args - Arguments to filter PrescriptionMedicines to count.
     * @example
     * // Count the number of PrescriptionMedicines
     * const count = await prisma.prescriptionMedicine.count({
     *   where: {
     *     // ... the filter for the PrescriptionMedicines we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionMedicineCountArgs>(
      args?: Subset<T, PrescriptionMedicineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionMedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionMedicineAggregateArgs>(args: Subset<T, PrescriptionMedicineAggregateArgs>): PrismaPromise<GetPrescriptionMedicineAggregateType<T>>

    /**
     * Group by PrescriptionMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicineGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionMedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionMedicineGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionMedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PrescriptionMedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionMedicineGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionMedicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrescriptionMedicineClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PrescriptionMedicine base type for findUnique actions
   */
  export type PrescriptionMedicineFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter, which PrescriptionMedicine to fetch.
     */
    where: PrescriptionMedicineWhereUniqueInput
  }

  /**
   * PrescriptionMedicine findUnique
   */
  export interface PrescriptionMedicineFindUniqueArgs extends PrescriptionMedicineFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PrescriptionMedicine findUniqueOrThrow
   */
  export type PrescriptionMedicineFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter, which PrescriptionMedicine to fetch.
     */
    where: PrescriptionMedicineWhereUniqueInput
  }


  /**
   * PrescriptionMedicine base type for findFirst actions
   */
  export type PrescriptionMedicineFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter, which PrescriptionMedicine to fetch.
     */
    where?: PrescriptionMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedicines to fetch.
     */
    orderBy?: Enumerable<PrescriptionMedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionMedicines.
     */
    cursor?: PrescriptionMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionMedicines.
     */
    distinct?: Enumerable<PrescriptionMedicineScalarFieldEnum>
  }

  /**
   * PrescriptionMedicine findFirst
   */
  export interface PrescriptionMedicineFindFirstArgs extends PrescriptionMedicineFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PrescriptionMedicine findFirstOrThrow
   */
  export type PrescriptionMedicineFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter, which PrescriptionMedicine to fetch.
     */
    where?: PrescriptionMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedicines to fetch.
     */
    orderBy?: Enumerable<PrescriptionMedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionMedicines.
     */
    cursor?: PrescriptionMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionMedicines.
     */
    distinct?: Enumerable<PrescriptionMedicineScalarFieldEnum>
  }


  /**
   * PrescriptionMedicine findMany
   */
  export type PrescriptionMedicineFindManyArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter, which PrescriptionMedicines to fetch.
     */
    where?: PrescriptionMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedicines to fetch.
     */
    orderBy?: Enumerable<PrescriptionMedicineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionMedicines.
     */
    cursor?: PrescriptionMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedicines.
     */
    skip?: number
    distinct?: Enumerable<PrescriptionMedicineScalarFieldEnum>
  }


  /**
   * PrescriptionMedicine create
   */
  export type PrescriptionMedicineCreateArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * The data needed to create a PrescriptionMedicine.
     */
    data: XOR<PrescriptionMedicineCreateInput, PrescriptionMedicineUncheckedCreateInput>
  }


  /**
   * PrescriptionMedicine createMany
   */
  export type PrescriptionMedicineCreateManyArgs = {
    /**
     * The data used to create many PrescriptionMedicines.
     */
    data: Enumerable<PrescriptionMedicineCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PrescriptionMedicine update
   */
  export type PrescriptionMedicineUpdateArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * The data needed to update a PrescriptionMedicine.
     */
    data: XOR<PrescriptionMedicineUpdateInput, PrescriptionMedicineUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionMedicine to update.
     */
    where: PrescriptionMedicineWhereUniqueInput
  }


  /**
   * PrescriptionMedicine updateMany
   */
  export type PrescriptionMedicineUpdateManyArgs = {
    /**
     * The data used to update PrescriptionMedicines.
     */
    data: XOR<PrescriptionMedicineUpdateManyMutationInput, PrescriptionMedicineUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionMedicines to update
     */
    where?: PrescriptionMedicineWhereInput
  }


  /**
   * PrescriptionMedicine upsert
   */
  export type PrescriptionMedicineUpsertArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * The filter to search for the PrescriptionMedicine to update in case it exists.
     */
    where: PrescriptionMedicineWhereUniqueInput
    /**
     * In case the PrescriptionMedicine found by the `where` argument doesn't exist, create a new PrescriptionMedicine with this data.
     */
    create: XOR<PrescriptionMedicineCreateInput, PrescriptionMedicineUncheckedCreateInput>
    /**
     * In case the PrescriptionMedicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionMedicineUpdateInput, PrescriptionMedicineUncheckedUpdateInput>
  }


  /**
   * PrescriptionMedicine delete
   */
  export type PrescriptionMedicineDeleteArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
    /**
     * Filter which PrescriptionMedicine to delete.
     */
    where: PrescriptionMedicineWhereUniqueInput
  }


  /**
   * PrescriptionMedicine deleteMany
   */
  export type PrescriptionMedicineDeleteManyArgs = {
    /**
     * Filter which PrescriptionMedicines to delete
     */
    where?: PrescriptionMedicineWhereInput
  }


  /**
   * PrescriptionMedicine without action
   */
  export type PrescriptionMedicineArgs = {
    /**
     * Select specific fields to fetch from the PrescriptionMedicine
     */
    select?: PrescriptionMedicineSelect | null
  }



  /**
   * Model Prescription
   */


  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    prescriptionId: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    prescriptionId: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    prescriptionId: number | null
    doctorAddress: string | null
    patientAddress: string | null
    description: string | null
    generatedDoc: string | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    prescriptionId: number | null
    doctorAddress: string | null
    patientAddress: string | null
    description: string | null
    generatedDoc: string | null
  }

  export type PrescriptionCountAggregateOutputType = {
    prescriptionId: number
    doctorAddress: number
    patientAddress: number
    description: number
    generatedDoc: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    prescriptionId?: true
  }

  export type PrescriptionSumAggregateInputType = {
    prescriptionId?: true
  }

  export type PrescriptionMinAggregateInputType = {
    prescriptionId?: true
    doctorAddress?: true
    patientAddress?: true
    description?: true
    generatedDoc?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    prescriptionId?: true
    doctorAddress?: true
    patientAddress?: true
    description?: true
    generatedDoc?: true
  }

  export type PrescriptionCountAggregateInputType = {
    prescriptionId?: true
    doctorAddress?: true
    patientAddress?: true
    description?: true
    generatedDoc?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: Enumerable<PrescriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs = {
    where?: PrescriptionWhereInput
    orderBy?: Enumerable<PrescriptionOrderByWithAggregationInput>
    by: PrescriptionScalarFieldEnum[]
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }


  export type PrescriptionGroupByOutputType = {
    prescriptionId: number
    doctorAddress: string
    patientAddress: string
    description: string
    generatedDoc: string
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect = {
    prescriptionId?: boolean
    doctorAddress?: boolean
    patientAddress?: boolean
    description?: boolean
    generatedDoc?: boolean
  }


  export type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Prescription :
    S extends undefined ? never :
    S extends { include: any } & (PrescriptionArgs | PrescriptionFindManyArgs)
    ? Prescription 
    : S extends { select: any } & (PrescriptionArgs | PrescriptionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Prescription ? Prescription[P] : never
  } 
      : Prescription


  type PrescriptionCountArgs = 
    Omit<PrescriptionFindManyArgs, 'select' | 'include'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrescriptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrescriptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Prescription'> extends True ? Prisma__PrescriptionClient<PrescriptionGetPayload<T>> : Prisma__PrescriptionClient<PrescriptionGetPayload<T> | null, null>

    /**
     * Find one Prescription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrescriptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrescriptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Prescription'> extends True ? Prisma__PrescriptionClient<PrescriptionGetPayload<T>> : Prisma__PrescriptionClient<PrescriptionGetPayload<T> | null, null>

    /**
     * Find the first Prescription that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `prescriptionId`
     * const prescriptionWithPrescriptionIdOnly = await prisma.prescription.findMany({ select: { prescriptionId: true } })
     * 
    **/
    findMany<T extends PrescriptionFindManyArgs>(
      args?: SelectSubset<T, PrescriptionFindManyArgs>
    ): PrismaPromise<Array<PrescriptionGetPayload<T>>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
    **/
    create<T extends PrescriptionCreateArgs>(
      args: SelectSubset<T, PrescriptionCreateArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Create many Prescriptions.
     *     @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     *     @example
     *     // Create many Prescriptions
     *     const prescription = await prisma.prescription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrescriptionCreateManyArgs>(
      args?: SelectSubset<T, PrescriptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
    **/
    delete<T extends PrescriptionDeleteArgs>(
      args: SelectSubset<T, PrescriptionDeleteArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrescriptionUpdateArgs>(
      args: SelectSubset<T, PrescriptionUpdateArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrescriptionDeleteManyArgs>(
      args?: SelectSubset<T, PrescriptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrescriptionUpdateManyArgs>(
      args: SelectSubset<T, PrescriptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
    **/
    upsert<T extends PrescriptionUpsertArgs>(
      args: SelectSubset<T, PrescriptionUpsertArgs>
    ): Prisma__PrescriptionClient<PrescriptionGetPayload<T>>

    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrescriptionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Prescription base type for findUnique actions
   */
  export type PrescriptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUnique
   */
  export interface PrescriptionFindUniqueArgs extends PrescriptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }


  /**
   * Prescription base type for findFirst actions
   */
  export type PrescriptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: Enumerable<PrescriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: Enumerable<PrescriptionScalarFieldEnum>
  }

  /**
   * Prescription findFirst
   */
  export interface PrescriptionFindFirstArgs extends PrescriptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: Enumerable<PrescriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: Enumerable<PrescriptionScalarFieldEnum>
  }


  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: Enumerable<PrescriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: Enumerable<PrescriptionScalarFieldEnum>
  }


  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }


  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs = {
    /**
     * The data used to create many Prescriptions.
     */
    data: Enumerable<PrescriptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }


  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
  }


  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }


  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }


  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
  }


  /**
   * Prescription without action
   */
  export type PrescriptionArgs = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    address: 'address'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    address: 'address',
    verified: 'verified',
    document: 'document'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DrugStoreScalarFieldEnum: {
    address: 'address',
    verified: 'verified',
    document: 'document'
  };

  export type DrugStoreScalarFieldEnum = (typeof DrugStoreScalarFieldEnum)[keyof typeof DrugStoreScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    medicineId: 'medicineId',
    name: 'name',
    description: 'description'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    address: 'address',
    verified: 'verified'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PrescriptionMedicineScalarFieldEnum: {
    medicineId: 'medicineId',
    prescriptionId: 'prescriptionId',
    doses: 'doses',
    description: 'description',
    days: 'days'
  };

  export type PrescriptionMedicineScalarFieldEnum = (typeof PrescriptionMedicineScalarFieldEnum)[keyof typeof PrescriptionMedicineScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    prescriptionId: 'prescriptionId',
    doctorAddress: 'doctorAddress',
    patientAddress: 'patientAddress',
    description: 'description',
    generatedDoc: 'generatedDoc'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    address: 'address',
    name: 'name',
    dob: 'dob',
    nonce: 'nonce',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ValidatorScalarFieldEnum: {
    address: 'address'
  };

  export type ValidatorScalarFieldEnum = (typeof ValidatorScalarFieldEnum)[keyof typeof ValidatorScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    address?: StringFilter | string
    name?: StringNullableFilter | string | null
    dob?: DateTimeNullableFilter | Date | string | null
    nonce?: StringFilter | string
    type?: EnumUserTypeFilter | UserType
    doctor?: XOR<DoctorRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientRelationFilter, PatientWhereInput> | null
    drugStore?: XOR<DrugStoreRelationFilter, DrugStoreWhereInput> | null
    validator?: XOR<ValidatorRelationFilter, ValidatorWhereInput> | null
    admin?: XOR<AdminRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    address?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    nonce?: SortOrder
    type?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    drugStore?: DrugStoreOrderByWithRelationInput
    validator?: ValidatorOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    address?: string
  }

  export type UserOrderByWithAggregationInput = {
    address?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    nonce?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    dob?: DateTimeNullableWithAggregatesFilter | Date | string | null
    nonce?: StringWithAggregatesFilter | string
    type?: EnumUserTypeWithAggregatesFilter | UserType
  }

  export type DoctorWhereInput = {
    AND?: Enumerable<DoctorWhereInput>
    OR?: Enumerable<DoctorWhereInput>
    NOT?: Enumerable<DoctorWhereInput>
    address?: StringFilter | string
    verified?: BoolFilter | boolean
    document?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DoctorOrderByWithRelationInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DoctorWhereUniqueInput = {
    address?: string
  }

  export type DoctorOrderByWithAggregationInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DoctorScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
    verified?: BoolWithAggregatesFilter | boolean
    document?: StringWithAggregatesFilter | string
  }

  export type DrugStoreWhereInput = {
    AND?: Enumerable<DrugStoreWhereInput>
    OR?: Enumerable<DrugStoreWhereInput>
    NOT?: Enumerable<DrugStoreWhereInput>
    address?: StringFilter | string
    verified?: BoolFilter | boolean
    document?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DrugStoreOrderByWithRelationInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DrugStoreWhereUniqueInput = {
    address?: string
  }

  export type DrugStoreOrderByWithAggregationInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
    _count?: DrugStoreCountOrderByAggregateInput
    _max?: DrugStoreMaxOrderByAggregateInput
    _min?: DrugStoreMinOrderByAggregateInput
  }

  export type DrugStoreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DrugStoreScalarWhereWithAggregatesInput>
    OR?: Enumerable<DrugStoreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DrugStoreScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
    verified?: BoolWithAggregatesFilter | boolean
    document?: StringWithAggregatesFilter | string
  }

  export type PatientWhereInput = {
    AND?: Enumerable<PatientWhereInput>
    OR?: Enumerable<PatientWhereInput>
    NOT?: Enumerable<PatientWhereInput>
    address?: StringFilter | string
    verified?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PatientOrderByWithRelationInput = {
    address?: SortOrder
    verified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = {
    address?: string
  }

  export type PatientOrderByWithAggregationInput = {
    address?: SortOrder
    verified?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PatientScalarWhereWithAggregatesInput>
    OR?: Enumerable<PatientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PatientScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
    verified?: BoolWithAggregatesFilter | boolean
  }

  export type ValidatorWhereInput = {
    AND?: Enumerable<ValidatorWhereInput>
    OR?: Enumerable<ValidatorWhereInput>
    NOT?: Enumerable<ValidatorWhereInput>
    address?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ValidatorOrderByWithRelationInput = {
    address?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ValidatorWhereUniqueInput = {
    address?: string
  }

  export type ValidatorOrderByWithAggregationInput = {
    address?: SortOrder
    _count?: ValidatorCountOrderByAggregateInput
    _max?: ValidatorMaxOrderByAggregateInput
    _min?: ValidatorMinOrderByAggregateInput
  }

  export type ValidatorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ValidatorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ValidatorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ValidatorScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    address?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    address?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = {
    address?: string
  }

  export type AdminOrderByWithAggregationInput = {
    address?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    address?: StringWithAggregatesFilter | string
  }

  export type MedicineWhereInput = {
    AND?: Enumerable<MedicineWhereInput>
    OR?: Enumerable<MedicineWhereInput>
    NOT?: Enumerable<MedicineWhereInput>
    medicineId?: IntFilter | number
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
  }

  export type MedicineOrderByWithRelationInput = {
    medicineId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineWhereUniqueInput = {
    medicineId?: number
  }

  export type MedicineOrderByWithAggregationInput = {
    medicineId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    OR?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MedicineScalarWhereWithAggregatesInput>
    medicineId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type PrescriptionMedicineWhereInput = {
    AND?: Enumerable<PrescriptionMedicineWhereInput>
    OR?: Enumerable<PrescriptionMedicineWhereInput>
    NOT?: Enumerable<PrescriptionMedicineWhereInput>
    medicineId?: IntFilter | number
    prescriptionId?: IntFilter | number
    doses?: IntFilter | number
    description?: StringFilter | string
    days?: StringFilter | string
  }

  export type PrescriptionMedicineOrderByWithRelationInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
    description?: SortOrder
    days?: SortOrder
  }

  export type PrescriptionMedicineWhereUniqueInput = {
    medicineId_prescriptionId?: PrescriptionMedicineMedicineIdPrescriptionIdCompoundUniqueInput
  }

  export type PrescriptionMedicineOrderByWithAggregationInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
    description?: SortOrder
    days?: SortOrder
    _count?: PrescriptionMedicineCountOrderByAggregateInput
    _avg?: PrescriptionMedicineAvgOrderByAggregateInput
    _max?: PrescriptionMedicineMaxOrderByAggregateInput
    _min?: PrescriptionMedicineMinOrderByAggregateInput
    _sum?: PrescriptionMedicineSumOrderByAggregateInput
  }

  export type PrescriptionMedicineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrescriptionMedicineScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrescriptionMedicineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrescriptionMedicineScalarWhereWithAggregatesInput>
    medicineId?: IntWithAggregatesFilter | number
    prescriptionId?: IntWithAggregatesFilter | number
    doses?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    days?: StringWithAggregatesFilter | string
  }

  export type PrescriptionWhereInput = {
    AND?: Enumerable<PrescriptionWhereInput>
    OR?: Enumerable<PrescriptionWhereInput>
    NOT?: Enumerable<PrescriptionWhereInput>
    prescriptionId?: IntFilter | number
    doctorAddress?: StringFilter | string
    patientAddress?: StringFilter | string
    description?: StringFilter | string
    generatedDoc?: StringFilter | string
  }

  export type PrescriptionOrderByWithRelationInput = {
    prescriptionId?: SortOrder
    doctorAddress?: SortOrder
    patientAddress?: SortOrder
    description?: SortOrder
    generatedDoc?: SortOrder
  }

  export type PrescriptionWhereUniqueInput = {
    prescriptionId?: number
  }

  export type PrescriptionOrderByWithAggregationInput = {
    prescriptionId?: SortOrder
    doctorAddress?: SortOrder
    patientAddress?: SortOrder
    description?: SortOrder
    generatedDoc?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrescriptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrescriptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrescriptionScalarWhereWithAggregatesInput>
    prescriptionId?: IntWithAggregatesFilter | number
    doctorAddress?: StringWithAggregatesFilter | string
    patientAddress?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    generatedDoc?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreCreateNestedOneWithoutUserInput
    validator?: ValidatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreUncheckedCreateNestedOneWithoutUserInput
    validator?: ValidatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUpdateOneWithoutUserNestedInput
    validator?: ValidatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUncheckedUpdateOneWithoutUserNestedInput
    validator?: ValidatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
  }

  export type UserUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
  }

  export type UserUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
  }

  export type DoctorCreateInput = {
    verified?: boolean
    document: string
    user: UserCreateNestedOneWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    address: string
    verified?: boolean
    document: string
  }

  export type DoctorUpdateInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateManyInput = {
    address: string
    verified?: boolean
    document: string
  }

  export type DoctorUpdateManyMutationInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DrugStoreCreateInput = {
    verified?: boolean
    document: string
    user: UserCreateNestedOneWithoutDrugStoreInput
  }

  export type DrugStoreUncheckedCreateInput = {
    address: string
    verified?: boolean
    document: string
  }

  export type DrugStoreUpdateInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDrugStoreNestedInput
  }

  export type DrugStoreUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DrugStoreCreateManyInput = {
    address: string
    verified?: boolean
    document: string
  }

  export type DrugStoreUpdateManyMutationInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DrugStoreUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    verified?: boolean
    user: UserCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    address: string
    verified?: boolean
  }

  export type PatientUpdateInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatientCreateManyInput = {
    address: string
    verified?: boolean
  }

  export type PatientUpdateManyMutationInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatientUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ValidatorCreateInput = {
    user: UserCreateNestedOneWithoutValidatorInput
  }

  export type ValidatorUncheckedCreateInput = {
    address: string
  }

  export type ValidatorUpdateInput = {
    user?: UserUpdateOneRequiredWithoutValidatorNestedInput
  }

  export type ValidatorUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ValidatorCreateManyInput = {
    address: string
  }

  export type ValidatorUpdateManyMutationInput = {

  }

  export type ValidatorUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    address: string
  }

  export type AdminUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    address: string
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineCreateInput = {
    name: string
    description?: string | null
  }

  export type MedicineUncheckedCreateInput = {
    medicineId?: number
    name: string
    description?: string | null
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineUncheckedUpdateInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineCreateManyInput = {
    medicineId?: number
    name: string
    description?: string | null
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineUncheckedUpdateManyInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionMedicineCreateInput = {
    medicineId: number
    prescriptionId: number
    doses?: number
    description: string
    days: string
  }

  export type PrescriptionMedicineUncheckedCreateInput = {
    medicineId: number
    prescriptionId: number
    doses?: number
    description: string
    days: string
  }

  export type PrescriptionMedicineUpdateInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doses?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionMedicineUncheckedUpdateInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doses?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionMedicineCreateManyInput = {
    medicineId: number
    prescriptionId: number
    doses?: number
    description: string
    days: string
  }

  export type PrescriptionMedicineUpdateManyMutationInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doses?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionMedicineUncheckedUpdateManyInput = {
    medicineId?: IntFieldUpdateOperationsInput | number
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doses?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateInput = {
    doctorAddress: string
    patientAddress: string
    description: string
    generatedDoc: string
  }

  export type PrescriptionUncheckedCreateInput = {
    prescriptionId?: number
    doctorAddress: string
    patientAddress: string
    description: string
    generatedDoc: string
  }

  export type PrescriptionUpdateInput = {
    doctorAddress?: StringFieldUpdateOperationsInput | string
    patientAddress?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    generatedDoc?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionUncheckedUpdateInput = {
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doctorAddress?: StringFieldUpdateOperationsInput | string
    patientAddress?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    generatedDoc?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateManyInput = {
    prescriptionId?: number
    doctorAddress: string
    patientAddress: string
    description: string
    generatedDoc: string
  }

  export type PrescriptionUpdateManyMutationInput = {
    doctorAddress?: StringFieldUpdateOperationsInput | string
    patientAddress?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    generatedDoc?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    prescriptionId?: IntFieldUpdateOperationsInput | number
    doctorAddress?: StringFieldUpdateOperationsInput | string
    patientAddress?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    generatedDoc?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type EnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type DoctorRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type DrugStoreRelationFilter = {
    is?: DrugStoreWhereInput | null
    isNot?: DrugStoreWhereInput | null
  }

  export type ValidatorRelationFilter = {
    is?: ValidatorWhereInput | null
    isNot?: ValidatorWhereInput | null
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    nonce?: SortOrder
    type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    nonce?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    address?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    nonce?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DoctorCountOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DrugStoreCountOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type DrugStoreMaxOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type DrugStoreMinOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
    document?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    address?: SortOrder
    verified?: SortOrder
  }

  export type ValidatorCountOrderByAggregateInput = {
    address?: SortOrder
  }

  export type ValidatorMaxOrderByAggregateInput = {
    address?: SortOrder
  }

  export type ValidatorMinOrderByAggregateInput = {
    address?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    address?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    address?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    address?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type MedicineCountOrderByAggregateInput = {
    medicineId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    medicineId?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    medicineId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    medicineId?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    medicineId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type PrescriptionMedicineMedicineIdPrescriptionIdCompoundUniqueInput = {
    medicineId: number
    prescriptionId: number
  }

  export type PrescriptionMedicineCountOrderByAggregateInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
    description?: SortOrder
    days?: SortOrder
  }

  export type PrescriptionMedicineAvgOrderByAggregateInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
  }

  export type PrescriptionMedicineMaxOrderByAggregateInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
    description?: SortOrder
    days?: SortOrder
  }

  export type PrescriptionMedicineMinOrderByAggregateInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
    description?: SortOrder
    days?: SortOrder
  }

  export type PrescriptionMedicineSumOrderByAggregateInput = {
    medicineId?: SortOrder
    prescriptionId?: SortOrder
    doses?: SortOrder
  }

  export type PrescriptionCountOrderByAggregateInput = {
    prescriptionId?: SortOrder
    doctorAddress?: SortOrder
    patientAddress?: SortOrder
    description?: SortOrder
    generatedDoc?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    prescriptionId?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    prescriptionId?: SortOrder
    doctorAddress?: SortOrder
    patientAddress?: SortOrder
    description?: SortOrder
    generatedDoc?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    prescriptionId?: SortOrder
    doctorAddress?: SortOrder
    patientAddress?: SortOrder
    description?: SortOrder
    generatedDoc?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    prescriptionId?: SortOrder
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DrugStoreCreateNestedOneWithoutUserInput = {
    create?: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
    connectOrCreate?: DrugStoreCreateOrConnectWithoutUserInput
    connect?: DrugStoreWhereUniqueInput
  }

  export type ValidatorCreateNestedOneWithoutUserInput = {
    create?: XOR<ValidatorCreateWithoutUserInput, ValidatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ValidatorCreateOrConnectWithoutUserInput
    connect?: ValidatorWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DrugStoreUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
    connectOrCreate?: DrugStoreCreateOrConnectWithoutUserInput
    connect?: DrugStoreWhereUniqueInput
  }

  export type ValidatorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ValidatorCreateWithoutUserInput, ValidatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ValidatorCreateOrConnectWithoutUserInput
    connect?: ValidatorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: UserType
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DrugStoreUpdateOneWithoutUserNestedInput = {
    create?: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
    connectOrCreate?: DrugStoreCreateOrConnectWithoutUserInput
    upsert?: DrugStoreUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DrugStoreWhereUniqueInput
    update?: XOR<DrugStoreUpdateWithoutUserInput, DrugStoreUncheckedUpdateWithoutUserInput>
  }

  export type ValidatorUpdateOneWithoutUserNestedInput = {
    create?: XOR<ValidatorCreateWithoutUserInput, ValidatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ValidatorCreateOrConnectWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ValidatorWhereUniqueInput
    update?: XOR<ValidatorUpdateWithoutUserInput, ValidatorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DrugStoreUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
    connectOrCreate?: DrugStoreCreateOrConnectWithoutUserInput
    upsert?: DrugStoreUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: DrugStoreWhereUniqueInput
    update?: XOR<DrugStoreUpdateWithoutUserInput, DrugStoreUncheckedUpdateWithoutUserInput>
  }

  export type ValidatorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ValidatorCreateWithoutUserInput, ValidatorUncheckedCreateWithoutUserInput>
    connectOrCreate?: ValidatorCreateOrConnectWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ValidatorWhereUniqueInput
    update?: XOR<ValidatorUpdateWithoutUserInput, ValidatorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserCreateNestedOneWithoutDrugStoreInput = {
    create?: XOR<UserCreateWithoutDrugStoreInput, UserUncheckedCreateWithoutDrugStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrugStoreInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDrugStoreNestedInput = {
    create?: XOR<UserCreateWithoutDrugStoreInput, UserUncheckedCreateWithoutDrugStoreInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrugStoreInput
    upsert?: UserUpsertWithoutDrugStoreInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDrugStoreInput, UserUncheckedUpdateWithoutDrugStoreInput>
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserCreateNestedOneWithoutValidatorInput = {
    create?: XOR<UserCreateWithoutValidatorInput, UserUncheckedCreateWithoutValidatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutValidatorNestedInput = {
    create?: XOR<UserCreateWithoutValidatorInput, UserUncheckedCreateWithoutValidatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatorInput
    upsert?: UserUpsertWithoutValidatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutValidatorInput, UserUncheckedUpdateWithoutValidatorInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DoctorCreateWithoutUserInput = {
    verified?: boolean
    document: string
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    verified?: boolean
    document: string
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    verified?: boolean
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    verified?: boolean
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DrugStoreCreateWithoutUserInput = {
    verified?: boolean
    document: string
  }

  export type DrugStoreUncheckedCreateWithoutUserInput = {
    verified?: boolean
    document: string
  }

  export type DrugStoreCreateOrConnectWithoutUserInput = {
    where: DrugStoreWhereUniqueInput
    create: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
  }

  export type ValidatorCreateWithoutUserInput = {

  }

  export type ValidatorUncheckedCreateWithoutUserInput = {

  }

  export type ValidatorCreateOrConnectWithoutUserInput = {
    where: ValidatorWhereUniqueInput
    create: XOR<ValidatorCreateWithoutUserInput, ValidatorUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {

  }

  export type AdminUncheckedCreateWithoutUserInput = {

  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DrugStoreUpsertWithoutUserInput = {
    update: XOR<DrugStoreUpdateWithoutUserInput, DrugStoreUncheckedUpdateWithoutUserInput>
    create: XOR<DrugStoreCreateWithoutUserInput, DrugStoreUncheckedCreateWithoutUserInput>
  }

  export type DrugStoreUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type DrugStoreUncheckedUpdateWithoutUserInput = {
    verified?: BoolFieldUpdateOperationsInput | boolean
    document?: StringFieldUpdateOperationsInput | string
  }

  export type ValidatorUpdateWithoutUserInput = {

  }

  export type ValidatorUncheckedUpdateWithoutUserInput = {

  }

  export type AdminUpdateWithoutUserInput = {

  }

  export type AdminUncheckedUpdateWithoutUserInput = {

  }

  export type UserCreateWithoutDoctorInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    patient?: PatientCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreCreateNestedOneWithoutUserInput
    validator?: ValidatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreUncheckedCreateNestedOneWithoutUserInput
    validator?: ValidatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    patient?: PatientUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUpdateOneWithoutUserNestedInput
    validator?: ValidatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUncheckedUpdateOneWithoutUserNestedInput
    validator?: ValidatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDrugStoreInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    validator?: ValidatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrugStoreInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    validator?: ValidatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrugStoreInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrugStoreInput, UserUncheckedCreateWithoutDrugStoreInput>
  }

  export type UserUpsertWithoutDrugStoreInput = {
    update: XOR<UserUpdateWithoutDrugStoreInput, UserUncheckedUpdateWithoutDrugStoreInput>
    create: XOR<UserCreateWithoutDrugStoreInput, UserUncheckedCreateWithoutDrugStoreInput>
  }

  export type UserUpdateWithoutDrugStoreInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    validator?: ValidatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrugStoreInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    validator?: ValidatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPatientInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreCreateNestedOneWithoutUserInput
    validator?: ValidatorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreUncheckedCreateNestedOneWithoutUserInput
    validator?: ValidatorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUpdateOneWithoutUserNestedInput
    validator?: ValidatorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUncheckedUpdateOneWithoutUserNestedInput
    validator?: ValidatorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutValidatorInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutValidatorInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutValidatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidatorInput, UserUncheckedCreateWithoutValidatorInput>
  }

  export type UserUpsertWithoutValidatorInput = {
    update: XOR<UserUpdateWithoutValidatorInput, UserUncheckedUpdateWithoutValidatorInput>
    create: XOR<UserCreateWithoutValidatorInput, UserUncheckedCreateWithoutValidatorInput>
  }

  export type UserUpdateWithoutValidatorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutValidatorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreCreateNestedOneWithoutUserInput
    validator?: ValidatorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    address: string
    name?: string | null
    dob?: Date | string | null
    nonce: string
    type?: UserType
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    drugStore?: DrugStoreUncheckedCreateNestedOneWithoutUserInput
    validator?: ValidatorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUpdateOneWithoutUserNestedInput
    validator?: ValidatorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nonce?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | UserType
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    drugStore?: DrugStoreUncheckedUpdateOneWithoutUserNestedInput
    validator?: ValidatorUncheckedUpdateOneWithoutUserNestedInput
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