INPUT temp 
INPUT tempType #text = "fahrenheit"

IF TYPE FROM temp IS NOT NUMBER THEN
  DISPLAY "Temperature yang Dimasukkan Salah! Harus Angka!"
ENDIF

IF tempType IS "farenheit" THEN
  DISPLAY (temp-32) * (5/9)
ELSE IF tempType IS "kelvin" THEN
  DISPLAY (temp - 273.15)
ELSE IF tempType IS "celcius" THEN
  DISPLAY temp
ELSE 
  DISPLAY "TIPE YANG DIMASUKKAN SALAH!"
ENDIF