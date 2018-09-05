class Introduce extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        content : null
      };
    }

    send = () => {
      console.log(this);
    }

    render(){
      return(
        <div style={{textAlign:'center'}}>
          <style jsx>
          {`
             .warp_search{
               text-align : center;
             }

             .search{
               width : 80%;
               height : 80px;
               border : 2.0px solid black;
               font-size : 20px;
             }

             .search_btn{
               width : 150px;
               height : 50px;
               font-size: 20px;
               margin-top : 20px;
             }
          `}
          </style>
          <div className="warp_search">
            <h3> 우리말 도우미 개선 사항</h3>
            <textarea className="search"/>
          </div>
          <button className="search_btn" onClick={this.send}>send</button>
        </div>
    )}
};

export default Introduce;
