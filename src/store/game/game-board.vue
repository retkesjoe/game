<script lang="ts">
type GameBoardGrid = Array<Array<number>>;

class Game {
  MAXIMUM_TURNED_ON_LIGHTS_AT_START = 5;
  ROW_NUMBERS = 5;
  COL_NUMBERS = 5;

  numberOfTurnedOnLights = 0;
  initialTurnedOnLights: Array<number> = [];
  gameBoard: GameBoardGrid = [];

  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.setNumberOfTheTurnedOnLights();
    this.setTurnedOnLightsCells();
    this.setDefaultGameBoard();
  }

  setNumberOfTheTurnedOnLights(): number {
    this.numberOfTurnedOnLights = Math.floor(Math.random() * Math.floor(this.MAXIMUM_TURNED_ON_LIGHTS_AT_START)) + 1;

    return this.numberOfTurnedOnLights;
  }

  setTurnedOnLightsCells() {
    do {
      let randomCellNumber = Math.floor(Math.random() * Math.floor(this.ROW_NUMBERS * this.COL_NUMBERS));

      if (!this.initialTurnedOnLights.includes(randomCellNumber)) {
        this.initialTurnedOnLights.push(randomCellNumber);
      }
    } while (this.initialTurnedOnLights.length != this.numberOfTurnedOnLights);
  }

  setDefaultGameBoard(): void {
    for (let i = 0; i < this.ROW_NUMBERS; ++i) {
      this.gameBoard[i] = [];
      for (let j = 0; j < this.COL_NUMBERS; ++j) {
        if (this.initialTurnedOnLights.includes(i * 5 + j)) {
          this.gameBoard[i][j] = 1;
        } else {
          this.gameBoard[i][j] = 0;
        }
      }
    }
  }

  setAdjacentTiles(state: Record<string, unknown>, tileId: number): void {
    const adjacentRows = [-1, 0, 0, 1];
    const adjacentColumns = [0, -1, 1, 0];
    const selectedTileRow = Math.floor(tileId / this.ROW_NUMBERS);
    const selectedTileColumn = Math.floor(tileId % this.COL_NUMBERS);

    for (let i = 0; i < 4; ++i) {
      let adjacentRow = selectedTileRow + adjacentRows[i];
      let adjacentColumn = selectedTileColumn + adjacentColumns[i];

      if (adjacentRow >= 0 && adjacentColumn >= 0 && adjacentRow < this.ROW_NUMBERS && adjacentColumn < this.COL_NUMBERS) {
        let adjacentTile = state.gameBoard[adjacentRow][adjacentColumn];

        if (adjacentTile === 0) {
          state.gameBoard[adjacentRow][adjacentColumn] = 1;
          ++state.lightsOn;
        } else {
          state.gameBoard[adjacentRow][adjacentColumn] = 0;
          --state.lightsOn;
        }
      }
    }
  }
}

const gameBoardInstance = new Game();

const GameBoard = {
  state: {
    gameBoard: gameBoardInstance.gameBoard,
    lightsOn: gameBoardInstance.numberOfTurnedOnLights,
  },
  mutations: {
    adjTiles(state: GameBoardGrid, tileId: number): void {
      gameBoardInstance.setAdjacentTiles(state, tileId);
    },
  },
};
export default GameBoard;
</script>
