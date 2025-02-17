import React from "react";
import { PlayCircle } from "lucide-react";
import { Button } from "@/Components/ui/button";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ServiceCard from "@/Components/ServiceCard";
import AgentCard from "@/Components/AgentCard";

import PropertyCard from "../Components/PropertyCard";
import { Link } from "@inertiajs/react";
import SectionWrapper from "../Components/SectionWrapper";

const HomePage = () => {
  const featuredProperties = [
    {
      id: 1,
      image: "/images/houses/pexels-photo-106399.jpeg",
      name: "Modern Villa",
      price: "750,000",
      location: "Beverly Hills",
      beds: 4,
      baths: 3,
      sqft: 3200,
    },
    {
      id: 2,
      image: "/images/houses/pexels-photo-1396122.jpeg",
      name: "Luxury Apartment",
      price: "450,000",
      location: "Manhattan",
      beds: 3,
      baths: 2,
      sqft: 1800,
    },
    {
      id: 3,
      image: "/images/houses/pexels-photo-323780.jpeg",
      name: "Family Home",
      price: "550,000",
      location: "San Francisco",
      beds: 4,
      baths: 2.5,
      sqft: 2400,
    },
    {
      id: 4,
      image: "/images/houses/pexels-photo-1029599.jpeg",
      name: "Modern Condo",
      price: "320,000",
      location: "Miami",
      beds: 2,
      baths: 2,
      sqft: 1200,
    },
  ];

  const benefitCards = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
      title: "Property Insurance",
      description: "Comprehensive coverage for your dream home",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
      title: "Tax Advantage",
      description: "Expert guidance on real estate tax benefits",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/7841883/pexels-photo-7841883.jpeg",
      title: "Lowest Commission",
      description: "Competitive rates for our premium services",
    },
  ];

  const services = [
    {
      icon: "💰",
      title: "Tax Advantage",
      description:
        "Expert guidance on tax benefits and deductions for property investments",
    },
    {
      icon: "🛡️",
      title: "Property Insurance",
      description:
        "Comprehensive coverage options to protect your valuable investments",
    },
    {
      icon: "💎",
      title: "Lowest Commission",
      description:
        "Competitive rates and transparent fee structure for all transactions",
    },
  ];

  const agents = [
    {
      name: "Hensley Harrison",
      image: "/images/agents/pexels-photo-2379004.jpeg",
      role: "Senior Agent",
    },
    {
      name: "Jesse Smith",
      image: "/images/agents/pexels-photo-1181686.jpeg",
      role: "Property Consultant",
    },
    {
      name: "Nathan Jefferson",
      image: "/images/agents/pexels-photo-2182970.jpeg",
      role: "Market Analyst",
    },
    {
      name: "Diana Prescott",
      image: "/images/agents/pexels-photo-1239291.jpeg",
      role: "Senior Agent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative bg-black
      "
      >
        <div class="absolute inset-0 bg-[url('/images/hero-img.jpeg')] bg-cover bg-center opacity-30"></div>

        <div className="max-container">
          <div className="relative  py-12 md:py-24">
            <div>
              <h1 className="text-4xl text-white font-bold mb-4">
                Welcome to Dream Home Realty
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Discover your perfect property with Central Florida's premier
                real estate agency.
              </p>

              {/* Search Filters */}
              <div className="grid md:grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-lg mt-8">
                <div className="relative">
                  <label className="text-sm text-muted-foreground">
                    Location
                  </label>
                  <select className="w-full p-2 border rounded mt-1">
                    <option>Bangalore</option>
                    <option>Richmond Town</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="text-sm text-muted-foreground">
                    Property Type
                  </label>
                  <select className="w-full p-2 border rounded mt-1">
                    <option>Duplex</option>
                    <option>Apartment</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="text-sm text-muted-foreground">
                    Minimum Price
                  </label>
                  <input
                    type="text"
                    defaultValue="$320,000"
                    className="w-full p-2 border rounded mt-1"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm text-muted-foreground">
                    Maximum Price
                  </label>
                  <input
                    type="text"
                    defaultValue="$820,000"
                    className="w-full p-2 border rounded mt-1"
                  />
                </div>
                <Button className="self-end bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-8 mt-12">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">140,000+</div>
                  <div className="text-sm text-muted-foreground">
                    Properties Listed
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">1M</div>
                  <div className="text-sm text-muted-foreground">
                    Clients per month
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">$187.5K</div>
                  <div className="text-sm text-muted-foreground">
                    Average property
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-sm text-muted-foreground">
                    In customer service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper title={"Top Rated Homes"}>
        <div className="grid md:grid-cols-4 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="/images/pexels-photo-1732414.jpeg"
            alt="Property video thumbnail"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="rounded-full">
              <PlayCircle className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-xl font-bold">Difeort Home tiles, Bangalore</h3>
          </div>
        </div>
      </SectionWrapper>
      {/*  */}
      <SectionWrapper title={"Featured Homes"}>
        <div className="grid md:grid-cols-4 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </SectionWrapper>
      {/*  */}
      <SectionWrapper title={"Why Choose our service"}>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </SectionWrapper>

      {/*  */}

      <SectionWrapper title={"Renting Made Easy"}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Looking for a place to rent? We've got you covered with a wide
              range of rental properties to suit every need and budget.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Extensive selection of apartments, houses, and condos</li>
              <li>Flexible lease terms to fit your lifestyle</li>
              <li>Professional property management services</li>
              <li>Easy online application and rent payment process</li>
            </ul>
            <Link
              href="/rentals"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Browse Rental Properties
            </Link>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Rental Property"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title={"Rent and Mortgage Services"}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Rental Properties</h3>
            <p>
              Explore our wide range of rental properties, from apartments to
              single-family homes. Our team can help you find the perfect rental
              to suit your needs and budget.
            </p>
            <Link
              href="/rentals"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Rental Listings
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Mortgage Assistance</h3>
            <p>
              Navigate the mortgage process with ease. Our partnerships with
              trusted lenders ensure you get competitive rates and terms
              tailored to your financial situation.
            </p>
            <Link
              href="/mortgage"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Learn About Mortgages
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title={"Client Testimonials"}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="italic mb-4">
              "Dream Home Realty made finding our perfect home a breeze. Their
              expertise and dedication are unmatched!"
            </p>
            <p className="font-semibold">- Sarah and John D.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="italic mb-4">
              "I couldn't be happier with the service I received. They truly go
              above and beyond for their clients."
            </p>
            <p className="font-semibold">- Michael R.</p>
          </div>
        </div>
      </SectionWrapper>

      {/*  */}
      {/* Experts Section */}
      <SectionWrapper title={"Experts that take care of you"}>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {agents.map((agent, index) => (
            <AgentCard agent={agent} key={index} />
          ))}
        </div>
      </SectionWrapper>

      {/*  */}
      {/* Newsletter Section */}
      <SectionWrapper
        title={"Subscribe to get latest news update"}
        className="bg-gray-900 text-white flex items-center"
        centerTitle={true}
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-8 mt-3">
            Stay informed about new properties and market trends
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20"
            />
            <Button>Subscribe now</Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
