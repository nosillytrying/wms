module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // 新功能（feature）
      'ci', // 自动化流程配置修改
      'fix', // 修补bug
      'docs', // 文档更新（documentation）
      'style', // 修改了空格、缩进等（不影响代码运行的变动）
      'refactor', // 功能重构（即不是新增功能，也不是修改bug的代码变动）
      'test', // 增加测试
      'chore', // 构建过程或辅助工具的变动 比如 webpack babel eslint配置
      'perf', // 优化相关，比如提升性能、体验。
      'revert', // 回滚
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
