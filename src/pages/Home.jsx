import React from 'react'

export default function Home() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header modern-hero">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Discover Your Next 
                <span className="text-warning"> Adventure</span>
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInUp">
                Experience the world with WeGo Travels - Your gateway to unforgettable journeys
              </p>
              
              {/* Modern Search Bar */}
              <div className="search-container animated fadeInUp">
                <div className="search-card">
                  <div className="row g-3">
                    <div className="col-lg-3 col-md-6">
                      <div className="search-field">
                        <i className="fas fa-map-marker-alt search-icon"></i>
                        <select className="form-select modern-select">
                          <option>Choose Destination</option>
                          <option>Thailand</option>
                          <option>Indonesia</option>
                          <option>Malaysia</option>
                          <option>Singapore</option>
                          <option>India</option>
                          <option>Nepal</option>
                          <option>Sri Lanka</option>
                          <option>Maldives</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="search-field">
                        <i className="fas fa-calendar-alt search-icon"></i>
                        <select className="form-select modern-select">
                          <option>Trip Duration</option>
                          <option>3-5 Days</option>
                          <option>7 Days</option>
                          <option>10 Days</option>
                          <option>14+ Days</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="search-field">
                        <i className="fas fa-users search-icon"></i>
                        <select className="form-select modern-select">
                          <option>Travelers</option>
                          <option>1 Person</option>
                          <option>2 People</option>
                          <option>3-5 People</option>
                          <option>6+ People</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <button className="btn btn-warning w-100 modern-search-btn">
                        <i className="fas fa-search me-2"></i>
                        Find Tours
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="row mt-5 animated fadeInUp">
                <div className="col-md-3 col-6 mb-3">
                  <div className="stat-item">
                    <h3 className="text-warning mb-1">15+</h3>
                    <p className="text-white-50 mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="stat-item">
                    <h3 className="text-warning mb-1">50K+</h3>
                    <p className="text-white-50 mb-0">Happy Travelers</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="stat-item">
                    <h3 className="text-warning mb-1">150+</h3>
                    <p className="text-white-50 mb-0">Premium Tours</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="stat-item">
                    <h3 className="text-warning mb-1">24/7</h3>
                    <p className="text-white-50 mb-0">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">WeGo Travels</span>
            </h1>
            <p className="mb-4">
            “Wego” based in Tour & Travelling, India, brings 15 years of travel expertise to life with a young and creative team. Specializing in unforgettable trips across Sri Lanka, India, and Thailand, Wego offers a wide range of travel experiences, from exotic getaways to thrilling adventures.

            </p>
            <p className="mb-4">
            Embark on your next adventure with Wego! Based in India, we bring 15 years of travel industry expertise combined with the creativity and passion of a vibrant young team. Specializing in unforgettable experiences across India, Sri Lanka, and Thailand, we offer everything from serene escapes to thrilling adventures. Let us make your travel dreams come true!
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  First Class Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Handpicked Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  Latest Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  150 Premium City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2" />
                  24/7 Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Services
          </h6>
          <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                  Discover breathtaking destinations across the globe with our worldwide tour packages. 
                  From iconic landmarks to hidden gems, your adventure awaits! 
                  Let’s make your travel dreams come true.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                  Hassle-Free Hotel Reservations
                  Find and book the perfect stay for your trip with ease. 
                  From cozy inns to luxury hotels, our seamless reservation process ensures comfort and convenience wherever you go.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Your Trusted Travel Guides
                  Explore like a pro with our expert travel guides. Get insider tips, local recommendations, 
                  and detailed itineraries to make every trip unforgettable. 
                  Adventure starts here!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                 Effortless Event Management
                  From planning to execution, we handle every detail to make your event unforgettable. 
                  Whether it’s a corporate gathering, wedding, or celebration, we ensure a seamless and stress-free experience.
                  Let’s make your event extraordinary!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                 Discover breathtaking destinations across the globe with our worldwide tour packages. 
                  From iconic landmarks to hidden gems, your adventure awaits!
                  Let’s make your travel dreams come
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                  Hassle-Free Hotel Reservations
                  Find and book the perfect stay for your trip with ease. From cozy inns to luxury hotels, 
                  our seamless reservation process ensures comfort and convenience wherever you go.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Your Trusted Travel Guides
                  Explore like a pro with our expert travel guides. 
                  Get insider tips, local recommendations, and detailed itineraries to make every trip unforgettable. 
                  Adventure starts here!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                  Effortless Event Management
                  From planning to execution, we handle every detail to make your event unforgettable. 
                  Whether it’s a corporate gathering, wedding, or celebration, we ensure a seamless and stress-free experience. 
                  Let’s make your event extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
    {/* Destination Start */}
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Popular Destination</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-1.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    30% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Thailand
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-2.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    25% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Malaysia
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href=""
                >
                  <img
                    className="img-fluid"
                    src="assets/img/destination-3.jpg"
                    alt=""
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    35% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Australia
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: 350 }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href=""
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/destination-4.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                20% OFF
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                Indonesia
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Destination Start */}
    {/* Package Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Packages
          </h6>
          <h1 className="mb-5">Awesome Packages</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Thailand
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$149.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Awesome Packages for Thailand
                  Embark on an unforgettable journey to the Land of Smiles with our exclusive Thailand tour packages! 
                  From the vibrant streets of Bangkok to the serene beaches of Phuket and the lush jungles of Chiang Mai, we’ve crafted the perfect itineraries for every traveler.
                  ✅ Luxurious accommodations
                  ✅ Guided tours to iconic landmarks
                  ✅ Exciting adventure activities
                  ✅ Authentic Thai cuisine experiences
                  Book your Thailand getaway today and create memories that last a lifetime!
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-2.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Indonesia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$139.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Awesome Packages for Indonesia
                 Discover the rich culture, stunning landscapes, and tropical beauty of Indonesia with our specially crafted tour packages! 
                  From the vibrant streets of Bali to the ancient temples of Yogyakarta and the lush jungles of Sumatra, we’ve curated unforgettable experiences for every type of traveler.
                  ✅ Stunning beach resorts in Bali
                  ✅ Cultural tours to Ubud and Borobudur
                  ✅ Adventurous hikes to active volcanoes
                  ✅ Traditional Indonesian cuisine & local experiences
                   Book your dream Indonesian adventure today and explore paradise like never before!
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="package-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="assets/img/package-3.jpg" alt="" />
              </div>
              <div className="d-flex border-bottom">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  Malaysia
                </small>
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />3 days
                </small>
                <small className="flex-fill text-center py-2">
                  <i className="fa fa-user text-primary me-2" />2 Person
                </small>
              </div>
              <div className="text-center p-4">
                <h3 className="mb-0">$189.00</h3>
                <div className="mb-3">
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                  <small className="fa fa-star text-primary" />
                </div>
                <p>
                  Awesome Packages for Malaysia
                  Experience the perfect blend of modernity and tradition with our exclusive Malaysia tour packages! Whether you're wandering through Kuala Lumpur's iconic skyline, relaxing on Langkawi’s pristine beaches, or exploring the rich cultural heritage of Penang, 
                  Malaysia offers something for everyone.
                  ✅ Stay in luxury hotels and resorts
                  ✅ Visit top attractions like Petronas Towers, Batu Caves, and George Town
                  ✅ Thrilling jungle safaris and wildlife encounters
                  ✅ Delicious Malaysian cuisine and local experiences
                  Book your Malaysia adventure now and immerse yourself in the beauty of this vibrant destination!
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3 border-end"
                    style={{ borderRadius: "30px 0 0 30px" }}
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-primary px-3"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Package End */}
    {/* Booking Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                "Book your appointment now! Secure your spot with our easy online booking system. 
                Choose your date and time, and instantly confirm your reservation. Access 24/7 from any device."
              </p>
              <p className="mb-4">
                Clear call to action: "Book now" or "Reserve your spot"
                Highlight convenience: "24/7 access", "any device"
                Benefits of online booking: "Instant confirmation", "easy to use"
                Consider adding a special offer or limited availability to encourage immediate booking
              </p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-transparent datetimepicker-input"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-transparent"
                        id="select1"
                      >
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-transparent"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-outline-light w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Booking Start */}
    {/* Process Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 className="mb-5">3 Easy Steps</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-globe fa-3x text-white" />
              </div>
              <h5 className="mt-4">Choose A Destination</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                "Choose your next adventure! 
                Explore vibrant cities, serene beaches, or rugged mountains - where will your wanderlust take you? 
                Consider your interests, budget, and travel style to find the perfect destination for an unforgettable trip."
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-dollar-sign fa-3x text-white" />
              </div>
              <h5 className="mt-4">Pay Online</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
              Enjoy the convenience of secure and hassle-free online payments. With just a few clicks, you can complete your transaction safely from the comfort of your home. Choose from multiple payment options, including:
              Credit/Debit Cards
              Net Banking
              UPI
              Mobile Wallets
             Your payment details are encrypted and processed through trusted gateways to ensure maximum security. Experience seamless and stress-free payments today!
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa fa-plane fa-3x text-white" />
              </div>
              <h5 className="mt-4">Fly Today</h5>
              <hr className="w-25 mx-auto bg-primary mb-1" />
              <hr className="w-50 mx-auto bg-primary mt-0" />
              <p className="mb-0">
                There’s nothing quite like the freedom of hopping on a plane and landing in a completely new part of the world. 
                Airplanes represent excitement, passion, and adventure —and if you’re going somewhere today,
                there’s no question that you can pick up plenty of Insta-worthy pictures along the way!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Process Start */}
    </div>
  )
}
