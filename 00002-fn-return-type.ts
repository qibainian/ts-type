/** 获取函数返回类型 medium */
/** [T extends Function] 确保 T 是一个函数类型 ;
 *  [(...args: any) => infer R] 接受任意参数并返回一个待推断的类型R,是一个函数类型的定义,其中(...args: any)表示任意数量的参数,infer R表示用于类型推断的占位符 ;
 *  [T extends (...args: any) => infer R] 进一步检查 T 是否是一个函数类型，如果是，就提取函数的返回类型，并用 infer R 指定为 R ;
 *  [? R : never] 如果 T 是一个函数类型，则整个条件类型的结果就是 R，否则是 never
 */
type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : never;

/**例如 */
const fn1 = (v: boolean) => { return v ? 'true' : 2 };
/** 应推导出 "true" | 2 */
type fnA = MyReturnType<typeof fn1>;

const fn2 = (v: boolean) => { return v ? false : Symbol(1) };
/** 应推导出 false | symbol */
type fnB = MyReturnType<typeof fn2>;
