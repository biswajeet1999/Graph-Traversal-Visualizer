const delay = (time) => {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
};

const BFS = async (grid, start) => {
  const queue = [];

  queue.push(start);
  start.visited = 1; //  processing state

  while (queue.length) {
    let currentNode = queue.shift();
    currentNode.visited = 2; // visited
    if (currentNode.row !== start.row || currentNode.col !== start.col) {
      document.getElementById(
        `node-${currentNode.row}-${currentNode.col}`
      ).className = `node node-visited`;
    }
    await delay(10);
    updateQueueWithUnvisitedNode(grid, currentNode, queue);
  }
};

const updateQueueWithUnvisitedNode = (grid, currentNode, queue) => {
  const { row, col } = currentNode;
  console.log(col < grid[0].length - 1);

  if (row > 0 && grid[row - 1][col].visited === 0) {
    grid[row - 1][col].visited = 1;
    queue.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1 && grid[row + 1][col].visited === 0) {
    grid[row + 1][col].visited = 1;
    queue.push(grid[row + 1][col]);
  }
  if (col > 0 && grid[row][col - 1].visited === 0) {
    grid[row][col - 1].visited = 1;
    queue.push(grid[row][col - 1]);
  }
  if (col < grid[0].length - 1 && grid[row][col + 1].visited === 0) {
    grid[row][col + 1].visited = 1;
    queue.push(grid[row][col + 1]);
  }
};

export default BFS;
