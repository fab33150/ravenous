const apiKey = 'JVMT49liTYvVKjOYkvx2F0Dtzl8ucmTjwf-XMrAoNAcBNI-O1ZrjTlWtg1tx7u4128Nlw5g0_3pMVQuSbEfZ-sAH9aCxol_iOMuHBPwxsdGFWHc--2L4Q8YQb5N0X3Y';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(business => {
                      return { 
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        });
  
    }
}

export default Yelp;
