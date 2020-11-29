<script lang="ts">
type GameBoardGrid = Array<Array<number>>;

class GameBoard {
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
}

const Example = {
  state: new GameBoard().gameBoard,
};
export default Example;
</script>
