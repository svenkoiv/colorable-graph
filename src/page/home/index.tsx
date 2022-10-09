import React from 'react';
import Textarea from '../../common/Textarea';
import { isGraphRedBlueColorable } from '../../utils/graph';

interface State {
  graphRaw: string;
}

type Props = Record<string, unknown>;

class Home extends React.PureComponent<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      graphRaw: '',
    };
  }

  private handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement & {
        name: 'graphRaw';
      }
    >
  ): void => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  private isGraphRedBlueColorable = (): boolean => {
    const { graphRaw } = this.state;

    const graphs = graphRaw
      .split(/\r?\n|,/)
      .map((graph) =>
        graph
          .replace(/\s*/g, '')
          .split('-')
          .filter((node) => node.length)
      )
      .filter((graph) => graph.length);

    return isGraphRedBlueColorable(graphs);
  };

  render(): React.ReactNode {
    const { graphRaw } = this.state;
    const isColorable = this.isGraphRedBlueColorable();

    return (
      <div className="relative bg-white max-w-7xl mx-auto mt-5">
        <h3 className="text-3xl font-bold">
          A small web application to check if a graph is red-blue colorable.
        </h3>
        <p className="text-gray-700 text-lg mb-3">
          A graph is red-blue colorable if two connected nodes have never the
          same color and the graph is a connected graph. A user should be able
          to enter a graph in a textarea by typing some paths (a word is a node,
          a dash an edge and a new line or a comma a separation between paths).
        </p>
        <label
          htmlFor="graphRaw"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
        >
          Graph:
        </label>
        <Textarea
          name="graphRaw"
          onChange={this.handleChange}
          className="text-lg"
          value={graphRaw}
          placeholder="a - b - c"
          rows={8}
        />
        <br />
        <p className="text-lg">
          {isColorable ? (
            <span>
              Graph <b>IS</b> red-blue colorable
            </span>
          ) : (
            <span>
              Graph <b>IS NOT</b> red-blue colorable
            </span>
          )}
        </p>
      </div>
    );
  }
}

export default Home;
