<div>
<ul>
                <h1>menu </h1>
                {this.state.menu.map(menu =>
                    <div>
                        <h4>{menu.description.split(' with ')[0]}</h4>
                        <li>{menu.description}</li>
                        <p>{menu.description.length}</p>
                    </div>)}
            </ul>

            <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>

<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span className="badge badge-primary badge-pill">1</span>
  </li>
</ul>


</div>