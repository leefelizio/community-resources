// import React from "react";

// import { CopyToClipboard } from 'react-copy-to-clipboard'

// const url = window.location.href


// class CopyUrl extends React.Component {
//     state = {
//       value: url,
//       copied: false,
//     };
  
//     render() {
//       return (
//         <div>
//           <input value={this.state.value}
//             onChange={({target: {value}}) => this.setState({value, copied: false})} />
  
//           <CopyToClipboard text={this.state.value}
//             onCopy={() => this.setState({copied: true})}>
//             <span>Copy to clipboard with span</span>
//           </CopyToClipboard>
  
//           <CopyToClipboard text={this.state.value}
//             onCopy={() => this.setState({copied: true})}>
//             <button>Copy to clipboard with button</button>
//           </CopyToClipboard>
  
//           {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
//         </div>
//       );
//     }
//   }
  
//   export default CopyUrl