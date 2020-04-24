/**
 * @description: eslint代码检查规则
 * @author: zettle
 * @date: 2020-04-22
 */

module.exports = {
    // 启用的规则及其各自的错误级别：
    // 'off' | 0    - 关闭规则
    // 'warn' | 1   - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // 'error' | 2  - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    rules: {
        'semi': ['error', 'always'], // 语句强制分号结尾
        // 不在template中使用this
        'vue/this-in-template': ['error', 'never'],
        // 定义propname用驼峰，对ts无效
        'vue/prop-name-casing': ['error', 'camelCase'],
        // 控制html结尾`>`的缩进
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        'indent': 'off',
        // vue-js缩进的方式
        'vue/script-indent': ['error', 4, {
            'baseIndent': 0, // 首层缩进
            'switchCase': 1, // switch的缩进
            'ignores': []
        }],
        // vue-template的缩进方式
        'vue/html-indent': ['error', 4, { 'baseIndent': 1 }],
        // 控制html开头`<`和结尾`>`不要有空格
        'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
        }],
        // template-script-style的顺序
        'vue/component-tags-order': ['error', {
            'order': ['template', 'script', 'style']
        }],
        //
        'vue/attributes-order': ['error', {
            'order': [
                'DEFINITION',       // 比如  is
                'LIST_RENDERING',   // 比如  v-for
                'CONDITIONALS',     // 比如  v-if v-show v-cloak
                'RENDER_MODIFIERS', // 比如  v-once v-pre
                'GLOBAL',           // 比如  id
                'UNIQUE',           // 比如  ref key v-slot slot
                'TWO_WAY_BINDING',  // 比如  v-model
                'OTHER_DIRECTIVES', // 比如  v-custom-directive
                'OTHER_ATTR',       // 比如  custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"
                'EVENTS',           // 比如  @click="functionCall"', 'v-on="event"
                'CONTENT'           // 比如  'v-text', 'v-html'
            ],
            'alphabetical': false
        }],
        // 控制html中属性用双引号
        // 'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': false } ],
        'vue/html-quotes': [ 'error', 'double'],
        // @click方法是否加()
        'vue/v-on-function-call': ['error', 'never'],
        // prop传递的时候用中横线
        'vue/attribute-hyphenation': ['error', 'always'],
        // 用@click不用v-on:click
        'vue/v-on-style': ['error', 'shorthand'],
        // 用`:foo='bar'`不用`v-bind:foo='bar'`
        'vue/v-bind-style': ['error', 'shorthand'],
        'vue/no-multi-spaces': ['error', {
            'ignoreProperties': true
        }],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 300, // 如果是1行的不理
            'multiline': { // 如果是多行的，每行1个属性
                'max': 1,
                'allowFirstLine': false
            }
        }],
        // =之间不要有空格
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        // 大驼峰命名组件的name属性
        "vue/name-property-casing": ["error", "PascalCase"],
        // 链接 https://eslint.vuejs.org/rules/require-direct-export.html
        "vue/require-direct-export": ["error"],
        // template/script/style之间要有空行
        "vue/padding-line-between-blocks": ["error", "always"],
        // 禁止变量名和外层的变量名相同，只在template中有效
        "vue/no-template-shadow": ["error"],
        // vue-js组件属性的书写顺序
        "vue/order-in-components": ["error", {
            "order": [
                "el",
                "name",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "fetch",
                "asyncData",
                "data",
                "computed",
                "watch",
                "LIFECYCLE_HOOKS",
                "methods",
                "head",
                ["template", "render"],
                "renderError"
            ]
        }],
        // 在template中写组件要用中横线写法，ts的无法识别
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
            "registeredComponentsOnly": true,
            "ignores": []
        }],
        // 多行html换行
        "vue/multiline-html-element-content-newline": ["error", {
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea"],
            "allowEmptyLines": false
        }]

        // vue-ts缩进的方式，由外部自己弄
        // '@typescript-eslint/indent': ['error', 4, {
        //     'baseIndent': 0, //
        //     'switchCase': 1,
        //     'ignores': []
        // }],

        // 检查每个.sync修饰符是否有效
        // "vue/valid-v-bind-sync": ["error"],
        // 检查每个.v-mode修饰符是否有效
        // "vue/no-v-model-argument": ["error"],

        // "vue/singleline-html-element-content-newline": ["error", {
        //     "ignoreWhenNoAttributes": false,
        //     "ignoreWhenEmpty": true,
        //     "ignores": ["pre", "textarea"]
        // }],

        // name属性和文件名称保持一致
        // "vue/match-component-file-name": ["error", { "extensions": ["vue"], "shouldMatchCase": false }],
    }
};
