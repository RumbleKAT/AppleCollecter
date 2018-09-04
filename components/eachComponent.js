import axios from 'axios';

class eachComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      title: this.props.title,
      response: null
    };
  }

  click = () =>
    axios.get("https://koreanhelper2.herokuapp.com/keyboard").then(result => {
        let temp = result.data.buttons.map(
            (element,index) => <li key={index}>{element}</li>
        )
        this.setState({
            response: temp
        });
    });

  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <style jsx>
          {`
            h1 {
              color: red;
            }
            .content {
              text-align: center;
              background-color: #efefef;
              padding: 30px;
            }
            .textAreaStyle {
              border: 1px solid black;
              width: 80%;
              height: 120px;
              font-size: 15px;
              border-radius: 20px;
              padding: 20px;
              overflow: hidden;
            }
            .warpbtn {
              padding: 20px;
            }
            .btn {
              width: 10%;
              height: 50px;
              font-size: 1.2em;
            }
          `}
        </style>
        <div className="content">
          <h2>{this.state.title}</h2>
          <input type="textarea" className="textAreaStyle" />
          <div className="warpbtn">
            <button className="btn" onClick={this.click}>
              Seach
            </button>
          </div>
          <div className="resArea">{this.state.response}</div>
        </div>
      </div>
    );
  }
}

export default eachComponent;