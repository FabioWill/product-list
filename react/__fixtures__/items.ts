import type { Item } from 'vtex.checkout-graphql'

export const items: Array<Item & { index: number }> = [
  {
    index: 0,
    additionalInfo: {
      brandName: 'Test Brand 0',
    },
    availability: 'available',
    id: '1',
    detailUrl: '/work-shirt/p',
    listPrice: 2800000,
    measurementUnit: 'un',
    name: 'قميص العمل الأعلى',
    price: 2400000,
    productId: '1',
    quantity: 3,
    sellingPrice: 2400000,
    skuName: 'Test SKU 0',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId0',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
  {
    index: 1,
    additionalInfo: {
      brandName: 'Test Brand 1',
    },
    availability: 'withoutStock',
    id: '30',
    detailUrl: '/long-sleeve-shirt/p',
    listPrice: 945000,
    measurementUnit: 'un',
    name: '上品なサングラス',
    price: 945000,
    productId: '2000005',
    quantity: 1,
    sellingPrice: 945000,
    skuName: 'Test SKU 1',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId1',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
  {
    index: 2,
    additionalInfo: {
      brandName: 'Test Brand 2',
    },
    availability: 'cannotBeDelivered',
    id: '2000535',
    detailUrl: '/classy--sunglasses/p',
    listPrice: 400000,
    measurementUnit: 'un',
    name: 'กางเกงขาสั้น St Tropez',
    price: 360000,
    productId: '13',
    quantity: 4,
    sellingPrice: 360000,
    skuName: 'Test SKU 2',
    skuSpecifications: [],
    uniqueId: 'SomeUniqueId2',
    attachmentOfferings: [],
    priceTags: [],
    bundleItems: [],
    offerings: [],
    attachments: [],
  },
]

export const mergeableItems: Array<Item> = [
  {
    "additionalInfo":{
      "brandName":"Marca 2",
      "__typename":"ItemAdditionalInfo"
    },
    "attachments":[
      {
        "name":"Anexo obrigatorio",
        "content":{
          "Chave":"chato"
        },
        "__typename":"Attachment"
      }
    ],
    "attachmentOfferings":[
      {
        "name":"Anexo obrigatorio",
        "required":true,
        "schema":{
          "Chave":{
            "maximumNumberOfCharacters":5,
            "domain":[
              
            ]
          }
        },
        "__typename":"AttachmentOffering"
      }
    ],
    "bundleItems":[
      
    ],
    "parentAssemblyBinding":null,
    "parentItemIndex":null,
    "sellingPriceWithAssemblies":null,
    "options":null,
    "availability":"available",
    "detailUrl":"/produto-com-anexo-obrigatorio/p",
    "id":"26",
    "imageUrls":{
      "at1x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-96-auto",
      "at2x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-192-auto",
      "at3x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-288-auto",
      "__typename":"ImageUrls"
    },
    "listPrice":1399,
    "manualPrice":null,
    "measurementUnit":"un",
    "name":"Produto com anexo obrigatorio Sku anexo obrigatório",
    "offerings":[
      
    ],
    "price":820,
    "productCategories":{
      "1":"Departamento 1",
      "2":"Categoria 1.1"
    },
    "productCategoryIds":"/1/2/",
    "productRefId":"",
    "productId":"15",
    "quantity":1,
    "seller":"1",
    "sellingPrice":820,
    "skuName":"Sku anexo obrigatório",
    "skuSpecifications":[
      
    ],
    "unitMultiplier":1,
    "uniqueId":"40AC71201D1E462B89CD32ABE5EF80F2",
    "refId":null,
    "priceTags":[
      
    ],
    "__typename":"Item"
  },
  {
    "additionalInfo":{
      "brandName":"Marca 2",
      "__typename":"ItemAdditionalInfo"
    },
    "attachments":[
      {
        "name":"Anexo obrigatorio",
        "content":{
          "Chave":"legal"
        },
        "__typename":"Attachment"
      }
    ],
    "attachmentOfferings":[
      {
        "name":"Anexo obrigatorio",
        "required":true,
        "schema":{
          "Chave":{
            "maximumNumberOfCharacters":5,
            "domain":[
              
            ]
          }
        },
        "__typename":"AttachmentOffering"
      }
    ],
    "bundleItems":[
      
    ],
    "parentAssemblyBinding":null,
    "parentItemIndex":null,
    "sellingPriceWithAssemblies":null,
    "options":null,
    "availability":"available",
    "detailUrl":"/produto-com-anexo-obrigatorio/p",
    "id":"26",
    "imageUrls":{
      "at1x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-96-auto",
      "at2x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-192-auto",
      "at3x":"//vtexgame1.vteximg.com.br/arquivos/ids/155363-288-auto",
      "__typename":"ImageUrls"
    },
    "listPrice":1399,
    "manualPrice":null,
    "measurementUnit":"un",
    "name":"Produto com anexo obrigatorio Sku anexo obrigatório",
    "offerings":[
      
    ],
    "price":820,
    "productCategories":{
      "1":"Departamento 1",
      "2":"Categoria 1.1"
    },
    "productCategoryIds":"/1/2/",
    "productRefId":"",
    "productId":"15",
    "quantity":1,
    "seller":"1",
    "sellingPrice":820,
    "skuName":"Sku anexo obrigatório",
    "skuSpecifications":[
      
    ],
    "unitMultiplier":1,
    "uniqueId":"864C1F68ED2F456185FCEAC53E8D8E0C",
    "refId":null,
    "priceTags":[
      
    ],
    "__typename":"Item"
  },
  {
    "additionalInfo":{
      "brandName":"Marca Exemplo",
      "__typename":"ItemAdditionalInfo"
    },
    "attachments":[
      
    ],
    "attachmentOfferings":[
      
    ],
    "bundleItems":[
      
    ],
    "parentAssemblyBinding":null,
    "parentItemIndex":null,
    "sellingPriceWithAssemblies":null,
    "options":null,
    "availability":"available",
    "detailUrl":"/leve-x-pague-y/p",
    "id":"348",
    "imageUrls":{
      "at1x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-96-auto",
      "at2x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-192-auto",
      "at3x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-288-auto",
      "__typename":"ImageUrls"
    },
    "listPrice":10000,
    "manualPrice":null,
    "measurementUnit":"un",
    "name":"Leve X pague Y Leve 3 pague 2",
    "offerings":[
      
    ],
    "price":10000,
    "productCategories":{
      "1":"Departamento 1"
    },
    "productCategoryIds":"/1/",
    "productRefId":"",
    "productId":"296",
    "quantity":2,
    "seller":"1",
    "sellingPrice":8000,
    "skuName":"Leve 3 pague 2",
    "skuSpecifications":[
      
    ],
    "unitMultiplier":1,
    "uniqueId":"8C8E2D490F044CC4B4C28971D0BCCCC1",
    "refId":"000000000002",
    "priceTags":[
      {
        "identifier":"2a86960b-0117-447b-a1c3-b5c79263861f",
        "isPercentual":false,
        "rawValue":-40,
        "value":-4000,
        "name":"discount@price-2a86960b-0117-447b-a1c3-b5c79263861f#4e558409-f94c-4f9a-b38b-c1a8a955b813",
        "ratesAndBenefitsIdentifier":null,
        "__typename":"PriceTag"
      }
    ],
    "__typename":"Item"
  },
  {
    "additionalInfo":{
      "brandName":"Marca Exemplo",
      "__typename":"ItemAdditionalInfo"
    },
    "attachments":[
      
    ],
    "attachmentOfferings":[
      
    ],
    "bundleItems":[
      
    ],
    "parentAssemblyBinding":null,
    "parentItemIndex":null,
    "sellingPriceWithAssemblies":null,
    "options":null,
    "availability":"available",
    "detailUrl":"/leve-x-pague-y/p",
    "id":"348",
    "imageUrls":{
      "at1x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-96-auto",
      "at2x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-192-auto",
      "at3x":"//vtexgame1.vteximg.com.br/arquivos/ids/155668-288-auto",
      "__typename":"ImageUrls"
    },
    "listPrice":10000,
    "manualPrice":null,
    "measurementUnit":"un",
    "name":"Leve X pague Y Leve 3 pague 2",
    "offerings":[
      
    ],
    "price":10000,
    "productCategories":{
      "1":"Departamento 1"
    },
    "productCategoryIds":"/1/",
    "productRefId":"",
    "productId":"296",
    "quantity":1,
    "seller":"1",
    "sellingPrice":0,
    "skuName":"Leve 3 pague 2",
    "skuSpecifications":[
      
    ],
    "unitMultiplier":1,
    "uniqueId":"8C8E2D490F044CC4B4C28971D0BCCCC1",
    "refId":"000000000002",
    "priceTags":[
      {
        "identifier":"7cc296d5-23a7-4318-854f-f2738f424c19",
        "isPercentual":false,
        "rawValue":-100,
        "value":-10000,
        "name":"discount@price-7cc296d5-23a7-4318-854f-f2738f424c19#8d035db6-1069-4a15-9566-c8c6c2853a30",
        "ratesAndBenefitsIdentifier":null,
        "__typename":"PriceTag"
      }
    ],
    "__typename":"Item"
  }
]