import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  [x: string]: any;
  dizi =[];
  

  constructor() { }
  
  ngOnInit(): void {
  }
  
  books = [
    {
      id: 1,
      bookName: 'Deşifre',
      autor: 'Dr. Yavuz Örnek',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/daff341d-f14f-4ba4-9c9c-fef5707fc7a2/300/300/False/image.jpg',
      home: 'Dr. Yavuz Örnek'
    }, {
      id: 2,
      bookName: 'Kanutu',
      autor: 'Pınar ATABEY',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/9a91adef-8f13-4b4c-8700-6131a4e4b72e/300/300/False/image.jpg',
      home: 'Pınar ATABEY'
    },
    {
      id: 3,
      bookName: 'Zamansız Hikayeler',
      autor: ' Temel Arda TOPALOĞLU',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/69775546-0557-4b22-bfe6-6f1ddb2cd942/300/300/False/image.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 4,
      bookName: 'Sherlock Holmes Antolojisi',
      autor: ' Dr. Yavuz Örnek',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/cc35fac4-016e-4a34-bfe4-76dccee89cc3/300/300/False/image.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 5,
      bookName: 'Huzur',
      autor: ' Umut SARAÇ',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/2e6d9472-8cef-47f2-8213-896c9cebd108/300/300/False/image.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 6,
      bookName: 'Zamanın Köleleri',
      autor: '  M.Uğur Bozkurt',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/7fa68248-f370-4600-9858-f3e657926b8b/300/300/False/image.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 7,
      bookName: 'Düğüm',
      autor: ' Temel Arda TOPALOĞLU',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/db052f44-a2cb-4d7f-ab07-6da612e258ef/300/300/False/image.jpg',
      home: 'Ceyhun VAROL'
    },
    {
      id: 8,
      bookName: ' Harry Potter ve Lanetli Çocuk',
      autor: ' J.K Rowling',
      year: 1997,
      imageUrl: 'https://i.dr.com.tr/cache/154x170-0/originals/0001798961001-1.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 9,
      bookName: 'Suç ve Ceza',
      autor: 'Dostoyevski',
      year: 1997,
      imageUrl: 'https://i.dr.com.tr/cache/154x170-0/originals/0001903390001-1.jpg',
      home: 'Temel Arda TOPALOĞLU'
    },
    {
      id: 10,
      bookName: 'Yitik Şehirde 3 Kadının Öyküsü',
      autor: ' Kenan ULU',
      year: 1997,
      imageUrl: 'https://kbimages1-a.akamaihd.net/Images/66279772-29f6-4a75-b8cf-03094b0814ee/300/300/False/image.jpg',
      home: 'Temel Arda TOPALOĞLU'
    }
    
  ];
  

}


