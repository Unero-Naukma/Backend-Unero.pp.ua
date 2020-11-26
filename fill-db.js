'use strict';

const products = [
  {
    id: 1,
    title: `"ROLL" black`,
    price: 80,
    description: {
      details: [
        `A backpack suitable for everyday urban life as well as for small weekend trips.`
      ],
      features: [
        `Two compartments inside: one for a laptop (up to 15.6 inches) and protected by a foam wall.`,
        `Secret pocket on the side wall for your phone or wallet.`,
        `The back and straps of the backpack are made of foam.`,
        `Maximum height - 53 cm. Height as in the photo - 40 cm.`
      ]
    },
    picture: `bag-1.jpg`
  },
  {
    id: 2,
    title: `Keep Backpack`,
    price: 120,
    description: {
      details: [
        `A laconic and stylish black urban backpack with a padded bottom, moisture protection and many pockets for the most important things.`
      ],
      features: [
        `On the back of the backpack there is a secret pocket for valuables and documents.`,
        `The bottom is sealed with waterproof vinyl, all zippers are also waterproof.`,
        `The high resistance of the material to many chemicals makes the backpack wear-resistant and durable.`,
      ]
    },
    picture: `bag-2.jpg`
  },
  {
    id: 3,
    title: `Transformer bag`,
    price: 90,
    description: {
      details: [
        `This accessory has no age-related destiny, it will suit absolutely everyone. Can be worn for walks, cafes, clubs, to work, study and more.`
      ],
      features: [
        `Shlekiki: imitation leather.`,
        `Size: height 26 cm, base length 26 cm, top length 24 cm, width 9 cm.`,
        `It closes with a zipper, has one main compartment, two open pockets, a zip pocket.`,
        `Lining in nylon fabric.`,
        `Metal-colored hardware.`,
      ]
    },
    picture: `bag-3.jpg`
  },
  {
    id: 4,
    title: `Backpack SOFT`,
    price: 100,
    description: {
      details: [
        `Outer material: eco leather + waterproof polyester. Zippers YKK. 6 pockets: 1 large front with a zipper, 1 in the back, on the back of the backpack, also with a zipper.`
      ],
      features: [
        `Compact and roomy backpack is sealed on all sides.`,
        `Soft handles are stitched with a strap, which strengthens them and makes the backpack comfortable to carry.`,
        `Small silicone logo on the front pocket.`,
        `Dimensions: 40 x 26 x 10 cm.`,
      ]
    },
    picture: `bag-4.jpg`
  },
  {
    id: 5,
    title: `Backpack pink`,
    price: 230,
    description: {
      details: [
        `A classic mid-size urban backpack. Brand laconicism. Roomy main compartment, external zippered patch pocket.`
      ],
      features: [
        `Carrying handle.`,
        `Harness adjustment.`,
        `For the city, for travel.`,
      ]
    },
    picture: `bag-6.jpg`
  },
  {
    id: 6,
    title: `School backpack`,
    price: 230,
    description: {
      details: [
        `The model is made in a pale pink color, it goes well with a variety of looks. Outside there is a zippered pocket, and inside pockets for smartphones, a wallet, one main compartment for books, notebooks and other office supplies.`
      ],
      features: [
        `The accessory can be carried in hand by the handle or on the shoulders.`,
        `The model is functional enough, easy to use, does not cause discomfort.`,
        `The attractive and high quality TuLaduo women's backpack uses canvas.`,
      ]
    },
    picture: `bag-7.jpg`
  },
  {
    id: 7,
    title: `Leather backpack`,
    price: 180,
    description: {
      details: [
        `In the middle of a strong non-woven grey material, with it you can not worry that put in the middle of the keys, open pens or pencils, etc.`
      ],
      features: [
        `Made of durable, modern artificial leather: water-repellent, resistant to burnout.`,
        `50,000 cycles to wear according to the Mertindale test.`,
        `It holds its shape perfectly.`,
        `Reinforced hard bottom.`,
        `Metal-colored hardware.`,
      ]
    },
    picture: `bag-8.jpg`
  },
  {
    id: 8,
    title: `Summer backpack`,
    price: 175,
    description: {
      details: [
        `Summer women's backpack YES of the Jasmine series of small size. Made of Italian-made textured white eco-leather.`
      ],
      features: [
        `2 compartments, each closed with a metal zipper.`,
        `Inside: zip pocket for small personal items`,
        `Two zip pockets on the front of the backpack.`,
        `High quality metal fittings.`,
        `Carry handle in hand`,
        `Adjustable shoulder straps`,
      ]
    },
    picture: `bag-9.jpg`
  },
  {
    id: 9,
    title: `Backpack by Herschel`,
    price: 245,
    description: {
      details: [
        `A classic mid-size urban backpack.Brand laconicism. Spacious main compartment without laptop compartment, external zippered patch pocket.`
      ],
      features: [
        `Carrying handle, Harness adjustment, Water resistant`,
        `For the city, for travel`,
      ]
    },
    picture: `bag-10.jpg`
  },
  {
    id: 10,
    title: `AirPods`,
    price: 320,
    description: {
      details: [
        `Increased operating time in telephone mode. Siri voice activation. AirPods - unique wireless headphones. They will fit all your devices. Take them out of the case and you can use them right away.`
      ],
      features: [
        `A whole day of sounding.`,
        `Easy to set up. Just listen.`,
        `Siri voice assistant.`,
      ]
    },
    picture: `accessory-50.jpg`
  },
  {
    id: 11,
    title: `Headphones Edifier`,
    price: 410,
    description: {
      details: [
        `Everything is broken up anew. It takes an hour to prepare the Edifier W800BT case for a high precision form and metalization of the surface for high wear and tear. The W800BT headphone supports Bluetooth v4.0 protocol and HFP, HSP, A2DP, AVRCP profiles.`
      ],
      features: [
        `Connection type Wireless.`,
        `Connection interface 3.5 mm (mini-Jack).`,
        `Impedance, Ohm 32.`,
        `Microphone design Built into the body of the headphones.`
      ]
    },
    picture: `accessory-53.jpg`
  },
  {
    id: 12,
    title: `Gemix headphones`,
    price: 330,
    description: {
      details: [
        `Thanks to the unsurpassed sound quality, you will not experience any difficulties during telephone conversations. The headset is compatible with any phone that supports Bluetooth, which means that nothing prevents you from listening to music while waiting for a call.`
      ],
      features: [
        `Voice prompts for easy use.`,
        `Multilink the ability to connect two devices simultaneously with Bluetooth.`,
        `Up to 10 hours of talk or music mode and up to 10 days of standby time.`,
        `The battery status indicator notifies you of the remaining battery capacity of your iPhone or iPad.`,
        `Phone conversations, listening to music, great sound and wireless.`,
      ]
    },
    picture: `accessory-51.jpg`
  },
  {
    id: 13,
    title: `Ergo headphones`,
    price: 525,
    description: {
      details: [
        `Connection type Wireless. Connection interface USB. The presence of active noise reduction Without active noise reduction.`
      ],
      features: [
        `Headphone frequency range 20 - 20,000 Hz.`,
        `Headphone sensitivity 110 +/- 3 dB.`,
        `Microphone design is built into the body of the headphones.`,
      ]
    },
    picture: `accessory-54.jpg`
  },
  {
    id: 14,
    title: `Electronic wrist watch`,
    price: 440,
    description: {
      details: [
        `LED watches are the embodiment of the most advanced technologies, impeccable style and high functionality - this is an impressive new generation watch. Such watches characterize the owner as a bright extraordinary personality with a sense of taste and sophisticated style.`
      ],
      features: [
        `LED watches are the embodiment of the most advanced technologies.`,
        `LED watch is a wristwatch, the main element of which is LED light-emitting diodes.`,
        `The innovativeness and quality of these watches have already been appreciated by fashionable and modern users of all ages.`,
      ]
    },
    picture: `accessory-52.jpg`
  },
  {
    id: 15,
    title: `Long earrings`,
    price: 75,
    description: {
      details: [
        `Women's long earrings made of 316L medical steel. Earring length 6.5 cm. Women's earrings made of jewelry (surgical) steel are graceful jewelry that embodies the spirit of modernity and the character of its owner.`
      ],
      features: [
        `Fashion trends.`,
        `Never lose the beauty of their appearance.`,
        `They are worthy of competition with precious metals.`,
      ]
    },
    picture: `accessory-47.jpg`
  },
  {
    id: 16,
    title: `Semicircle earrings`,
    price: 50,
    description: {
      details: [
        `Large but light geometric earrings are built on the contrast of two shapes: a solid semicircle and a marble-colored circle. They have a matte finish and a pleasant tactile roughness.`
      ],
      features: [
        `Fashion trends.`,
        `Never lose the beauty of their appearance.`,
        `They are worthy of competition with precious metals.`,
      ]
    },
    picture: `accessory-46.jpg`
  },
  {
    id: 17,
    title: `Glasses rounds pink`,
    price: 80,
    description: {
      details: [
        `Round sunglasses, pink. Suitable for both casual style and the beach.`
      ],
      features: [
        `Round sunglasses, pink.`,
        `Suitable for both casual style and the beach.`,
        `Protection degree - uv-400.`,
      ]
    },
    picture: `accessory-43.jpg`
  },
  {
    id: 18,
    title: `Gradient black glasses`,
    price: 70,
    description: {
      details: [
        `Sunglasses, brown mirrored lens with gradient. Black color. Suitable for both casual style and the beach.`
      ],
      features: [
        `Gender: female.`,
        `Color: black.`,
      ]
    },
    picture: `accessory-45.jpg`
  },
  {
    id: 19,
    title: `Frame glasses black`,
    price: 65,
    description: {
      details: [
        `Black sunglasses, black mirrored lens.`
      ],
      features: [
        `Model - "Frame".`,
        `Black color.`,
        `Suitable for both casual style and the beach.`
      ]
    },
    picture: `accessory-45.jpg`
  },
  {
    id: 20,
    title: `Glasses black`,
    price: 65,
    description: {
      details: [
        `Black sunglasses, black mirrored lens.`
      ],
      features: [
        `Model - "Frame".`,
        `Black color.`,
        `Suitable for both casual style and the beach.`
      ]
    },
    picture: `accessory-44.jpg`
  },
  {
    id: 21,
    title: `Image with PC protection`,
    price: 65,
    description: {
      details: [
        `Stylish fashion glasses with radiation protection, with transparent frames. Suitable for both casual style and for the beach or events.`
      ],
      features: [
        `Stylish image.`,
        `Radiation-protected.`,
        `For everyday style and for the beach or events.`
      ]
    },
    picture: `accessory-40.jpg`
  },
  {
    id: 22,
    title: `Image glasses`,
    price: 90,
    description: {
      details: [
        `Stylish fashion glasses with radiation protection, with transparent frames. Suitable for both casual style and for the beach or events.`
      ],
      features: [
        `Stylish image.`,
        `Radiation-protected.`,
        `For everyday style and for the beach or events.`
      ]
    },
    picture: `accessory-41.jpg`
  },
  {
    id: 23,
    title: `Magnetic hourglass`,
    price: 235,
    description: {
      details: [
        `An original design move is to pour magnetic ore into an hourglass. We get - not just an hourglass, but a magnetic clock. Flowing into the bulb, they create picturesque magnetic crystals that never repeat themselves!`
      ],
      features: [
        `Size: 16x7x7 cm.`,
        `Materials: glass, iron powder, magnet, wood.`,
        `Time: 30 seconds.`
      ]
    },
    picture: `decoration-60.jpg`
  },
  {
    id: 24,
    title: `Candlestick set`,
    price: 180,
    description: {
      details: [
        `The elegant shade of gold makes the items in the set stand out and draws attention to them. Structurally candle coasters are quite simple, but this does not detract from their beauty, but makes use items are very convenient and simple.`
      ],
      features: [
        `Size: 23cm 28cm 33cm.`,
        `Materials: gold`,
      ]
    },
    picture: `decoration-59.jpg`
  },
  {
    id: 25,
    title: `Pictures on the wall`,
    price: 145,
    description: {
      details: [
        `A set of pictures for a frame or to hang on the wall. Printed on high-quality photo paper in the mat. Pictures and posters are the perfect gift for any occasion.`
      ],
      features: [
        `Size - A4 (20x30) (20x30cm) 8x12.`,
        `Size - A3 (30x40) (30x40cm).`,
        `Type of paper Photo – Matte.`,
      ]
    },
    picture: `decoration-57.jpg`
  },
  {
    id: 26,
    title: `Silent wall clock`,
    price: 410,
    description: {
      details: [
        `Quartz silent wall clock of the Losso trademark. Perfectly fit into the interior of the living room, kitchen, bedroom and office space.`
      ],
      features: [
        `Noiselessness.`,
        `Stylish solid design.`,
        `Environmentally friendly plastic.`,
        `Glass with good light transmission.`,
        `Long-term operation from one finger-type battery.`,
        `Relief of numbers for the convenience of reading time.`,
        `Rich selection of colors.`
      ]
    },
    picture: `decoration-55.jpg`
  },
  {
    id: 27,
    title: `Retro wall clock`,
    price: 335,
    description: {
      details: [
        `Original author's product of Ukrainian origin. The main functions are counting and measuring time, as well as interior decoration. The case is made of the highest quality polished and cut mineral glass, the edges are perfectly cut.`
      ],
      features: [
        `The manufacturer gives a 2-year guarantee for the movement.`,
        `This is a truly chic clock that will complement your interior and become a highlight of your home.`,
        `The watch mechanism is “Hermle” of German production, quartz movement, quiet movement.`,
        `The hands of the clock are open.`,
      ]
    },
    picture: `decoration-56.jpg`
  },
  {
    id: 28,
    title: `Coffee table`,
    price: 980,
    description: {
      details: [
        `Coffee table Mariffa is an original coffee table of the Polish company Halmar with a square top made of MDF and natural veneer, made in the form of a basket with a removable top. The original base is made of powder coated steel.`
      ],
      features: [
        `The Mariffa table will take its rightful place in your living room.`,
        `Removable table top.`,
        `Material – steel.`,
      ]
    },
    picture: `furniture-25.jpg`
  },
  {
    id: 29,
    title: `Claudia 3-seater sofa`,
    price: 28370,
    description: {
      details: [
        `This sofa is just made for a large family. Its amazing softness and large space will give you a lot of pleasant sensations. Your children will be delighted - this model will find a place for fun games, even for a large group of fidgets.`
      ],
      features: [
        `The softness of this corner sofa cannot be expressed in words - it just needs to be felt.`,
        `It guarantees complete relaxation.`,
        `The discreet and noble design will embody your ideas of what the ideal sofa for home should be like.`,
      ]
    },
    picture: `furniture-26.jpg`
  },
  {
    id: 30,
    title: `Dining table`,
    price: 2480,
    description: {
      details: [
        `Dining table Nowy Styl Aller black (18) 1200x800x750 mm white.`
      ],
      features: [
        `Does not need constant wiping from behind its surface.`,
        `Stylish for any home.`,
        `Compact dimensions.`,
      ]
    },
    picture: `furniture-36.jpg`
  },
  {
    id: 31,
    title: `Kitchen table`,
    price: 2480,
    description: {
      details: [
        `Dining table 1200x800x750 mm wooden.`
      ],
      features: [
        `Does not need constant wiping from behind its surface.`,
        `Stylish for any home.`,
        `Compact dimensions.`,
      ]
    },
    picture: `furniture-35.jpg`
  },
  {
    id: 32,
    title: `Gaston Dining table`,
    price: 3920,
    description: {
      details: [
        `Gaston Folding dining table 6 seats Spanish Ceramics Gray 120 cm.`
      ],
      features: [
        `For the whole family.`,
        `Ceramics.`,
        `Metal legs.`,
      ]
    },
    picture: `furniture-39.jpg`
  },
  {
    id: 33,
    title: `ROMA Table`,
    price: 2180,
    description: {
      details: [
        `ROMA Dining table 6 seats Spanish ceramics Brown 120 cm.`
      ],
      features: [
        `For a large company.`,
        `Can't see the dirt.`,
        `For any decor.`,
      ]
    },
    picture: `furniture-38.jpg`
  },
  {
    id: 34,
    title: `Coffee table`,
    price: 4190,
    description: {
      details: [
        `Scandinavian style is laconic, simplicity, functionality and boundless love for wood. The Helena coffee table will help you create a unique interior.`
      ],
      features: [
        `Dimensions: D80 x H45 cm.`,
        `Table top: 18mm MDF boards covered with oak veneer.`,
        `Legs are made of solid oak and additionally reinforced with metal parts.`,
      ]
    },
    picture: `furniture-37.jpg`
  },
  {
    id: 35,
    title: `Shelving for home`,
    price: 245,
    description: {
      details: [
        `Shelving for a home in white, perfect for dividing a room into zones. But in most cases, this type of product is used as a shelf in order to store books or other important things there.`
      ],
      features: [
        `Available colors: White, Concrete, Sonoma Oak, Dark Wenge.`,
        `Shelf dimensions: W 700 / H 1922 / D 238.`,
        `Weight: 24.2 kg.`,
      ]
    },
    picture: `furniture-33.jpg`
  },
  {
    id: 36,
    title: `Shelf for books`,
    price: 370,
    description: {
      details: [
        `Shelving for a house in brown, perfect for dividing a room into zones. But in most cases, this type of product is used as a shelf in order to store books or other important things there.`
      ],
      features: [
        `Available colors: White, Concrete, Sonoma Oak, Dark Wenge.`,
        `Shelf dimensions: W 700 / H 1922 / D 238.`,
        `Weight: 24.2 kg.`,
      ]
    },
    picture: `furniture-33.jpg`
  },
  {
    id: 37,
    title: `Shelf`,
    price: 395,
    description: {
      details: [
        `Shelving for a house in brown, perfect for dividing a room into zones. But in most cases, this type of product is used as a shelf in order to store books or other important things there.`
      ],
      features: [
        `Nice design.`,
        `Unusual shape.`,
        `Easy to assemble.`,
      ]
    },
    picture: `furniture-31.jpg`
  },
  {
    id: 38,
    title: `Set of upholstered furniture`,
    price: 2180,
    description: {
      details: [
        `Ottoman sofas for two people.`,
      ],
      features: [
        `Take up little space.`,
        `Super soft.`,
        `Easy to wash.`,
      ]
    },
    picture: `furniture-29.jpg`
  },
  {
    id: 39,
    title: `Pink sofa`,
    price: 745,
    description: {
      details: [
        `Sofa with reclining back and soft cushions.`,
      ],
      features: [
        `Stylish.`,
        `Super soft.`,
        `Unusual.`,
      ]
    },
    picture: `furniture-30.jpg`
  },
];

const categories = [
  {
    id: 1,
    name: `Furniture`
  },
  {
    id: 2,
    name: `Bags`
  },
  {
    id: 3,
    name: `Accessories`
  },
  {
    id: 4,
    name: `Decoration`
  },
];

const collections = [
  {
    id: 1,
    title: `Minimal Decor Collection`,
    description: {
      intro: [
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoddunt ut laoreet dolore magna aliquam. Ut wisi enim ad minim veniam, quis nostrud exerci tation.`,
        `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdie.`
      ],
      main: [
        `In hac habitasse platea dictumst. Etiam vehicula ullamcorper risus at sagittis. Fusce nec nisi lectus. Sed eget ipsum id purus volutpat ullamcorper. Aliquam quis orci nunc. Vivamus consequat quis velit vitae tempus. Maecenas eleifend viverra malesuada.`
      ],
      itemsDescr: [
        `Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth.`
      ]
    },
    pictures: {
      main: `main.jpg`,
      big: `big.jpg`,
      small: [
        `small-1.jpg`,
        `small-2.jpg`
      ]
    }
  },
  {
    id: 2,
    title: `Autumn Collection 2020`,
    description: {
      intro: [
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoddunt ut laoreet dolore magna aliquam. Ut wisi enim ad minim veniam, quis nostrud exerci tation.`,
        `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdie.`
      ],
      main: [
        `In hac habitasse platea dictumst. Etiam vehicula ullamcorper risus at sagittis. Fusce nec nisi lectus. Sed eget ipsum id purus volutpat ullamcorper. Aliquam quis orci nunc. Vivamus consequat quis velit vitae tempus. Maecenas eleifend viverra malesuada.`
      ],
      itemsDescr: [
        `Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth.`
      ]
    },
    pictures: {
      main: `main.jpg`,
      big: `big.jpg`,
      small: [
        `small-1.jpg`,
        `small-2.jpg`
      ]
    }
  },
];

const statuses = [
  {
    name: `Pending`
  },
  {
    name: `Delivered`
  },
  {
    name: `Canceled`
  }
];

const countries = require(`country-list`).getData().map((country) => {
  return {
    id: country.code,
    name: country.name
  };
});

const states = new (require(`usa-states`).UsaStates)().format({
  $id: `a`,
  $name: `s`
});

const collectionsProducts = [
  {
    collectionId: 1,
    productId: 3
  },
  {
    collectionId: 1,
    productId: 16
  },
  {
    collectionId: 1,
    productId: 10
  },
  {
    collectionId: 2,
    productId: 35
  },
  {
    collectionId: 2,
    productId: 27
  },
  {
    collectionId: 2,
    productId: 25
  },
];

const categoriesProducts = [
  {
    categoryId: 2,
    productId: 1
  },
  {
    categoryId: 2,
    productId: 2
  },
  {
    categoryId: 2,
    productId: 3
  },
  {
    categoryId: 2,
    productId: 4
  },
  {
    categoryId: 2,
    productId: 5
  },
  {
    categoryId: 2,
    productId: 6
  },
  {
    categoryId: 2,
    productId: 7
  },
  {
    categoryId: 2,
    productId: 8
  },
  {
    categoryId: 2,
    productId: 9
  },
  {
    categoryId: 3,
    productId: 10
  },
  {
    categoryId: 3,
    productId: 11
  },
  {
    categoryId: 3,
    productId: 12
  },
  {
    categoryId: 3,
    productId: 13
  },
  {
    categoryId: 3,
    productId: 14
  },
  {
    categoryId: 3,
    productId: 15
  },
  {
    categoryId: 3,
    productId: 16
  },
  {
    categoryId: 3,
    productId: 17
  },
  {
    categoryId: 3,
    productId: 18
  },
  {
    categoryId: 3,
    productId: 19
  },
  {
    categoryId: 3,
    productId: 20
  },
  {
    categoryId: 3,
    productId: 21
  },
  {
    categoryId: 3,
    productId: 22
  },
  {
    categoryId: 4,
    productId: 23
  },
  {
    categoryId: 4,
    productId: 24
  },
  {
    categoryId: 4,
    productId: 25
  },
  {
    categoryId: 4,
    productId: 26
  },
  {
    categoryId: 4,
    productId: 27
  },
  {
    categoryId: 1,
    productId: 28
  },
  {
    categoryId: 1,
    productId: 29
  },
  {
    categoryId: 1,
    productId: 30
  },
  {
    categoryId: 1,
    productId: 31
  },
  {
    categoryId: 1,
    productId: 32
  },
  {
    categoryId: 1,
    productId: 33
  },
  {
    categoryId: 1,
    productId: 34
  },
  {
    categoryId: 1,
    productId: 35
  },
  {
    categoryId: 1,
    productId: 36
  },
  {
    categoryId: 1,
    productId: 37
  },
  {
    categoryId: 1,
    productId: 38
  },
  {
    categoryId: 1,
    productId: 39
  },
];

module.exports = {
  products,
  categories,
  collections,
  statuses,
  countries,
  states,
  collectionsProducts,
  categoriesProducts
};


