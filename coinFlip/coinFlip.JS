
class CoinFlip extends React.Component{
    // this is a child, or subclass. It's a child of React.Componnet
    // React.Componet is the parnet or super class
    // we get cool stuff in CoinFlip, because it's a subclass
    constructor(){
        super(); //Call super because this is a child class
        // React does not care abou theads, tails, or coin
        // at all. That is regular JS
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        //React cares about state. A lot. React is special
        this.state = {
            image: this.coin[0]
        }
    }
    render(){
        //it is renders jobn to return a single DOM element
        // whether you like it or not, render will run, right after the consutrctor
        return(
            <div className="coin-flip">
                <button>Flip!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}


ReactDOM.render(
    <CoinFlip />,
    document.getElementById('root')
)