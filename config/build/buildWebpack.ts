import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import dotenv from 'dotenv';

import buildLoaders from './buildLoaders';
import buildResolve from './buildResolve';
import buildPlugins from './buildPlugins';
import buildDevServer from './buildDevServer';

dotenv.config();

type Options = {
  mode: 'development' | 'production';
  port: number;
  paths: {
    src: string;
    html: string;
    entry: string;
    output: string;
  };
};

export default (options: Options): webpack.Configuration => {
  const { mode, paths } = options;

  const isDev = mode === 'development';

  const configuration: webpack.Configuration = {
    mode,
    devtool: isDev && 'inline-source-map',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: buildLoaders({ mode }),
    resolve: buildResolve({ src: paths.src }),
    plugins: buildPlugins({ mode, html: paths.html }),
    devServer: buildDevServer({ port: options.port }),
  };

  return configuration;
};
