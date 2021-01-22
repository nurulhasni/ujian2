import React, { Component } from 'react'
import  './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
       
      soal1:`1. Siapakah penemu baling-baling bambu?`,
      a:`Doraemon`,
      b:`Shizuka`,
      c:`Suneo`,
      d:`Nobita`,
      jawab: `a`,
      soal2: "2. Pilihlah 3 yang benar mengenai Aqil",
      pa: `Manusia`,
      pb: `Trainer Juara Coding`,
      pc: `Anggota Avanger`,
      pilih: '' ,
      soal3: `3. Ceritakan pengalaman anda ketika sedang tidur:`
  }

}

handlerSet = () => {
  this.setState({
    soal1 : this.state.soal1,
    a : this.state.a,
    b : this.state.b,
    c : this.state.c,
    d : this.state.d,
    soal2: this.state.soal2,
    pa: this.state.pa,
    pb : this.state.pb,
    pc: this.state.pc,
    soal3 : this.state.soal3

  })

}

handleChange = (event) => {
  this.setState({
    pilih: event.target.value
  });
}

  render() {
    return (
      
      <div>
        
          <div>
            <p>{this.state.soal1}</p>
            <input type="radio" value="pilih1" checked={this.state.pilih==="pilih1"} onChange={this.handleChange}/> {this.state.a}
            <input type="radio" value="pilih2" checked={this.state.pilih==="pilih2"} onChange={this.handleChange}/> {this.state.b}
            <input type="radio" value="pilih3" checked={this.state.pilih==="pilih3"} onChange={this.handleChange}/> {this.state.c}
            <input type="radio" value="pilih4" checked={this.state.pilih==="pilih4"} onChange={this.handleChange}/> {this.state.d}
          </div>

          <div>
            <p>{this.state.soal2}</p>
            <ul>
           <li> <input type="checkbox" />{this.state.pa}</li>
            <li><input type="checkbox" />{this.state.pb}</li>
            <li><input type="checkbox" />{this.state.pc}</li>
            </ul>
          </div>

          <div>
            <p>{this.state.soal3}</p>
            <textarea cols="50" rows="7" />

          </div>
       
          
        
      </div>
    )
  }
}

export default App
