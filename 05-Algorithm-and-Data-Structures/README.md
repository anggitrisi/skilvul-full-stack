# 01-Thermometer
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

# 02-fizz-buz
    INPUT N # user input
    iteration = 1

    WHILE iteration <= N 
      IF iteration MOD 3 AND iteration MOD 5 IS 0 THEN
        DISPLAY "FIZZBUZZ"
      ELSEIF iteration MOD 3 IS 0 THEN
        DISPLAY "FIZZ"
      ELSE IF iteration MOD 5 IS 5 THEN
        DISPLAY "BUZZ"
      ELSE
        DISPLAY iteration 
      ENDIF
      iteration = iteration + 1
    ENDWHILE
    
    DISPLAY "SELESAI"

# 03-same-meaning

    INPUT kata 
    panjang_kata = LEN kata 
    iterationMin = panjang_kata - 1
    iterationPlus = 0
    output = TRUE

    WHILE iterationPlus < panjang_kata/2
      IF kata[iterationPlus] IS NOT kata[iterationMin] THEN
          output = FALSE
      ENDIF

      iterationMin--
      iterationPlus++
  
    DISPLAY output
    DISPLAY "SELESAI"

# 04-skilvul-grading
    INPUT nilai_siswa 

    IF (nilai_siswa < 68) THEN
      DISPLAY nilai_siswa
    ELSE
      IF nilai_siswa % 5 >= 3
        DISPLAY nilai_siswa + (5 - NILAI % 5)
      ELSE
        DISPLAY nilai_siswa
    ENDIF

    DISPLAY "SELESAI"
