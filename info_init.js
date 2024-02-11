let linkEntities = []


class LinkEntity {
  constructor(id, hrefLink) {
    this.id = id;
    this.hrefLink = hrefLink;
    
    linkEntities.push(this) // add self to list of link entities
  }

  get init() {
    let linkEntity =  document.getElementById(this.id)
    linkEntity.href = this.hrefLink;

    return;
  }
}


{  
  // let anyLink = new LinkEntity('', '')

  let FBLink = new LinkEntity('facebook-link',
   'https://www.facebook.com/profile.php?id=100064091343336')
  let FBLink2 = new LinkEntity('facebook-link-2', 
    'https://www.facebook.com/profile.php?id=100064091343336')

  let WALink = new LinkEntity('whatsapp-link', 
    'https://wa.me/+260972333053?text=Hello GoldField Zambia...')
  let WALink2 = new LinkEntity('whatsapp-link-2', 
    'https://wa.me/+260972333053?text=Hello GoldField Zambia...')

  let telLink = new LinkEntity('tel-link', 'tel:+260972333053')
  let telLink2 = new LinkEntity('tel-link-2', 'tel:+260972333053')

  let emailLink = new LinkEntity('email-link', 
    'mailto:GoldfieldZambiafarm@mail.com')
  let emailLink2 = new LinkEntity('email-link-2', 
    'mailto:GoldfieldZambiafarm@mail.com')

  let locationLink = new LinkEntity('location-link', 
    'https://www.google.com/maps/dir/?api=1&destination=GoldField,+Zambia&destination_place_id=ChIJSaq8PH3zQBkR6xMgRsGT0NA&travelmode=driving')
  let locationLink2 = new LinkEntity('location-link-2', 
    'https://www.google.com/maps/dir/?api=1&destination=GoldField,+Zambia&destination_place_id=ChIJSaq8PH3zQBkR6xMgRsGT0NA&travelmode=driving')

}


linkEntities.forEach((linkEntity) => linkEntity.init)