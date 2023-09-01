const selectMovie = document.getElementById("selecMovie");
const movieNameElement = document.getElementById("movieName");
const moviePriceElement = document.getElementById("moviePrice");
const totalPriceElement = document.getElementById("totalPrice");
const seatContainer = document.querySelectorAll(" #seatCont .seat:not(.occupied)");
const selectedSeatsHolder= document.querySelector(".selectedSeatsHolder");
const numberOfSeatsElement = document.getElementById("numbetOfSeat")

    console.log(selectMovie);
    console.log(numberOfSeatsElement);

    // Use moviesList array for displaing the Name in the dropdown menu
    const moviesList = [
        {movieName: "Flash",price:7},
        {movieName:" Spiderman",price:5},
        {movieName:" Batman",price:12}
    ]

    moviesList.forEach(movie => {
    const option = document.createElement("option");
    option.value = movie.price;
    option.textContent = movie.movieName;
    selectMovie.appendChild(option);  
    });

    movieNameElement.textContent = "Flash";
    moviePriceElement.textContent = " $ 7";
    
    
    let selectedSeats = [];
    let totalSelectedPrice = 0;
    function updateSelectedSeats() {
        selectedSeatsHolder.textContent = selectedSeate.join(" , ");
        numberOfSeatsElement.textContent = selectedSeats.length;
        totalPriceElement.textContent = " $ " + toatalSelectedPrice;
    }
    
    selectMovie.addEventListener("change", () => {
        const selectedOption = selectMovie.options[selecteMovie.selectedIndex];
        movieNameElement.textContent = seleectedOption.textContent;
        moviePriceElement.textContent = " $ " + seletedOption.value;
        totalSelectedPrice = 0;
        updateSelectedSeats(); 
    });
     
    seatContainer.forEach(seat =>{
        seat.addEventListener("click", () => {
            if(!seat.classList.contains("selected")) {
                seat.classList.add("selected");
                selectedSeats.push(seat.textContent);
                totalSelectedPrice += parseInt(selectMovie.value);
            } else{
                seat.classList.remove("selected");
                selectedSeats = selectedSeats.filter(s => s !== seat.textContent);
                totalSelectedPrice -= parseInt(selectedMovie.value);
            }
            updateSelectedSeats();
        });
    });
    
    
    //Add eventLister to each unoccupied seat
    
    //Add eventLsiter to continue Button
    
    //Add eventListerner to Cancel Button