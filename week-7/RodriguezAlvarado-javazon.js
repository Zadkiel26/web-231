document.addEventListener('DOMContentLoaded', function() {
    //Get HTML elements
    const listingElement = document.getElementById('listing');
    const btnDisplayListing = document.getElementById('btnDisplayListing');
    const productsDiv = document.querySelector('.products');
    const servicesDiv = document.querySelector('.services');
    const employeeDiv = document.querySelector('.employees');

    //Creating the classes with constructors
    class Product {
        constructor(id, description, price, quantity) {
            this.id = id;
            this.description = description;
            this.price = parseFloat(price).toFixed(2); //Make sure price is treated as a number
            this.quantity = parseFloat(quantity); //Make sure quantity is treated as a number
            this.totalValue = (this.price * this.quantity).toFixed(2); 
        }
    }

    class Service {
        constructor(id, description, hourlyRate, min) {
            this.id = id;
            this.description = description;
            this.hourlyRate = parseFloat(hourlyRate).toFixed(2);
            this.min = parseFloat(min); //Make sure min is treated as a number
        }
    }
    
    class Employee {
        constructor(id, lastName, firstName, salary) {
            this.id = id;
            this.lastName = lastName;
            this.firstName = firstName;
            this.salary = parseFloat(salary).toFixed(2);
        }
    }

    //Creating 5 product objects
    const product1 = new Product("9781118008188", "HTML and CSS: Design and Build Websites", 22.26, 10);
    const product2 = new Product("9781491952023", "JavaScript: The Definitive Guide 7/E", 41.33, 7);
    const product3 = new Product("9781449331818", "Learning JavaScript Design Patterns 1/E", 25.99, 3);
    const product4 = new Product("9781617292422", "Express in Action: Writing, building, and testing Node.js applications 1/E", 34.91, 3);
    const product5 = new Product("9781491954461", "MongoDB The Definitive Guide", 33.70, 8);

    //Creating 3 services objects
    const service1 = new Service("100", "Website Design", 150, 25);
    const service2 = new Service("101", "DevOps Consulting", 125, 50);
    const service3 = new Service("102", "Database Design", 125, 15);

    //Creating 5 employee objects
    const employee1 = new Employee("1007", "Beethoven", "Ludwig", 13.99);
    const employee2 = new Employee("1008", "Bach", "Johann", 22.30);
    const employee3 = new Employee("1009", "Mozart", "Wolfgang", 19.50);
    const employee4 = new Employee("1010", "Brahms", "Johannes", 12);
    const employee5 = new Employee("1011", "Haydn", "Joseph", 32.50);


    //Populate the objects into one single object array
    const products = [product1, product2, product3, product4, product5];
    const services = [service1, service2, service3];
    const employees = [employee1, employee2, employee3, employee4, employee5];

    //Adding click event listener to btnDisplayListing
    btnDisplayListing.addEventListener('click', function() {
        //Creating a var for the value of the selected option
        const selectedOption = listingElement.value;
        //Creating a var for the table body content
        let tableBody;

        //Switch case between the selected option
        switch (selectedOption) {
            case 'products':
                    //Set the tableBody var to the products table body
                    tableBody = document.querySelector('#productsTable tbody');
                    //Clear the innerHTML
                    tableBody.innerHTML = '';

                    //Loop through each product in products array
                    products.forEach(product => {
                        //Create a new row
                        const row = document.createElement('tr');
                        //Add the class table-content to the row element
                        row.classList.add('table-content');
                        //Create the innerHTML of the row with the product data
                        row.innerHTML = `
                            <td class="table-border">${product.id}</td>
                            <td class="table-border">${product.description}</td>
                            <td class="table-border">${product.price}</td>
                            <td class="table-border">${product.quantity}</td>
                            <td class="table-border">${product.totalValue}</td>`;
                        
                        //Append the row as a child of the table body
                        tableBody.appendChild(row);
                        //Display the products table only
                        productsDiv.style.display = 'block';
                        servicesDiv.style.display = 'none';
                        employeeDiv.style.display = 'none'
                    });
                break;
            case 'services':
                    //Set the tableBody var to the services table body
                    tableBody = document.querySelector('#servicesTable tbody');
                    //Clear the innerHTML
                    tableBody.innerHTML = '';
                    
                    //Loop through each service in services array
                    services.forEach(service => {
                        //Create a new row
                        const row = document.createElement('tr');
                        //Add the class table-content to the row element
                        row.classList.add('table-content');
                        //Create the innerHTML of the row with the service data
                        row.innerHTML = `
                            <td class="table-border">${service.id}</td>
                            <td class="table-border">${service.description}</td>
                            <td class="table-border">${service.hourlyRate}</td>
                            <td class="table-border">${service.min}</td>`;

                        //Append the row as a child of the table body
                        tableBody.appendChild(row);
                        //Display the services table only
                        productsDiv.style.display = 'none';
                        servicesDiv.style.display = 'block';
                        employeeDiv.style.display = 'none';
                    });
                break;
            case 'employees':
                    //Set the tableBody var to the employees table body
                    tableBody = document.querySelector('#employeesTable tbody');
                    //Clear the innerHTML
                    tableBody.innerHTML = '';

                    //Loop through each employee in employees array
                    employees.forEach(employee => {
                        //Create a new row
                        const row = document.createElement('tr');
                        //Add the class table-content to the row element
                        row.classList.add('table-content');
                        //Create the innerHTML of the row with the employee data
                        row.innerHTML = `
                        <td class="table-border">${employee.id}</td>
                        <td class="table-border">${employee.lastName}</td>
                        <td class="table-border">${employee.firstName}</td>
                        <td class="table-border">${employee.salary}</td>`;

                        //Append the row as a child of the table body
                        tableBody.appendChild(row);
                        //Display the employees table only
                        productsDiv.style.display = 'none';
                        servicesDiv.style.display = 'none';
                        employeeDiv.style.display = 'block';
                    });
                break;
            default:
                break;
        }
    });
});