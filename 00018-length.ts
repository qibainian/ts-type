/** Length获取元组长度 easy */
/** question:创建一个Length泛型，这个泛型接受一个只读的元组，返回这个元组的长度 */
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

/** answer:Length */
type Length<T extends readonly any[]> = T['length'];