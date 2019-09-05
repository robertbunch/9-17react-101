const courses = data.map((course,i)=>{
    return (
        <Card key={i} data={course}/>
    );
})
console.log(courses);

ReactDOM.render(
    <div className="container">
        <div className="row">
            {courses}
        </div>
    </div>,
    document.querySelector('#root')
)