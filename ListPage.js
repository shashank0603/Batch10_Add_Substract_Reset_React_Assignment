import { Component } from "react";


class ListPage extends Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <>
                <div className="main_div">
                    <div className="center" ><h1>Welcome to ListPage</h1>
                      
                        <div class="card mb-3" >
       <div class="row gx-5">
    <div class="col-md-4">
      <img src="https://picsum.photos/200/301" alt="..." height = "50px"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Jordan Walkie</h5>
        <p class="card-text">Build the React JS owned by FaceBook.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
        </div>
     </div>
                        </div>
                        <div class="card mb-3" >
       <div class="row gx-5">
    <div class="col-md-4">
      <img src="https://picsum.photos/201/301" alt="..." height="50px"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Jordan Walkie</h5>
        <p class="card-text">Build the React JS owned by FaceBook.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
        </div>
     </div>
                        </div>
                        <div class="card mb-3" >
       <div class="row gx-5">
    <div class="col-md-4">
      <img src="https://picsum.photos/201/300" alt="..." height="50px"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Jordan Walkie</h5>
        <p class="card-text">Build the React JS owned by FaceBook.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
</div>
     </div>
                        </div>
                        <div class="card mb-3" >
       <div class="row gx-5">
    <div class="col-md-4">
      <img src="https://picsum.photos/202/301" alt="..." height = "50px"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Jordan Walkie</h5>
        <p class="card-text">Build the React JS owned by FaceBook.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
        </div>
     </div>
     </div>
                    </div>
                    </div>
                    
                    
                </>
        );
    }
}

export default ListPage;