// services/registrations/registrations.service.ts
import { Injectable } from '@angular/core';
import { Registered } from '../../types/registered';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  constructor() {}

  private registrations: Registered[] = [
  // שיעור 1
  { id: 1, firstName: "חנה", lastName: "לוי", phone: "050-1111111", lessonId: 1, price: 100, paid: true },
  { id: 2, firstName: "רחל", lastName: "כהן", phone: "050-2222222", lessonId: 1, price: 100, paid: false },
  { id: 3, firstName: "מרים", lastName: "ברק", phone: "050-3333333", lessonId: 1, price: 100, paid: true },
  { id: 4, firstName: "שרה", lastName: "דויד", phone: "050-4444444", lessonId: 1, price: 100, paid: true },
  { id: 5, firstName: "רבקה", lastName: "ציון", phone: "050-5555555", lessonId: 1, price: 100, paid: false },

  // שיעור 2
  { id: 6, firstName: "חיה", lastName: "אלמליח", phone: "050-6666666", lessonId: 2, price: 90, paid: true },
  { id: 7, firstName: "שיינא", lastName: "פרידמן", phone: "050-7777777", lessonId: 2, price: 90, paid: false },
  { id: 8, firstName: "שושנה", lastName: "כהנא", phone: "050-8888888", lessonId: 2, price: 90, paid: true },
  { id: 9, firstName: "טליה", lastName: "אבני", phone: "050-9999999", lessonId: 2, price: 90, paid: true },
  { id: 10, firstName: "דליה", lastName: "סגל", phone: "050-1010101", lessonId: 2, price: 90, paid: false },
  { id: 11, firstName: "נעמי", lastName: "גרוס", phone: "050-1212121", lessonId: 2, price: 90, paid: true },

  // שיעור 3
  { id: 12, firstName: "אסתר", lastName: "כהן", phone: "050-1313131", lessonId: 3, price: 110, paid: true },
  { id: 13, firstName: "רבקה", lastName: "גולדשטיין", phone: "050-1414141", lessonId: 3, price: 110, paid: true },
  { id: 14, firstName: "שירה", lastName: "לוריא", phone: "050-1515151", lessonId: 3, price: 110, paid: false },
  { id: 15, firstName: "יעל", lastName: "כהנא", phone: "050-1616161", lessonId: 3, price: 110, paid: true },
  { id: 16, firstName: "ליאת", lastName: "שפירא", phone: "050-1717171", lessonId: 3, price: 110, paid: true },

  // שיעור 4
  { id: 17, firstName: "דינה", lastName: "כהן", phone: "050-1818181", lessonId: 4, price: 95, paid: true },
  { id: 18, firstName: "ברכה", lastName: "רוזנברג", phone: "050-1919191", lessonId: 4, price: 95, paid: false },
  { id: 19, firstName: "מיכל", lastName: "זקס", phone: "050-2020202", lessonId: 4, price: 95, paid: true },
  { id: 20, firstName: "נועה", lastName: "בן דוד", phone: "050-2121212", lessonId: 4, price: 95, paid: true },
  { id: 21, firstName: "סמדר", lastName: "אלון", phone: "050-2222222", lessonId: 4, price: 95, paid: false },
  { id: 22, firstName: "תמר", lastName: "גל", phone: "050-2323232", lessonId: 4, price: 95, paid: true },

  // שיעור 5
  { id: 23, firstName: "יעל", lastName: "לביא", phone: "050-2424242", lessonId: 5, price: 100, paid: true },
  { id: 24, firstName: "רונית", lastName: "פרץ", phone: "050-2525252", lessonId: 5, price: 100, paid: true },
  { id: 25, firstName: "רבקה", lastName: "שטרן", phone: "050-2626262", lessonId: 5, price: 100, paid: false },
  { id: 26, firstName: "נועה", lastName: "לוי", phone: "050-2727272", lessonId: 5, price: 100, paid: true },
  { id: 27, firstName: "מיכל", lastName: "כהן", phone: "050-2828282", lessonId: 5, price: 100, paid: true },
  { id: 28, firstName: "רחל", lastName: "ברמן", phone: "050-2929292", lessonId: 5, price: 100, paid: true },

  // שיעור 6
  { id: 29, firstName: "חנה", lastName: "ברנשטיין", phone: "050-3030303", lessonId: 6, price: 105, paid: false },
  { id: 30, firstName: "אסתר", lastName: "זלצר", phone: "050-3131313", lessonId: 6, price: 105, paid: true },
  { id: 31, firstName: "רחל", lastName: "כהן", phone: "050-3232323", lessonId: 6, price: 105, paid: true },
  { id: 32, firstName: "מרים", lastName: "ברק", phone: "050-3333333", lessonId: 6, price: 105, paid: false },
  { id: 33, firstName: "שרה", lastName: "דויד", phone: "050-3434343", lessonId: 6, price: 105, paid: true },

  // שיעור 7
  { id: 34, firstName: "רבקה", lastName: "ציון", phone: "050-3535353", lessonId: 7, price: 90, paid: true },
  { id: 35, firstName: "חיה", lastName: "אלמליח", phone: "050-3636363", lessonId: 7, price: 90, paid: false },
  { id: 36, firstName: "שיינא", lastName: "פרידמן", phone: "050-3737373", lessonId: 7, price: 90, paid: true },
  { id: 37, firstName: "שושנה", lastName: "כהנא", phone: "050-3838383", lessonId: 7, price: 90, paid: true },
  { id: 38, firstName: "טליה", lastName: "אבני", phone: "050-3939393", lessonId: 7, price: 90, paid: false },
  { id: 39, firstName: "דליה", lastName: "סגל", phone: "050-4040404", lessonId: 7, price: 90, paid: true },
  { id: 40, firstName: "נעמי", lastName: "גרוס", phone: "050-4141414", lessonId: 7, price: 90, paid: true },

  // שיעור 8
  { id: 41, firstName: "אסתר", lastName: "כהן", phone: "050-4242424", lessonId: 8, price: 110, paid: false },
  { id: 42, firstName: "רבקה", lastName: "גולדשטיין", phone: "050-4343434", lessonId: 8, price: 110, paid: true },
  { id: 43, firstName: "שירה", lastName: "לוריא", phone: "050-4444444", lessonId: 8, price: 110, paid: true },
  { id: 44, firstName: "יעל", lastName: "כהנא", phone: "050-4545454", lessonId: 8, price: 110, paid: false },
  { id: 45, firstName: "ליאת", lastName: "שפירא", phone: "050-4646464", lessonId: 8, price: 110, paid: true },
  { id: 46, firstName: "דינה", lastName: "כהן", phone: "050-4747474", lessonId: 8, price: 110, paid: true },

  // שיעור 9
  { id: 47, firstName: "ברכה", lastName: "רוזנברג", phone: "050-4848484", lessonId: 9, price: 95, paid: true },
  { id: 48, firstName: "מיכל", lastName: "זקס", phone: "050-4949494", lessonId: 9, price: 95, paid: false },
  { id: 49, firstName: "נועה", lastName: "בן דוד", phone: "050-5050505", lessonId: 9, price: 95, paid: true },
  { id: 50, firstName: "סמדר", lastName: "אלון", phone: "050-5151515", lessonId: 9, price: 95, paid: true },
  { id: 51, firstName: "תמר", lastName: "גל", phone: "050-5252525", lessonId: 9, price: 95, paid: false },

  // שיעור 10
  { id: 52, firstName: "יעל", lastName: "לביא", phone: "050-5353535", lessonId: 10, price: 100, paid: true },
  { id: 53, firstName: "רונית", lastName: "פרץ", phone: "050-5454545", lessonId: 10, price: 100, paid: true },
  { id: 54, firstName: "רבקה", lastName: "שטרן", phone: "050-5555555", lessonId: 10, price: 100, paid: false },
  { id: 55, firstName: "נועה", lastName: "לוי", phone: "050-5656565", lessonId: 10, price: 100, paid: true },
  { id: 56, firstName: "מיכל", lastName: "כהן", phone: "050-5757575", lessonId: 10, price: 100, paid: true },
  { id: 57, firstName: "רחל", lastName: "ברמן", phone: "050-5858585", lessonId: 10, price: 100, paid: true },

  // שיעור 11
  { id: 58, firstName: "חנה", lastName: "ברנשטיין", phone: "050-5959595", lessonId: 11, price: 105, paid: false },
  { id: 59, firstName: "אסתר", lastName: "זלצר", phone: "050-6060606", lessonId: 11, price: 105, paid: true },
  { id: 60, firstName: "רחל", lastName: "כהן", phone: "050-6161616", lessonId: 11, price: 105, paid: true },
  { id: 61, firstName: "מרים", lastName: "ברק", phone: "050-6262626", lessonId: 11, price: 105, paid: false },
  { id: 62, firstName: "שרה", lastName: "דויד", phone: "050-6363636", lessonId: 11, price: 105, paid: true },

  // שיעור 12
  { id: 63, firstName: "רבקה", lastName: "ציון", phone: "050-6464646", lessonId: 12, price: 90, paid: true },
  { id: 64, firstName: "חיה", lastName: "אלמליח", phone: "050-6565656", lessonId: 12, price: 90, paid: false },
  { id: 65, firstName: "שיינא", lastName: "פרידמן", phone: "050-6666666", lessonId: 12, price: 90, paid: true },
  { id: 66, firstName: "שושנה", lastName: "כהנא", phone: "050-6767676", lessonId: 12, price: 90, paid: true },
  { id: 67, firstName: "טליה", lastName: "אבני", phone: "050-6868686", lessonId: 12, price: 90, paid: false },
  { id: 68, firstName: "דליה", lastName: "סגל", phone: "050-6969696", lessonId: 12, price: 90, paid: true },

  // שיעור 13
  { id: 69, firstName: "נעמי", lastName: "גרוס", phone: "050-7070707", lessonId: 13, price: 110, paid: true },
  { id: 70, firstName: "אסתר", lastName: "כהן", phone: "050-7171717", lessonId: 13, price: 110, paid: false },
  { id: 71, firstName: "רבקה", lastName: "גולדשטיין", phone: "050-7272727", lessonId: 13, price: 110, paid: true },
  { id: 72, firstName: "שירה", lastName: "לוריא", phone: "050-7373737", lessonId: 13, price: 110, paid: true },
  { id: 73, firstName: "יעל", lastName: "כהנא", phone: "050-7474747", lessonId: 13, price: 110, paid: false },

  // שיעור 14
  { id: 74, firstName: "ליאת", lastName: "שפירא", phone: "050-7575757", lessonId: 14, price: 95, paid: true },
  { id: 75, firstName: "דינה", lastName: "כהן", phone: "050-7676767", lessonId: 14, price: 95, paid: true },
  { id: 76, firstName: "ברכה", lastName: "רוזנברג", phone: "050-7777777", lessonId: 14, price: 95, paid: false },
  { id: 77, firstName: "מיכל", lastName: "זקס", phone: "050-7878787", lessonId: 14, price: 95, paid: true },
  { id: 78, firstName: "נועה", lastName: "בן דוד", phone: "050-7979797", lessonId: 14, price: 95, paid: true },

  // שיעור 15
  { id: 79, firstName: "סמדר", lastName: "אלון", phone: "050-8080808", lessonId: 15, price: 100, paid: true },
  { id: 80, firstName: "תמר", lastName: "גל", phone: "050-8181818", lessonId: 15, price: 100, paid: false },
  { id: 81, firstName: "יעל", lastName: "לביא", phone: "050-8282828", lessonId: 15, price: 100, paid: true },
  { id: 82, firstName: "רונית", lastName: "פרץ", phone: "050-8383838", lessonId: 15, price: 100, paid: true },
  { id: 83, firstName: "רבקה", lastName: "שטרן", phone: "050-8484848", lessonId: 15, price: 100, paid: false },

  // שיעור 16
  { id: 84, firstName: "נועה", lastName: "לוי", phone: "050-8585858", lessonId: 16, price: 105, paid: true },
  { id: 85, firstName: "מיכל", lastName: "כהן", phone: "050-8686868", lessonId: 16, price: 105, paid: true },
  { id: 86, firstName: "רחל", lastName: "ברמן", phone: "050-8787878", lessonId: 16, price: 105, paid: false },
  { id: 87, firstName: "חנה", lastName: "ברנשטיין", phone: "050-8888888", lessonId: 16, price: 105, paid: true },

  // שיעור 17
  { id: 88, firstName: "אסתר", lastName: "זלצר", phone: "050-8989898", lessonId: 17, price: 90, paid: true },
  { id: 89, firstName: "רחל", lastName: "כהן", phone: "050-9090909", lessonId: 17, price: 90, paid: false },
  { id: 90, firstName: "מרים", lastName: "ברק", phone: "050-9191919", lessonId: 17, price: 90, paid: true },
  { id: 91, firstName: "שרה", lastName: "דויד", phone: "050-9292929", lessonId: 17, price: 90, paid: true },
  { id: 92, firstName: "רבקה", lastName: "ציון", phone: "050-9393939", lessonId: 17, price: 90, paid: false },

  // שיעור 18
  { id: 93, firstName: "חיה", lastName: "אלמליח", phone: "050-9494949", lessonId: 18, price: 110, paid: true },
  { id: 94, firstName: "שיינא", lastName: "פרידמן", phone: "050-9595959", lessonId: 18, price: 110, paid: true },
  { id: 95, firstName: "שושנה", lastName: "כהנא", phone: "050-9696969", lessonId: 18, price: 110, paid: false },
  { id: 96, firstName: "טליה", lastName: "אבני", phone: "050-9797979", lessonId: 18, price: 110, paid: true },

  // שיעור 19
  { id: 97, firstName: "דליה", lastName: "סגל", phone: "050-9898989", lessonId: 19, price: 95, paid: true },
  { id: 98, firstName: "נעמי", lastName: "גרוס", phone: "050-9999999", lessonId: 19, price: 95, paid: false },
  { id: 99, firstName: "אסתר", lastName: "כהן", phone: "050-1010101", lessonId: 19, price: 95, paid: true },
  { id: 100, firstName: "רבקה", lastName: "גולדשטיין", phone: "050-1111111", lessonId: 19, price: 95, paid: true },

  // שיעור 20
  { id: 101, firstName: "שירה", lastName: "לוריא", phone: "050-1212121", lessonId: 20, price: 100, paid: true },
  { id: 102, firstName: "יעל", lastName: "כהנא", phone: "050-1313131", lessonId: 20, price: 100, paid: false },
  { id: 103, firstName: "ליאת", lastName: "שפירא", phone: "050-1414141", lessonId: 20, price: 100, paid: true },
  { id: 104, firstName: "דינה", lastName: "כהן", phone: "050-1515151", lessonId: 20, price: 100, paid: true },
  { id: 105, firstName: "ברכה", lastName: "רוזנברג", phone: "050-1616161", lessonId: 20, price: 100, paid: false },

  // שיעור 21
  { id: 106, firstName: "מיכל", lastName: "זקס", phone: "050-1717171", lessonId: 21, price: 105, paid: true },
  { id: 107, firstName: "נועה", lastName: "בן דוד", phone: "050-1818181", lessonId: 21, price: 105, paid: true },
  { id: 108, firstName: "סמדר", lastName: "אלון", phone: "050-1919191", lessonId: 21, price: 105, paid: false },
  { id: 109, firstName: "תמר", lastName: "גל", phone: "050-2020202", lessonId: 21, price: 105, paid: true },

  // שיעור 22
  { id: 110, firstName: "יעל", lastName: "לביא", phone: "050-2121212", lessonId: 22, price: 90, paid: true },
  { id: 111, firstName: "רונית", lastName: "פרץ", phone: "050-2222222", lessonId: 22, price: 90, paid: false },
  { id: 112, firstName: "רבקה", lastName: "שטרן", phone: "050-2323232", lessonId: 22, price: 90, paid: true },
  { id: 113, firstName: "נועה", lastName: "לוי", phone: "050-2424242", lessonId: 22, price: 90, paid: true },

  // שיעור 23
  { id: 114, firstName: "מיכל", lastName: "כהן", phone: "050-2525252", lessonId: 23, price: 110, paid: true },
  { id: 115, firstName: "רחל", lastName: "ברמן", phone: "050-2626262", lessonId: 23, price: 110, paid: false },
  { id: 116, firstName: "חנה", lastName: "ברנשטיין", phone: "050-2727272", lessonId: 23, price: 110, paid: true },

  // שיעור 24
  { id: 117, firstName: "אסתר", lastName: "זלצר", phone: "050-2828282", lessonId: 24, price: 95, paid: true },
  { id: 118, firstName: "רחל", lastName: "כהן", phone: "050-2929292", lessonId: 24, price: 95, paid: false },
  { id: 119, firstName: "מרים", lastName: "ברק", phone: "050-3030303", lessonId: 24, price: 95, paid: true },
  { id: 120, firstName: "שרה", lastName: "דויד", phone: "050-3131313", lessonId: 24, price: 95, paid: true },

  // שיעור 25
  { id: 121, firstName: "רבקה", lastName: "ציון", phone: "050-3232323", lessonId: 25, price: 100, paid: true },
  { id: 122, firstName: "חיה", lastName: "אלמליח", phone: "050-3333333", lessonId: 25, price: 100, paid: false },
  { id: 123, firstName: "שיינא", lastName: "פרידמן", phone: "050-3434343", lessonId: 25, price: 100, paid: true },
  { id: 124, firstName: "שושנה", lastName: "כהנא", phone: "050-3535353", lessonId: 25, price: 100, paid: true },

  // שיעור 26
  { id: 125, firstName: "טליה", lastName: "אבני", phone: "050-3636363", lessonId: 26, price: 105, paid: false },
  { id: 126, firstName: "דליה", lastName: "סגל", phone: "050-3737373", lessonId: 26, price: 105, paid: true },
  { id: 127, firstName: "נעמי", lastName: "גרוס", phone: "050-3838383", lessonId: 26, price: 105, paid: true },

  // שיעור 27
  { id: 128, firstName: "אסתר", lastName: "כהן", phone: "050-3939393", lessonId: 27, price: 110, paid: true },
  { id: 129, firstName: "רבקה", lastName: "גולדשטיין", phone: "050-4040404", lessonId: 27, price: 110, paid: false },
  { id: 130, firstName: "שירה", lastName: "לוריא", phone: "050-4141414", lessonId: 27, price: 110, paid: true },
  { id: 131, firstName: "יעל", lastName: "כהנא", phone: "050-4242424", lessonId: 27, price: 110, paid: true },
];

  getRegistrations(): Registered[] {
    return this.registrations;
  }
  
  getRegistrationsByLessonId(lessonId: number) : Registered[]{
    return this.registrations.filter(r => r.lessonId === lessonId);
  }
}
