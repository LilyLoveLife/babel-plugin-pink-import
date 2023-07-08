
import * as babel from "babel-core";

import pinkPlugin from './index.js'

const MODULE = 'pink-ui'

it('import语句转换正确', () => {

    var input = `
        import {Button} from '${MODULE}'
    `
    const {ast} = babel.transform(input, {plugins: [pinkPlugin]})
        console.log('result: ', ast)
    assert.equal(ast, `import {Button} from ${MODULE}"/Button"`);// 判断 AST 节点的值
})