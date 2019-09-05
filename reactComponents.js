ReactDOM.render(
    <div className="container">
        <div className="row">
            {/* <Card name={data[0].instructor} saleOn={true} title={data[0].course} img={data[0].image} />
            <Card name={data[1].instructor} saleOn={true} title={data[1].course} img={data[1].image} /> */}
            <Card data={data[0]} />
            <Card data={data[1]} />
            <Card data={data[2]} />
            <Card data={data[3]} />
        </div>
    </div>,
    document.querySelector('#root')
)