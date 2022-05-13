//template
// let template = <div>

//     <h1 className="display-1 text-danger">React Heading</h1>
//     <p style={{ color: "green", fontSize: "20px" }} className="paragrafElement">Paragraf deneme, babel ile compile edilmiş olan script file'ı html de çağırmak gerekiyor</p>

// </div>

// // ReactDOM
// ReactDOM.render(template, document.getElementById("root"))




let counter = 0;

//adding function
//artırıcı fonksyon
let counterPlus = () => {
    counter++;
    document.querySelector("#purchasedAmounth").textContent = `Stok Adet: ${counter}`
    console.log("Artırıldı");
    document.querySelector("#productAddedBasket").textContent = counter
    addToChart()
}
let addingToChart = () => {
    counter++;
    document.querySelector("#productAddedBasket").textContent = counter;
    document.querySelector("#fistAdding").textContent = 1
    addToChart()

}
let counterMinus = () => {
    counter--;
    if (counter <= 0) {
        counter = 0;
        document.querySelector("#productAddedBasket").textContent = ""
    }
    document.querySelector("#purchasedAmounth").textContent = `Stok Adet: ${counter}`
    addToChart();

    document.querySelector("#productAddedBasket").textContent = counter
    console.log("Azaltıldı")
}


// events adding to chart
function addToChart() {

    let products = (
        <div className="container d-flex justify-content-evenly">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://www.mrporter.com/cms/ycm/resource/blob/600816/f09986c1ad5f0e1c597b559adaf12798/desktop-data.jpg?imwidth=1500&improfile=isc" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p><b>Maurice de Mauriac</b></p>
                    <p className="card-text text-muted">Modern minimalist watch crafted in the hearth of Zurich</p>
                    {
                        function () {
                            if (counter == 0) {
                                return <div>
                                    <div id="fistAdding"></div>
                                    <button className="btn btn-info" onClick={addingToChart}>Add to Chart</button>
                                </div>
                            }
                        }()
                    }
                    {
                        function () {
                            if (counter != 0) {
                                return <div>
                                    <div id="purchasedAmounth"></div>
                                    <button id="counterPlus" className="btn btn-info" onClick={counterPlus}>+</button>
                                    <button id="counterMinus" className="btn btn-info" onClick={counterMinus}>-</button>
                                </div>
                            }
                        }()
                    }

                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://www.mrporter.com/cms/ycm/resource/blob/600832/2d16ceff06ba0d41a0d6255f2087ed02/desktop-data.jpg?imwidth=1500&improfile=isc" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p><b>Maurice de Mauriac</b></p>
                    <p className="card-text text-muted">Modern minimalist watch crafted in the hearth of Zurich</p>
                    <button className="btn btn-info">Add to Chart</button>
                </div>
            </div>
        </div>
    )
    ReactDOM.render(products, document.getElementById("products"))
}

addToChart()


// TODO List

const listItemObject = {
    title: "Wishes Brands",
    listCounter: "Added Brands",
    data: ["Rolex", "Patek Philippe", "Omega", "Cartier"]
}

//form onSubmit attribute devreye girdiğinde kullanılacak callback functionu
function formOnSubmit(event) {
    // submit olmadan hemen önce buraya uğrar
    event.preventDefault();
    // console.dir(event)
    // console.log("clicked to submit button on todolist ");
    const formInputData = event.target[0].value
    if (formInputData) {
        listItemObject.data.push(formInputData);
        // console.log(listItemObject.data)
        // şimdi yeni bir parça eklemiş olduk güncellenen şeyi görebilmek için tekrar form componentini oluşturan fonksyonu invoke etmek gerek
        addBrand()
    } else {
        console.log("Data does not exist");
    }

    event.target[0].value = ""
}


// resetToDo (clear all list)
function resetToDo() {
    listItemObject.data = []
    addBrand()
}

//delete One todo
function deleteOneTodo(e) {
    for (let i = 0; i < listItemObject.data.length; i++) {
        if (listItemObject.data[i] === e.target.previousSibling.nodeValue) {
            listItemObject.data.splice(i, 1)
        }
    }
    //console.log(listItemObject.data)
    addBrand()

}
// search One
function searchBrand() {
    for (let i = 0; i < listItemObject.data.length; i++) {
        if (listItemObject.data[i] === document.getElementById("searchedBrand").value) {
            console.log(listItemObject.data[i]);
            const starOfBrand = listItemObject.data[i];
            addSearchedBrand(starOfBrand)
        } else {
            addBrand()
        }
    }

    // console.log("clicked search brand button");
    // console.dir(document.getElementById("searchedBrand").value);
    // addBrand()

}
function addBrand() {
    const form = (
        <div>
            <h5 className="text-center text-uppercase mt-1">{listItemObject.title}</h5>
            <p id="listLen">{listItemObject.listCounter} :{listItemObject.data.length}</p>
            {
                <ul className="list-group mb-2">
                    {listItemObject.data.map(temp => {

                        return <div>
                            <li className="list-group-item">{temp}
                                <i onClick={deleteOneTodo} onMouseOver={temp => temp.target.style.cursor = "pointer"}

                                    className="fa-solid fa-delete-left pl-5 deleteIcon ms-3 text-muted"> Delete</i>
                            </li>
                        </div>
                    })}
                </ul>
            }
            <form onSubmit={formOnSubmit}>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-4 ">
                        <input type="ematextil" className="form-control" aria-describedby="ItemName" name="formInput" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning" type="submit">
                            Add Brand
                        </button>
                    </div>

                    <div className="col-md-4">
                        <input id="searchedBrand" type="text" className="form-control" aria-describedby="serachBrand" name="serachBrand" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-info" type="button" onClick={searchBrand}>
                            Search
                        </button>
                    </div>

                </div>
                <div className="mt-5">
                    <button onClick={resetToDo} id="deleteAllToDo" className="btn btn-danger" type="button">
                        Tüm Listeyi sil
                    </button>
                </div>

            </form>
        </div>
    )
    ReactDOM.render(form, document.getElementById("toDoListId"))
}
addBrand()

function addSearchedBrand(starOfBrand) {
    const form = (
        <div>
            <h5 className="text-center text-uppercase mt-1">{listItemObject.title}</h5>
            <p id="listLen">Seached Brand <b>{starOfBrand}</b></p>
            {
                <ul className="list-group mb-2">
                    {listItemObject.data.map(temp => {

                        if (temp == starOfBrand) {
                            return <div>
                                <li className="list-group-item text-secondary">{temp}
                                    <i onClick={deleteOneTodo} onMouseOver={temp => temp.target.style.cursor = "pointer"}

                                        className="fa-solid fa-delete-left pl-5 deleteIcon ms-3 text-muted"> Delete</i>
                                </li>
                            </div>
                        }
                    })}
                </ul>
            }
            <form onSubmit={formOnSubmit}>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-4 ">
                        <input type="ematextil" className="form-control" aria-describedby="ItemName" name="formInput" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning" type="submit">
                            Add Brand
                        </button>
                    </div>

                    <div className="col-md-4">
                        <input id="searchedBrand" type="text" className="form-control" aria-describedby="serachBrand" name="serachBrand" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-info" type="button" onClick={searchBrand}>
                            Search
                        </button>
                    </div>

                </div>
                <div className="mt-5">
                    <button onClick={addBrand} className="btn btn-secondary">Show All List</button>
                    <button onClick={resetToDo} id="deleteAllToDo" className="btn btn-danger" type="button">
                        Tüm Listeyi sil
                    </button>
                </div>

            </form>
        </div>
    )
    ReactDOM.render(form, document.getElementById("toDoListId"))
}