document.addEventListener('DOMContentLoaded', function() {
    //Get the HTML elements
    const favoriteList = document.getElementById('favoriteList');
    const btnDisplayListing = document.getElementById('btnDisplayListing');
    const tableDisplay = document.getElementById('tableDisplay');
    const tableTitle = document.querySelector('.table-title');

    //Create the books objects
    const favoriteBooks = [
        {
            ISBN: "0261103571",
            Title: "The Fellowship of the Ring",
            Pages: 432
        },

        {
            ISBN: "1514297272",
            Title: "The Two Towers",
            Pages: 322
        },

        {
            ISBN: "1514298139",
            Title: "The Return of the King",
            Pages: 432
        }
    ];

    //Create the author objects
    const favoriteAuthors = [
        {
            Name: "John Ronald Reuel Tolkien",
            Genre: "Fantasy"
        },

        {
            Name: "Franklin Patrick Herbert Jr.",
            Genre: "Science Fiction"
        },

        {
            Name: "Clive Staples Lewis",
            Genre: "Fantasy, Science Fiction, Children's Literature"
        }
    ];

    //Create the function to generate the table
    function generateTable(table) {
        //Check if it is the books table
        if(table === favoriteBooks) {
            //Create a new table with the content
            let newTable = '<table class="table"><tr class="table-titles"><th class="table-border">ISBN</th><th class="table-border">Title</th><th class="table-border">Pages</th></tr>';
            
            //Create a new table row of content for each book
            table.forEach(book => {
                newTable += `<tr class="table-content"><td class="table-border">${book.ISBN}</td><td class="table-border">${book.Title}</td><td class="table-border">${book.Pages}</td></tr>`;
            });

            //Closing table tag
            newTable += '</table>';
            //Return new table
            return newTable;
        }
        //Check if it is the authors table 
        else if(table === favoriteAuthors) {
            //Create a new table with the content
            let newTable = '<table class="table"><tr class="table-titles"><th class="table-border">Name</th><th class="table-border">Genre</th></tr>';
            //Create a new table row of content for each author
            table.forEach(author => {
                newTable += `<tr class="table-content"><td class="table-border">${author.Name}</td><td class="table-border">${author.Genre}</td></tr>`;
            });

            //Closing table tag
            newTable += '</table>';
            //Return the new table
            return newTable;
        }
    }

    //Listen to a click on "Display Listing" button
    btnDisplayListing.addEventListener('click', function() {
        //Check if the selected value is books
        if(favoriteList.value === 'books') {
            //Set the display table innerHTML to the return table from the generateTable function
            tableDisplay.innerHTML = generateTable(favoriteBooks);
            tableTitle.textContent = "Top 3 Favorite Books";
            tableTitle.style.display = "block"; 
        } 
        //Check if the selected value is authors
        else if(favoriteList.value === 'authors') {
            //Set the display table innerHTML to the return table from the generateTable function
            tableDisplay.innerHTML = generateTable(favoriteAuthors);
            tableTitle.textContent = "Top 3 Favorite Authors";
            tableTitle.style.display = "block"; 
        }
    });
});