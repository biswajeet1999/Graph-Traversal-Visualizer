const delay = (time) => {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
};

const DFS = async (grid, start) => {
  const stack = [];

  stack.push(start);
  start.visited = 1; //  processing state

  while (stack.length) {
    let currentNode = stack.pop();
    currentNode.visited = 2; // visited
    document.getElementById(
      `node-${currentNode.row}-${currentNode.col}`
    ).className = `node node-visited`;
    await delay(10);
    updateStackWithUnvisitedNode(grid, currentNode, stack);
  }
};

const updateStackWithUnvisitedNode = (grid, currentNode, stack) => {
  const { row, col } = currentNode;
  console.log(col < grid[0].length - 1);

  if (row > 0 && grid[row - 1][col].visited === 0) {
    grid[row - 1][col].visited = 1;
    stack.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1 && grid[row + 1][col].visited === 0) {
    grid[row + 1][col].visited = 1;
    stack.push(grid[row + 1][col]);
  }
  if (col > 0 && grid[row][col - 1].visited === 0) {
    grid[row][col - 1].visited = 1;
    stack.push(grid[row][col - 1]);
  }
  if (col < grid[0].length - 1 && grid[row][col + 1].visited === 0) {
    grid[row][col + 1].visited = 1;
    stack.push(grid[row][col + 1]);
  }
};

export default DFS;
