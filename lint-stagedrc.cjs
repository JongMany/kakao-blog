module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'packages/libs/backend/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/common-components/tsconfig.json --noEmit',
  ],
  'packages/libs/frontend/components/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/common-styles/tsconfig.json --noEmit',
  ],
  'packages/libs/common/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/prototype-a/tsconfig.json --noEmit',
  ],
  'packages/frontend/next-app/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/prototype-b/tsconfig.json --noEmit',
  ],
  'packages/backend/nest-app/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/prototype-b/tsconfig.json --noEmit',
  ],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};