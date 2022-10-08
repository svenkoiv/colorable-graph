import React from 'react';
import Textarea from '../../common/Textarea';
import { isGraphRedBlueColourable } from '../../utils/graph';

interface State {
  graphRaw: string;
}

type Props = Record<string, unknown>;


class Home extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      graphRaw: 'a - b, c - d, b - c, a - d',
    }
  }

  private handleChange = (e: React.ChangeEvent<HTMLTextAreaElement & {
    name: 'graphRaw';
  }>): void => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }

  private isGraphRedBlueColurable = (): boolean => {
    const { graphRaw } = this.state;

    const graphs = graphRaw
      .split(/\r?\n|,/)
      .map((graph) => graph.replace(/\s*/g, '').split('-').filter((node) => node.length))
      .filter((graph) => graph.length)

    return isGraphRedBlueColourable(graphs);
  }

  render(): React.ReactNode {
    const { graphRaw } = this.state;

    return (
      <div>
        <Textarea
          name="graphRaw"
          onChange={this.handleChange}
          value={graphRaw}
          rows={8}
        />
        <br />
        {this.isGraphRedBlueColurable().toString()}
      </div>
    )
  }
}

export default Home;

