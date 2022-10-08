export interface ColourableNode {
  color?: 'red' | 'blue';
  neighbours: Set<string>;
}

const doColoring = ({
  colourableNodes,
  node,
  color,
}: {
  colourableNodes: Record<string, ColourableNode>;
  node: string;
  color: 'red' | 'blue';
}): void => {
  colourableNodes[node].color = color;
  colourableNodes[node].neighbours.forEach((neighbour) => {
    if (!colourableNodes[neighbour].color) {
      doColoring({
        colourableNodes,
        node: neighbour,
        color: color === 'red' ? 'blue' : 'red',
      });
    }
  })
}

const collectColourableNodes = (
  graph: string[][],
): Record<string, ColourableNode> =>  {
  const colourableNodes: Record<string, ColourableNode> = {};
  graph.forEach((nodes) => {
    for (let index = 0; index < nodes.length; index++) {
      const previousNode: string | undefined = nodes[index - 1];
      const node: string = nodes[index];
      const nextNode: string | undefined = nodes[index + 1];

      if (!colourableNodes[node]) {
        colourableNodes[node] = {
          color: undefined,
          neighbours: new Set(),
        };
      }

      if (previousNode) {
        colourableNodes[node].neighbours.add(previousNode)
      }

      if (nextNode) {
        colourableNodes[node].neighbours.add(nextNode)
      }
    }
  });

  return colourableNodes;
}

export const isGraphRedBlueColourable = (
  /**
   * Graph structure.
   * [[Node, Node], [Node, Node, Node]]
   */
  graph: string[][]
): boolean => {
  if (!graph.length) {
    return false;
  }

  const colourableNodes = collectColourableNodes(graph);
  doColoring({
    colourableNodes,
    color: 'red',
    node: Object.keys(colourableNodes)[0]
  });

  for (const colourableNode of Object.values(colourableNodes)) {
    if (!colourableNode.color) {
      return false;
    }

    const hasSameColorWithNeighbour = Array.from(colourableNode.neighbours)
      .some((neighbour: string) => colourableNode.color === colourableNodes[neighbour].color);
    if (hasSameColorWithNeighbour) {
      return false;
    }
  }

  return true;
}
