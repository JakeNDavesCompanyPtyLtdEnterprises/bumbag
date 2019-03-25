const path = require('path');

module.exports = {
  components: './src/index.ts',
  outputPath: './docs/out/playroom',
  frameComponent: './src/_playroom/Frame.tsx',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cwd: path.join(__dirname, '..')
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
    }
  }),
  exampleCode: `
    <Container padding="major-2">
      <Heading>Hello world!</Heading>
      <Paragraph>Welcome to the Fannypack Playroom!</Paragraph>
      <Button onClick={() => alert('Oh hi Mark')} palette="primary">Click me</Button>
    </Container>
  `
};
