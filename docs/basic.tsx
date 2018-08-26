import * as React from 'react';
import { parseSql } from '../src';

class Props {}

class State {}

function parse(str: string) {
  const startTime = new Date();
  const result = parseSql(str, 'bif', 100);
  const endTime = new Date();

  // tslint:disable-next-line:no-console
  console.log('parser time', endTime.getTime() - startTime.getTime(), 'ms', ', result', result);
}

parse(
  'CREATE INDEX `bees`.`hive_state` ON `hive` (`happiness` ASC, `anger` DESC) WHERE  NOT `happiness` AND `anger` IS NOT 0'
);

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return <div>123123</div>;
  }
}
