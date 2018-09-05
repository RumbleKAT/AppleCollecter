import axios from 'axios';

class eachComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      title: this.props.title,
      response: null
    };
     this.myRef = React.createRef();
  }

  search = () =>
    axios.get("https://koreanhelper2.herokuapp.com/keyboard").then(result => {
        let temp = result.data.buttons.map(
            (element,index) => <li key={index}>{element}</li>
        )
        this.setState({
            response: temp
        });
        //console.log(this.myRef.current);
        this.myRef.current.style.display = "block";
    });

  reset = () => {
    this.myRef.current.style.display= "none";
  }

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
            h2{
              text-align : left;

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
              background-color : deepskyblue;
              color : #fff;
              margin-right : 1rem;
            }
            .searchResult{
              background-color : gray;
              padding : 20px;
              display: none;
              border-radius : 20px;
              text-align :left;
              width : 50%;
              margin: 0 auto;
            }
          `}
        </style>
        <div className="content">
          <h2>{this.state.title}</h2>
          <input type="textarea" className="textAreaStyle" />
          <div className="warpbtn">
            <button className="btn" onClick={this.search}>
              검색하기
            </button>
            <button className="btn" onClick={this.reset}>
              초기화
            </button>
          </div>
          <div className="searchResult" ref={this.myRef}>
            <h2>결과</h2>
            <ul className="resArea">{this.state.response}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default eachComponent;
