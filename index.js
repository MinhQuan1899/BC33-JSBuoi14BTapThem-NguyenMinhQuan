/**Bài tập 1
 * Sơ đồ 3 khối
 * 
 * input: ngày, tháng , năm
 * process: ngày tiếp theo + 1
 *          ngày hôm qua - 1
 * output: ngày tiếp theo, ngày hôm qua
 */

 var date = 13
 var month = 7
 var year = 2022

 var nextDay = date + 1
 var lastDay = date - 1
 
 console.log(nextDay)
 console.log(lastDay)

 /*Bài tập 2
 Sơ đồ 3 khối
 input: ngày tháng năm
 process: quy định ngày tối đa cụ thể từng tháng 
 output:*/

 var m = 1;
 var dateOfMonth;
 switch(m){
   case 4: case 6: case 9: case 11:
      dateOfMonth = "Tháng "+m+" có 30 ngày ";
      break;
   case 2:
      dateOfMonth = "Tháng "+m+" có 29 ngày ";
      break;
   default:
      dateOfMonth = "Tháng "+m+" có 31 ngày ";
 }
 console.log(dateOfMonth)



 



 