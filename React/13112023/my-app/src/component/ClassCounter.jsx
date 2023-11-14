
class ClasCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
 
    inc () {
        if (count < 10) 
        this.setState({count: this.state.count + 1}) 
        }
      };
    
      const dec = () => {
        if (count > 0) {
            this.setState({count: this.state.count - 1}) 
        }
      };

    render() {
        return (
            <div>
            
            <h1>{this.count}</h1>
            <button onClick={this.inc}>inc</button>
            <button onClick={this.dec}>dec</button>
        </div>
        )
    }
}