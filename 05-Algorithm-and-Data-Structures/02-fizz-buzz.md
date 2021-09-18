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