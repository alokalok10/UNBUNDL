import React from 'react'

const Banner = () => {
    return (
        <div className='container-fluid'>
            <img src="https://as2.ftcdn.net/v2/jpg/03/08/44/53/1000_F_308445331_ZZinysRse5xOZacNTnoQqG24TAy7ftZ5.jpg" class="img-fluid w-100" alt="banner" />
            <div class="card py-3" style={{ width: "22rem" }}>
                <div class="card-body">
                    <h5 class="card-title text-center">Find Your right Car</h5>
                    <div className="buttons my-3 d-flex justify-content-around"><button type="button" class="btn btn-primary">New Car</button><button type="button" class="btn btn-primary">Used Car</button></div>
                    <div className="radios-btns my-3 d-flex justify-content-around">
                        <span class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                By Budget
                            </label>
                        </span>
                        <span class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                By Brand
                            </label>
                        </span>
                    </div>
                    <div className="selection-cars">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <a href="#" class="btn btn-primary my-3 container" style={{backgroundColor:"tomato",color:"#fff"}}>Search</a>
                </div>
            </div>

        </div>
    )
}

export default Banner
