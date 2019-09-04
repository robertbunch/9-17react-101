// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Card(props){
    console.log(props);
    const name = "Robert Bunch";    
    // const title = "React From the Beginning";
    // const title = props.title;
    // const saleOn = false;
    // const props.name = /* BAD!!! LIKE THE NO SAINTS */

    return (
            <div className="col s2">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={props.img} />
                    </div>
                    <div className="card-content">
                        <p>{props.title}</p>
                        <p>{props.name}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${props.saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>	
    )
}
