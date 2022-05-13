"use strict";

//template
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  className: "display-1 text-danger"
}, "React Heading"), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "green",
    fontSize: "20px"
  },
  className: "paragrafElement"
}, "Paragraf deneme, babel ile compile edilmi\u015F olan script file'\u0131 html de \xE7a\u011F\u0131rmak gerekiyor")); // ReactDOM

ReactDOM.render(template, document.getElementById("root"));
var counter = 0; //adding function
//artırıcı fonksyon

var counterPlus = function counterPlus() {
  counter++;
  document.querySelector("#purchasedAmounth").textContent = "Stok Adet: ".concat(counter);
  console.log("Artırıldı");
  document.querySelector("#productAddedBasket").textContent = counter;
  addToChart();
};

var addingToChart = function addingToChart() {
  counter++;
  document.querySelector("#productAddedBasket").textContent = counter;
  document.querySelector("#fistAdding").textContent = 1;
  addToChart();
};

var counterMinus = function counterMinus() {
  counter--;

  if (counter <= 0) {
    counter = 0;
    document.querySelector("#productAddedBasket").textContent = "";
  }

  document.querySelector("#purchasedAmounth").textContent = "Stok Adet: ".concat(counter);
  addToChart();
  document.querySelector("#productAddedBasket").textContent = counter;
  console.log("Azaltıldı");
}; // events adding to chart


function addToChart() {
  var products = /*#__PURE__*/React.createElement("div", {
    className: "container d-flex justify-content-evenly"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://www.mrporter.com/cms/ycm/resource/blob/600816/f09986c1ad5f0e1c597b559adaf12798/desktop-data.jpg?imwidth=1500&improfile=isc",
    className: "card-img-top",
    alt: "..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Maurice de Mauriac")), /*#__PURE__*/React.createElement("p", {
    className: "card-text text-muted"
  }, "Modern minimalist watch crafted in the hearth of Zurich"), function () {
    if (counter == 0) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        id: "fistAdding"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-info",
        onClick: addingToChart
      }, "Add to Chart"));
    }
  }(), function () {
    if (counter != 0) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        id: "purchasedAmounth"
      }), /*#__PURE__*/React.createElement("button", {
        id: "counterPlus",
        className: "btn btn-info",
        onClick: counterPlus
      }, "+"), /*#__PURE__*/React.createElement("button", {
        id: "counterMinus",
        className: "btn btn-info",
        onClick: counterMinus
      }, "-"));
    }
  }())), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://www.mrporter.com/cms/ycm/resource/blob/600832/2d16ceff06ba0d41a0d6255f2087ed02/desktop-data.jpg?imwidth=1500&improfile=isc",
    className: "card-img-top",
    alt: "..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "Maurice de Mauriac")), /*#__PURE__*/React.createElement("p", {
    className: "card-text text-muted"
  }, "Modern minimalist watch crafted in the hearth of Zurich"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-info"
  }, "Add to Chart"))));
  ReactDOM.render(products, document.getElementById("products"));
}

addToChart(); // TODO List

var listItemObject = {
  title: "Wishes Brands",
  listCounter: "Added Brands",
  data: ["Rolex", "Patek Philippe", "Omega", "Cartier"]
}; //form onSubmit attribute devreye girdiğinde kullanılacak callback functionu

function formOnSubmit(event) {
  // submit olmadan hemen önce buraya uğrar
  event.preventDefault(); // console.dir(event)
  // console.log("clicked to submit button on todolist ");

  var formInputData = event.target[0].value;

  if (formInputData) {
    listItemObject.data.push(formInputData); // console.log(listItemObject.data)
    // şimdi yeni bir parça eklemiş olduk güncellenen şeyi görebilmek için tekrar form componentini oluşturan fonksyonu invoke etmek gerek

    addBrand();
  } else {
    console.log("Data does not exist");
  }

  event.target[0].value = "";
} // resetToDo (clear all list)


function resetToDo() {
  listItemObject.data = [];
  addBrand();
} //delete One todo


function deleteOneTodo(e) {
  for (var i = 0; i < listItemObject.data.length; i++) {
    if (listItemObject.data[i] === e.target.previousSibling.nodeValue) {
      listItemObject.data.splice(i, 1);
    }
  } //console.log(listItemObject.data)


  addBrand();
} // search One


function searchBrand() {
  for (var i = 0; i < listItemObject.data.length; i++) {
    if (listItemObject.data[i] === document.getElementById("searchedBrand").value) {
      console.log(listItemObject.data[i]);
      var starOfBrand = listItemObject.data[i];
      addSearchedBrand(starOfBrand);
    } else {
      addBrand();
    }
  } // console.log("clicked search brand button");
  // console.dir(document.getElementById("searchedBrand").value);
  // addBrand()

}

function addBrand() {
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-center text-uppercase mt-1"
  }, listItemObject.title), /*#__PURE__*/React.createElement("p", {
    id: "listLen"
  }, listItemObject.listCounter, " :", listItemObject.data.length), /*#__PURE__*/React.createElement("ul", {
    className: "list-group mb-2"
  }, listItemObject.data.map(function (temp) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
      className: "list-group-item"
    }, temp, /*#__PURE__*/React.createElement("i", {
      onClick: deleteOneTodo,
      onMouseOver: function onMouseOver(temp) {
        return temp.target.style.cursor = "pointer";
      },
      className: "fa-solid fa-delete-left pl-5 deleteIcon ms-3 text-muted"
    }, " Delete")));
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row d-flex justify-content-around"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 "
  }, /*#__PURE__*/React.createElement("input", {
    type: "ematextil",
    className: "form-control",
    "aria-describedby": "ItemName",
    name: "formInput"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning",
    type: "submit"
  }, "Add Brand")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("input", {
    id: "searchedBrand",
    type: "text",
    className: "form-control",
    "aria-describedby": "serachBrand",
    name: "serachBrand"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-info",
    type: "button",
    onClick: searchBrand
  }, "Search"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetToDo,
    id: "deleteAllToDo",
    className: "btn btn-danger",
    type: "button"
  }, "T\xFCm Listeyi sil"))));
  ReactDOM.render(form, document.getElementById("toDoListId"));
}

addBrand();

function addSearchedBrand(starOfBrand) {
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-center text-uppercase mt-1"
  }, listItemObject.title), /*#__PURE__*/React.createElement("p", {
    id: "listLen"
  }, "Seached Brand ", /*#__PURE__*/React.createElement("b", null, starOfBrand)), /*#__PURE__*/React.createElement("ul", {
    className: "list-group mb-2"
  }, listItemObject.data.map(function (temp) {
    if (temp == starOfBrand) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
        className: "list-group-item text-secondary"
      }, temp, /*#__PURE__*/React.createElement("i", {
        onClick: deleteOneTodo,
        onMouseOver: function onMouseOver(temp) {
          return temp.target.style.cursor = "pointer";
        },
        className: "fa-solid fa-delete-left pl-5 deleteIcon ms-3 text-muted"
      }, " Delete")));
    }
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row d-flex justify-content-around"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 "
  }, /*#__PURE__*/React.createElement("input", {
    type: "ematextil",
    className: "form-control",
    "aria-describedby": "ItemName",
    name: "formInput"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning",
    type: "submit"
  }, "Add Brand")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("input", {
    id: "searchedBrand",
    type: "text",
    className: "form-control",
    "aria-describedby": "serachBrand",
    name: "serachBrand"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-info",
    type: "button",
    onClick: searchBrand
  }, "Search"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: addBrand,
    className: "btn btn-secondary"
  }, "Show All List"), /*#__PURE__*/React.createElement("button", {
    onClick: resetToDo,
    id: "deleteAllToDo",
    className: "btn btn-danger",
    type: "button"
  }, "T\xFCm Listeyi sil"))));
  ReactDOM.render(form, document.getElementById("toDoListId"));
}
