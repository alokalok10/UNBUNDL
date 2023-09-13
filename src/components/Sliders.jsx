import React from 'react'

const Sliders = () => {
    return (
        <div>
            <div id="myCarousel" class="carousel slide container" data-bs-ride="carousel">
                <div class="carousel-inner w-100">
                    <div class="carousel-item active">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=1"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=2"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=3"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=4"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=5"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=6"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=7"/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="https://via.placeholder.com/640x360?text=8"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Sliders
