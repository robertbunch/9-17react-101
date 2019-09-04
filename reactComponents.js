ReactDOM.render(
    <div className="container">
        <div className="row">
            <Card name={data[0].instructor} saleOn={true} title={data[0].course} img={data[0].image} />
            <Card name={data[1].instructor} saleOn={true} title={data[1].course} img={data[1].image} />
            <Card name="Ian" title="CornStalk Man" />
            <Card name="Tracy" title="Pho/Ramen Foodie" />
            <Card name="Tony" title="Man amongst toads"/>
        </div>
    </div>,
    document.querySelector('#root')
)