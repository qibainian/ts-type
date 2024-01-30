/** First第一个元素 easy */
/** question:实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。 */
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
type arr3 = [];

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3
type head3 = First<arr3> // 应推导出 never

/** answer:First */
type First<T extends readonly any[]> = T extends [] ? never : T[0];
// type First<T extends readonly any[]> = T extends [infer A, ...infer rest] ? A : never;
// type First<T extends readonly any[]> = T['length'] extends 0 ? never : T[0];
