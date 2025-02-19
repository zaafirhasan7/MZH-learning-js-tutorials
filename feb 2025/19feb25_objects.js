var books = {
    "The dragon prophecy":{
        'release date': "September 1, 2012",
        "author": "Elisabetta Dami",
        'page numbers':320,
        "lent to": ['Arham','faizaan','Faruq']
    }, 
    "The hour of magic":{
        'release date': "May 31, 2016",
        "author": "Elisabetta Dami",
        'page numbers': null,
        "lent to": ['Omar','Ameer','faizaan']    
    }, 
    "Get into gear, stilton":{
        'release date': "June 25, 2013",
        "author": "Elisabetta Dami",
        'page numbers':128,
        "lent to":['Aahil']       
    }, 
    "Welcome to moldy manor":{
        "lent to": ['Arabi','Tanvir'],
        'release date': "September 1, 2010",
        "author": "Elisabetta Dami",
        'page numbers':128,
    }, 
}; 

// get into gear, page no
// welcome to moldy, lent to people names

// console.log(books['Get into gear, stilton']["page numbers"]);
console.log(books['Welcome to moldy manor']['lent to'][1]);

// var getIntoGear = books['Get into gear, stilton'];
// console.log(getIntoGear["author"]);

var dreamBook = {
        'release date': "September 1, 2025",
        "author": "Mr co co Crazy",
        'page numbers': 0,
        "lent to": ['x','y']
}

books["dream book"] = dreamBook;

console.log(Object.keys(books));
