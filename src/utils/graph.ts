export interface ColorableNode {
  color?: 'red' | 'blue';
  neighbours: Set<string>;
}

const doColoring = ({
  colorableNodes,
  node,
  color,
}: {
  colorableNodes: Record<string, ColorableNode>;
  node: string;
  color: 'red' | 'blue';
}): void => {
  colorableNodes[node].color = color;
  colorableNodes[node].neighbours.forEach((neighbour) => {
    if (!colorableNodes[neighbour].color) {
      doColoring({
        colorableNodes,
        node: neighbour,
        color: color === 'red' ? 'blue' : 'red',
      });
    }
  });
};

const collectColorableNodes = (
  graph: string[][]
): Record<string, ColorableNode> => {
  const colorableNodes: Record<string, ColorableNode> = {};
  graph.forEach((nodes) => {
    for (let index = 0; index < nodes.length; index++) {
      const previousNode: string | undefined = nodes[index - 1];
      const node: string = nodes[index];
      const nextNode: string | undefined = nodes[index + 1];

      if (!colorableNodes[node]) {
        colorableNodes[node] = {
          color: undefined,
          neighbours: new Set(),
        };
      }

      if (previousNode) {
        colorableNodes[node].neighbours.add(previousNode);
      }

      if (nextNode) {
        colorableNodes[node].neighbours.add(nextNode);
      }
    }
  });

  return colorableNodes;
};

export const isGraphRedBlueColorable = (
  /**
   * Graph structure.
   * [[Node, Node], [Node, Node, Node]]
   */
  graph: string[][]
): boolean => {
  if (!graph.length) {
    return false;
  }

  const colorableNodes = collectColorableNodes(graph);
  doColoring({
    colorableNodes,
    color: 'red',
    node: Object.keys(colorableNodes)[0],
  });

  for (const colorableNode of Object.values(colorableNodes)) {
    if (!colorableNode.color) {
      return false;
    }

    const hasSameColorWithNeighbour = Array.from(colorableNode.neighbours).some(
      (neighbour: string) =>
        colorableNode.color === colorableNodes[neighbour].color
    );
    if (hasSameColorWithNeighbour) {
      return false;
    }
  }

  return true;
};
