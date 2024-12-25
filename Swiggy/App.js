import React from 'react'
import "./style.css"


 const data = {
    "info": {
      "id": "396436",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/389912f8-be64-4474-addd-47d314b23620_396436.jpg",
      "locality": "Devipura",
      "areaName": "Old Sikar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-25 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-09e67ac8-5d6f-4df1-adab-d5fc9e53963d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/sikar/pizza-hut-devipura-old-sikar-rest396436",
      "type": "WEBLINK"
    }
  }
                  
const Navbar = () =>{
    return (
      <nav>
        <img src="https://foodieclub.in/wp-content/uploads/2024/08/cropped-cropped-LOGO-FOODIE.png" alt="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
// Swiggy card component 
const Card = () => {
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data.info.cloudinaryImageId} alt="logo" className='card-img' />
      <h2>{data.info.name}</h2>
      <p>{data.info.avgRating} .  {data.info.sla.slaString}</p>
      <p>{data.info.cuisines}</p>
      <p>{data.info.areaName}</p>
     
    </div>
  )
}
const App = () => {
  return (
    <div>
        <Navbar />
        <div className="card-container">
        <Card />
    
        </div>
       
    </div>
  )
}

export default App
