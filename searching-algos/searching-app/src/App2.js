import React, { Component } from 'react'

// const rawSTORE = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"
// const arSTORE = rawSTORE.split(' ')
//   console.log(arSTORE)
//   let STORE = [];
//   STORE.push(arSTORE.forEach(element => Number(element)));
//   console.log(STORE)

const rawSTORE = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
const array = rawSTORE.sort((a, b) => a - b);
console.log(array);


class App2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      showResult: false,
      indexItem: ""
    }
  }


  updateInput = (value) => {
      this.setState({
          value: value
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state
    // const { array } = array
    this.binarySearch(array, value);
    this.setState({
      showResult: true
    })
  }

  binarySearch(array, value, start, end) {
      var start = start === undefined ? 0 : start;
      var end = end === undefined ? array.length : end;

      if(start > end) {
        return this.setState({
            indexItem: 'Many many, but I have not found it'
      
          });
      }
      const index = Math.floor((start + end) /2);
      const item = array[index]
      if(item == value) {
        return this.setState({
            indexItem: index
          });
      }
      else if(item < value) {
          return this.binarySearch(array, value, index + 1, end)
      }
      else if(item > value) {
        return this.binarySearch(array, value, start, index - 1)
      }
  };
  
      render() {
          return (
            <main className='App'>
              <h1>Quick checker 2 (binary)</h1>
              <form>
                <label htmlFor="only">enter here the number you wanna search</label>
                <input type = "text" id="only" onChange={e => this.updateInput(e.target.value)}></input>
              </form>
              <button onClick={e => this.handleSubmit(e)}>search</button>
              <h3>here is the answer:</h3>

              {this.state.showResult && <p>Here's the number of attempts I have done to find the number: {this.state.indexItem}</p>}
            </main>
          );
      }

  
}

export default App2;