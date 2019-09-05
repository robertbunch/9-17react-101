
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
        this.flip = this.flip.bind(this);
    }

    // flip = ()=>{

    // }
    
    flip(){
        // console.log("Flip was clicked!");
        // Listen to me now
        // Really. Listen.
        // Stop typing, and listen
        // WE NEVER, NEVER, EVER DO THIS:
        // this.state.image = this.coin[1]
        // we dont mutate or change state ourselves. EVER.
        // That is Reacts job. If you change it yourself,
        // you will kill your applicationCache, and try and kill
        // another developer, or quit coiding because evil things
        // will happen. React gave us a setter
        let coinSide = Math.round(Math.random()); //0,1
        this.setState({
            image: this.coin[coinSide]
        })
    }

    render(){
        //it is renders jobn to return a single DOM element
        // whether you like it or not, render will run, right after the consutrctor

        // React events are identical (mostly) to regular DOM events
        // we attach them to the Element, and use camelCase
        // we hand them CODE
        return(
            <div className="coin-flip">
                <button onClick={this.flip}>Flip!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}


ReactDOM.render(
    <CoinFlip />,
    document.getElementById('root')
)