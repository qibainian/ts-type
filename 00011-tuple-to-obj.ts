/** TupleToObject元组转换为对象 easy */
/** question:将一个元组类型转换为对象类型，这个对象类型的键值和元组中的元素对应。 */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
type result1 = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type Tuple2 = [2];
type result2 = TupleToObject<Tuple2>; // expected { 2:2}

type Tuple3 = [];
type result3 = TupleToObject<Tuple3>; // expected { }

type Tuple4 = [''];
type result4 = TupleToObject<Tuple4>; // expected {"":"" }

type Tuple5 = [symbol];
type result5 = TupleToObject<Tuple5>; // expected {[x: symbol]: symbol }

/** answer:TupleToObject */
type TupleToObject<T extends readonly PropertyKey[]> = { [K in T[number]]: K };
